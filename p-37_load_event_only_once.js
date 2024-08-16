var events = require('events')
var emitter = new events.EventEmitter();
var author = 'R.K.Narayan';
var title = 'The Guide';

emitter.once("addAuthorTItle", function(author, title) {
    console.log("Added Author and Title " + author + " - " + title);
})

emitter.emit("addAuthorTItle", author, title)
emitter.emit("addAuthorTItle", author, title)