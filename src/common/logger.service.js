const winston = require('winston')
let today = new Date().toISOString().slice(0,10)
const logConfiguration = {
    format:winston.format.combine(winston.format.timestamp({format:'YYYY-MM-DD HH:mm:ss'}), winston.format.json()),
    transports : [new winston.transports.File({filename:`logs/${today}.logs`})]
}
module.exports = winston.createLogger(logConfiguration)