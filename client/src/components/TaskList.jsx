import { useState } from 'react'
import { Pencil, Trash2, Check, X } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { Checkbox } from '@/components/ui/checkbox'

export default function TaskList ({
  tasks,
  isLoading,
  error,
  onToggleTask,
  onEditTask,
  onDeleteTask
}) {
  const [editingTaskId, setEditingTaskId] = useState(null)
  const [editValue, setEditValue] = useState('')

  const handleEditTask = (task) => {
    setEditingTaskId(task.id)
    setEditValue(task.content)
  }

  const handleSaveTask = (e) => {
    e.preventDefault()
    if (!editValue.trim()) return

    onEditTask(editingTaskId, editValue.trim())
    setEditingTaskId(null)
    setEditValue('')
  }

  const handleCancelEdit = () => {
    setEditingTaskId(null)
    setEditValue('')
  }

  // Loading state
  if (isLoading) {
    return (
      <div className='bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden'>
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className='px-4 py-3 border-b border-slate-200 dark:border-slate-700 last:border-0'
          >
            <div className='flex items-center'>
              <Skeleton className='h-5 w-5 rounded-full mr-3' />
              <Skeleton className='h-5 w-full' />
            </div>
          </div>
        ))}
      </div>
    )
  }

  // Error state
  if (error) {
    return (
      <div className='bg-white dark:bg-slate-900 rounded-lg border border-red-200 dark:border-red-800 shadow-sm overflow-hidden p-4 text-red-500 dark:text-red-400'>
        {error}
      </div>
    )
  }

  // Empty state
  if (tasks.length === 0) {
    return (
      <div className='bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden'>
        <div className='p-8 flex flex-col items-center justify-center text-center'>
          <div className='w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mb-4'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='text-slate-400'
            >
              <line x1='8' y1='6' x2='21' y2='6' />
              <line x1='8' y1='12' x2='21' y2='12' />
              <line x1='8' y1='18' x2='21' y2='18' />
              <line x1='3' y1='6' x2='3.01' y2='6' />
              <line x1='3' y1='12' x2='3.01' y2='12' />
              <line x1='3' y1='18' x2='3.01' y2='18' />
            </svg>
          </div>
          <h3 className='text-lg font-medium text-slate-900 dark:text-slate-100 mb-1'>
            No tasks yet
          </h3>
          <p className='text-slate-500 dark:text-slate-400'>
            Add a new task to get started
          </p>
        </div>
      </div>
    )
  }

  // Tasks list
  return (
    <div className='bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden'>
      <ul className='divide-y divide-slate-200 dark:divide-slate-700'>
        {tasks.map((task) => (
          <li
            key={task.id}
            className={`group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors ${
              task.completed ? 'task-complete' : ''
            } ${editingTaskId === task.id ? 'bg-slate-50 dark:bg-slate-800/50' : ''}`}
          >
            {editingTaskId === task.id
              ? (
                <div className='px-4 py-3'>
                  <form className='flex items-center' onSubmit={handleSaveTask}>
                    <div className='flex-1'>
                      <Input
                        type='text'
                        value={editValue}
                        onChange={(e) => setEditValue(e.target.value)}
                        className='w-full px-3 py-1.5'
                        autoFocus
                      />
                    </div>
                    <div className='flex items-center ml-2 space-x-1'>
                      <Button
                        type='submit'
                        size='sm'
                        className='p-1.5 bg-slate-800 text-white rounded-md hover:bg-slate-700'
                      >
                        <Check size={16} />
                      </Button>
                      <Button
                        type='button'
                        variant='secondary'
                        size='sm'
                        onClick={handleCancelEdit}
                        className='p-1.5 bg-slate-200 text-slate-700 rounded-md hover:bg-slate-300'
                      >
                        <X size={16} />
                      </Button>
                    </div>
                  </form>
                </div>
                )
              : (
                <div className='px-4 py-3 flex items-center'>
                  <div className='flex-1 flex items-center min-w-0'>
                    <div className='relative inline-flex items-center justify-center'>
                      <Checkbox
                        checked={task.completed}
                        onCheckedChange={() => onToggleTask(task.id)}
                        className='h-5 w-5 rounded-full'
                      />
                    </div>
                    <span
                      className={`ml-3 text-sm font-medium flex-1 truncate relative task-text ${
                      task.completed
                        ? 'text-slate-500 dark:text-slate-400'
                        : 'text-slate-900 dark:text-slate-100'
                    }`}
                    >
                      {task.content}
                    </span>
                  </div>
                  <div className='flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity'>
                    <button
                      className='p-1 text-slate-400 hover:text-slate-700 dark:hover:text-slate-300 rounded'
                      onClick={() => handleEditTask(task)}
                      aria-label='Edit task'
                    >
                      <Pencil size={16} />
                    </button>
                    <button
                      className='p-1 text-slate-400 hover:text-red-500 rounded'
                      onClick={() => onDeleteTask(task.id)}
                      aria-label='Delete task'
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
                )}
          </li>
        ))}
      </ul>
    </div>
  )
}
