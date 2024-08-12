const events = require('events')
const myEmitter = new events.EventEmitter();

var listener1 = function listener1(){
    console.log('listener1 executed.')
}

var listener2 = function listener2(){
    console.log('listener2 executed.')
}

myEmitter.addListener('connection',listener1)
myEmitter.on('connection',listener2)

myEmitter.emit('connection')
console.log('Number of listener : ', myEmitter.listenerCount('connection'))