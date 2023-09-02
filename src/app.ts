import config from './config'
import logger from './lib/logger'

const app = {
  start() {
    logger.info(`NODE_ENV=${config.nodeEnv}`)
    logger.debug('Welcome hack!')
  }
}

export default app
