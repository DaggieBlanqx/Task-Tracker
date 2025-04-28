import { AppError } from '../shared/errors.js'
import { log } from './vite.js'

/**
 * Wraps an async Express route handler to automatically catch errors
 * and forward them to the next middleware (typically an error handler).
 *
 * Prevents the need for repetitive try-catch blocks in every route.
 *
 * @function asyncHandler
 * @param {import('express').RequestHandler} fn - The async route handler function to wrap
 * @returns {import('express').RequestHandler} Wrapped route handler with error forwarding
 */
export const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next)
}

/**
 * Centralized Express error handling middleware.
 *
 * Differentiates between known application errors (instances of AppError)
 * and unknown/unexpected errors. Sends appropriate HTTP responses.
 *
 * @function errorHandler
 * @param {Error} err - Thrown error object
 * @param {import('express').Request} req - Express request object
 * @param {import('express').Response} res - Express response object
 * @param {import('express').NextFunction} next - Express next middleware function
 * @returns {void}
 */
export const errorHandler = (err, req, res, next) => {
  console.trace(err)

  if (err instanceof AppError) {
    return res.status(err.statusCode).json({ error: err.message })
  }

  const status = err.status || err.statusCode || 500
  const message = err.message || 'Internal Server Error'

  res.status(status).json({ error: message })
}

/**
 * Creates a configurable Express middleware that logs HTTP request and response details.
 *
 * This middleware captures and logs:
 * - HTTP method (e.g., GET, POST)
 * - Request path (full original URL)
 * - Response status code (e.g., 200, 404)
 * - Response duration in milliseconds
 * - Captured JSON response body (if available)
 *
 * Only logs requests whose paths start with the specified `basePath`.
 * Automatically trims overly long log lines for readability.
 *
 * Example usage:
 * ```javascript
 * app.use(createRequestLogger('/api'))
 * ```
 *
 * Example output:
 * ```
 * {"method":"POST","path":"/api/tasks","status":201,"duration":"7.2ms","response":{"id":1,"content":"Buy milk"}}
 * ```
 *
 * @function createRequestLogger
 * @param {string} [basePath='/api'] - The URL prefix to filter which requests should be logged (e.g., "/api", "/v1")
 * @returns {import('express').RequestHandler} Express middleware function to be used with `app.use()`
 *
 * @see {@link https://expressjs.com/en/guide/using-middleware.html|Express Middleware Guide}
 */
export const createRequestLogger = (basePath = '/api') => {
  return (req, res, next) => {
    const start = process.hrtime.bigint()
    const { method, originalUrl } = req
    let capturedResponse

    const originalJson = res.json.bind(res)
    res.json = (body) => {
      capturedResponse = body
      return originalJson(body)
    }

    res.on('finish', () => {
      const durationMs = Number(process.hrtime.bigint() - start) / 1_000_000

      if (originalUrl.startsWith(basePath)) {
        const logPayload = {
          method,
          path: originalUrl,
          status: res.statusCode,
          duration: `${durationMs.toFixed(1)}ms`,
          response: capturedResponse
        }

        const logLine = JSON.stringify(logPayload)

        log(logLine.length > 300 ? logLine.slice(0, 299) + '…' : logLine)
      }
    })

    next()
  }
}
