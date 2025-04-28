export class MemStorage {
  constructor () {
    this.tasks = new Map()
    this.currentId = 1
  }

  async getAllTasks () {
    return Array.from(this.tasks.values())
  }

  async getTask (id) {
    return this.tasks.get(id)
  }

  async createTask (insertTask) {
    const id = this.currentId++
    const task = { ...insertTask, id }
    this.tasks.set(id, task)
    return task
  }

  async updateTask (id, updateData) {
    const existingTask = this.tasks.get(id)

    if (!existingTask) {
      return undefined
    }

    const updatedTask = { ...existingTask, ...updateData }
    this.tasks.set(id, updatedTask)
    return updatedTask
  }

  async deleteTask (id) {
    return this.tasks.delete(id)
  }

  async deleteCompletedTasks () {
    for (const [id, task] of this.tasks) {
      if (task.completed) {
        this.tasks.delete(id)
      }
    }
  }
}

export const storage = new MemStorage()
