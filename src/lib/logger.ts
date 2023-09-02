import winston from 'winston'
import { format } from 'winston'

const loggerFormat = format.printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`
})

const logger = winston.createLogger({
  level: 'debug',
  format: format.combine(
    format.label({ label: 'starter-2023' }),
    format.timestamp(),
    loggerFormat
  ),
  transports: [
    new winston.transports.Console()
  ]
})

export default logger
