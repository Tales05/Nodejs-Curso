const EventEmitter = require('events')
const evenEmitter = new EventEmitter()

evenEmitter.on('start', () => {
    console.log("Durante")
})

console.log("Antes")

evenEmitter.emit('start')

console.log('Depois')
