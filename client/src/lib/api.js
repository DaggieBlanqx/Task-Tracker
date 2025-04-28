// API client for interacting with the server

export async function fetchTasks () {
  const response = await fetch('/api/v1/tasks')
  if (!response.ok) {
    const errorText = await response.text()
    throw new Error(errorText || response.statusText)
  }
  return response.json()
}

export async function createTask (taskData) {
  const response = await fetch('/api/v1/tasks', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(taskData)
  })

  if (!response.ok) {
    const errorText = await response.text()
    throw new Error(errorText || response.statusText)
  }

  return response.json()
}

export async function updateTask (id, taskData) {
  const response = await fetch(`/api/v1/tasks/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(taskData)
  })

  if (!response.ok) {
    const errorText = await response.text()
    throw new Error(errorText || response.statusText)
  }

  return response.json()
}

export async function deleteTask (id) {
  const response = await fetch(`/api/v1/tasks/${id}`, {
    method: 'DELETE'
  })

  if (!response.ok) {
    const errorText = await response.text()
    throw new Error(errorText || response.statusText)
  }

  return true
}

export async function clearCompletedTasks () {
  const response = await fetch('/api/v1/tasks/completed', {
    method: 'DELETE'
  })

  if (!response.ok) {
    const errorText = await response.text()
    throw new Error(errorText || response.statusText)
  }

  return true
}
