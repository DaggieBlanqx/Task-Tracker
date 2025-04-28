import { Router } from 'express'
import { storage } from '../db/storage.js'
import validate from '../../shared/validation-schemas.js'
import { AppError } from '../../shared/errors.js'
import { asyncHandler } from '../middlewares.js'

const router = Router()

router.get(
  '/',
  asyncHandler(async (req, res) => {
    const tasks = await storage.getAllTasks()
    res.json(tasks)
  })
)

router.post(
  '/',
  asyncHandler(async (req, res) => {
    const validatedData = validate('TASK.NEW', req.body)
    const newTask = await storage.createTask(validatedData)
    res.status(201).json(newTask)
  })
)

router.put(
  '/:id',
  asyncHandler(async (req, res) => {
    const validatedData = validate('TASK.EDIT', {
      id: req.params.id,
      ...req.body
    })

    const updatedTask = await storage.updateTask(
      validatedData.id,
      validatedData
    )

    if (!updatedTask) {
      throw new AppError('Task not found', 404)
    }

    res.json(updatedTask)
  })
)

router.delete(
  '/completed',
  asyncHandler(async (req, res) => {
    await storage.deleteCompletedTasks()
    res.sendStatus(204)
  })
)

router.delete(
  '/:id',
  asyncHandler(async (req, res) => {
    const validatedData = validate('TASK.DELETE', { id: req.params.id })

    const success = await storage.deleteTask(validatedData.id)

    if (!success) {
      throw new AppError('Task not found', 404)
    }

    res.sendStatus(204)
  })
)

export default router
