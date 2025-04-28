import { createServer } from 'http'
import tasksRouter from './tasks.js'

export async function registerRoutes (app) {
  app.use('/api/v1/tasks', tasksRouter)
  const httpServer = createServer(app)
  return httpServer
}
