import { formatDistanceToNow } from 'date-fns'

export default function TaskStats ({ tasks, lastUpdated }) {
  const completedCount = tasks.filter((task) => task.completed).length
  const totalCount = tasks.length

  const formattedTime = lastUpdated
    ? formatDistanceToNow(new Date(lastUpdated), { addSuffix: true })
    : 'Just now'

  return (
    <div className='mt-4 text-sm text-slate-500 dark:text-slate-400 flex justify-between'>
      <span>
        {totalCount} {totalCount === 1 ? 'item' : 'items'} • {completedCount}{' '}
        completed
      </span>
      <div className='text-xs text-slate-400 dark:text-slate-500'>
        Last updated: {formattedTime}
      </div>
    </div>
  )
}
