import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function TaskInput ({ onAddTask }) {
  const [newTaskInput, setNewTaskInput] = useState('')

  const handleAddTask = (e) => {
    e.preventDefault()

    if (!newTaskInput.trim()) return

    onAddTask(newTaskInput.trim())
    setNewTaskInput('')
  }

  return (
    <div className='mb-8'>
      <form className='flex items-center space-x-2' onSubmit={handleAddTask}>
        <div className='relative flex-1'>
          <Input
            type='text'
            id='newTask'
            name='newTask'
            placeholder='Add a new task...'
            value={newTaskInput}
            onChange={(e) => setNewTaskInput(e.target.value)}
            className='px-4 py-3 w-full'
          />
        </div>
        <Button
          type='submit'
          className='bg-slate-800 hover:bg-slate-700 text-white px-4 py-3 rounded-md font-medium transition-colors'
        >
          Add
        </Button>
      </form>
    </div>
  )
}
