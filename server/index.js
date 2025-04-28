import express from 'express'
import 'dotenv/config'
import { registerRoutes } from './routes/index.js'
import { setupVite, serveStatic, log } from './vite.js'
import { createRequestLogger, errorHandler } from './middlewares.js'

/**
 * Starts the Express application with appropriate configuration for development or production.
 *
 * @async
 * @function main
 * @returns {Promise<void>}
 */
const main = async () => {
  const app = express()

  // --- Core Middlewares ---
  app.use(express.json())
  app.use(express.urlencoded({ extended: false }))
  app.use(createRequestLogger())

  // --- Register Routes ---
  const server = await registerRoutes(app)

  // --- Development vs Production Setup ---
  if (app.get('env') === 'development') {
    await setupVite(app, server)
  } else {
    serveStatic(app)
  }

  // --- Error Handling Middleware ---
  app.use(errorHandler)

  // --- Start Server ---
  const port = process.env.PORT || 9000
  const host = '0.0.0.0'

  server.listen({ port, host }, (error) => {
    if (error) {
      console.error(error)
      process.exit(1)
    }
    log(`🚀 Server running on http://${host}:${port}`)
  })
}

main().catch((err) => {
  console.error('Fatal error during startup:', err)
  process.exit(1)
})
