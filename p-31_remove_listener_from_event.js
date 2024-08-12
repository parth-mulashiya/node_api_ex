const EventEmitter = require('events')
var eventEmitter = new EventEmitter()

var msg1 = (msg)=>{
    console.log("Message from msg1 : "+ msg)
}
var msg2 = (msg)=>{
    console.log("Message from msg2 : "+ msg)
}

eventEmitter.on('myEvent',msg1)
eventEmitter.on('myEvent',msg2)

eventEmitter.removeListener('myEvent',msg1)

eventEmitter.emit('myEvent',"Event occured!")

eventEmitter.removeAllListeners('myEvent')

eventEmitter.emit('myEvent',"Event occured!")

