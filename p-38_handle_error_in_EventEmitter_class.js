const EventEmitter = require('node:events')

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('error', (err) => {
    console.log('Error! there was an error.')
})

myEmitter.emit('error', new Error('Error!'))