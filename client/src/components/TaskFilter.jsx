export default function TaskFilter ({
  activeFilter,
  onFilterChange,
  onClearCompleted
}) {
  const filters = [
    { value: 'all', label: 'All' },
    { value: 'active', label: 'Active' },
    { value: 'completed', label: 'Completed' }
  ]

  return (
    <div className='mb-6 flex items-center justify-between'>
      <div className='inline-flex items-center space-x-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-md'>
        {filters.map((filter) => (
          <button
            key={filter.value}
            className={`px-3 py-1.5 text-sm font-medium rounded-sm transition-colors ${
              activeFilter === filter.value
                ? 'bg-white dark:bg-slate-700 shadow-sm'
                : 'hover:bg-white/50 dark:hover:bg-slate-700/50'
            }`}
            onClick={() => onFilterChange(filter.value)}
          >
            {filter.label}
          </button>
        ))}
      </div>
      <button
        className='text-sm text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 transition-colors'
        onClick={onClearCompleted}
      >
        Clear completed
      </button>
    </div>
  )
}
