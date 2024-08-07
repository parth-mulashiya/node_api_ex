const fs = require('fs')

fs.rename('Users/demos','Users/demo',err => {
    if(err) throw err;
    console.log('Folder renamed.')
})