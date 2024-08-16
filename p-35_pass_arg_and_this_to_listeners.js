const EventEmitter = require("node:events")

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('event', (a, b) => {
    console.log(a, b, this);
})

myEmitter.emit('event', 'a', 'b');