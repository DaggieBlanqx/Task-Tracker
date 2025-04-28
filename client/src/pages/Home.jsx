import { useState, useEffect } from 'react'
import Header from '@/components/Header'
import TaskInput from '@/components/TaskInput'
import TaskFilter from '@/components/TaskFilter'
import TaskList from '@/components/TaskList'
import TaskStats from '@/components/TaskStats'
import Footer from '@/components/Footer'
import {
  fetchTasks,
  createTask,
  updateTask,
  deleteTask,
  clearCompletedTasks
} from '@/lib/api'
import { useToast } from '@/hooks/use-toast'

export default function Home () {
  const [tasks, setTasks] = useState([])
  const [activeFilter, setActiveFilter] = useState('all')
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const [lastUpdated, setLastUpdated] = useState(new Date())
  const { toast } = useToast()

  // Load tasks on component mount
  useEffect(() => {
    loadTasks()
  }, [])

  async function loadTasks () {
    setIsLoading(true)
    setError(null)

    try {
      const data = await fetchTasks()
      setTasks(data)
      setLastUpdated(new Date())
    } catch (err) {
      setError('Failed to load tasks')
      toast({
        title: 'Error',
        description: 'Failed to load tasks. Please try again.',
        variant: 'destructive'
      })
    } finally {
      setIsLoading(false)
    }
  }

  // Filter tasks based on active filter
  const filteredTasks = tasks.filter((task) => {
    if (activeFilter === 'active') return !task.completed
    if (activeFilter === 'completed') return task.completed
    return true // All tasks
  })

  // Add a new task
  const handleAddTask = async (content) => {
    try {
      const newTask = await createTask({ content, completed: false })
      setTasks((prev) => [...prev, newTask])
      setLastUpdated(new Date())
      toast({
        title: 'Success',
        description: 'Task added successfully'
      })
    } catch (err) {
      toast({
        title: 'Error',
        description: 'Failed to add task',
        variant: 'destructive'
      })
    }
  }

  // Toggle a task's completion status
  const handleToggleTask = async (id) => {
    try {
      const task = tasks.find((t) => t.id === id)
      if (!task) return

      const updatedTask = await updateTask(id, {
        content: task.content,
        completed: !task.completed
      })

      setTasks((prev) => prev.map((t) => (t.id === id ? updatedTask : t)))
      setLastUpdated(new Date())
    } catch (err) {
      toast({
        title: 'Error',
        description: 'Failed to update task',
        variant: 'destructive'
      })
    }
  }

  // Edit a task's content
  const handleEditTask = async (id, content) => {
    try {
      const task = tasks.find((t) => t.id === id)
      if (!task) return

      const updatedTask = await updateTask(id, {
        content,
        completed: task.completed
      })

      setTasks((prev) => prev.map((t) => (t.id === id ? updatedTask : t)))
      setLastUpdated(new Date())
      toast({
        title: 'Success',
        description: 'Task updated successfully'
      })
    } catch (err) {
      toast({
        title: 'Error',
        description: 'Failed to update task',
        variant: 'destructive'
      })
    }
  }

  // Delete a task
  const handleDeleteTask = async (id) => {
    try {
      await deleteTask(id)
      setTasks((prev) => prev.filter((t) => t.id !== id))
      setLastUpdated(new Date())
      toast({
        title: 'Success',
        description: 'Task deleted successfully'
      })
    } catch (err) {
      toast({
        title: 'Error',
        description: 'Failed to delete task',
        variant: 'destructive'
      })
    }
  }

  // Clear all completed tasks
  const handleClearCompleted = async () => {
    try {
      await clearCompletedTasks()
      setTasks((prev) => prev.filter((t) => !t.completed))
      setLastUpdated(new Date())
      toast({
        title: 'Success',
        description: 'Completed tasks cleared'
      })
    } catch (err) {
      toast({
        title: 'Error',
        description: 'Failed to clear completed tasks',
        variant: 'destructive'
      })
    }
  }

  return (
    <div className='min-h-screen flex flex-col'>
      <Header />

      <main className='flex-1 container mx-auto px-4 py-8 max-w-3xl'>
        <TaskInput onAddTask={handleAddTask} />

        <TaskFilter
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
          onClearCompleted={handleClearCompleted}
        />

        <TaskList
          tasks={filteredTasks}
          isLoading={isLoading}
          error={error}
          onToggleTask={handleToggleTask}
          onEditTask={handleEditTask}
          onDeleteTask={handleDeleteTask}
        />

        <TaskStats tasks={tasks} lastUpdated={lastUpdated} />
      </main>

      <Footer />
    </div>
  )
}
