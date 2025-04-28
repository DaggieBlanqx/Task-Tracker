import Joi from 'joi'

/**
 * Joi validation schemas for Task operations.
 *
 * @readonly
 * @enum {Object}
 */
const taskSchema = {
  NEW: Joi.object().keys({
    content: Joi.string().required(),
    completed: Joi.boolean().required()
  }),
  EDIT: Joi.object().keys({
    id: Joi.number().required(),
    content: Joi.string().required(),
    completed: Joi.boolean().required()
  }),
  DELETE: Joi.object().keys({
    id: Joi.number().required()
  })
}

/**
 * Collection of all available validation schemas.
 *
 * @type {Object<string, Object>}
 */
const schemas = {
  TASK: taskSchema
}

/**
 * Validates input data against a predefined schema.
 *
 * @param {string} schema - The schema to validate against, in the format "PARENT.CHILD" (e.g., "TASK.NEW").
 * @param {Object} [data={}] - The data object to validate.
 * @returns {Object} - The validated data.
 *
 * @throws {Error} If the schema is invalid or validation fails, throws an Error with a validation message.
 *
 * @example
 * const reqBody = {
 *   content: 'Learn JSDoc',
 *   completed: false
 * };
 *
 * const result = validate('TASK.NEW', reqBody);
 *
 * // If validation is successful:
 * // => returns the validated data:
 * // {
 * //   content: 'Learn JSDoc',
 * //   completed: false
 * // }
 *
 * // If validation fails:
 * // => throws an Error with validation details.
 */
const validate = (schema, data = {}) => {
  const [parent, child] = schema.split('.')

  if (!schemas?.[parent]?.[child]) {
    throw new Error('Invalid schema. Please provide a valid schema')
  }

  const { error, value } = schemas[parent][child].validate(data)

  if (error) {
    const errorParams = {
      ...error,
      type: 'VALIDATION_ERROR'
    }

    throw new Error(errorParams)
  }

  return value
}

export default validate
