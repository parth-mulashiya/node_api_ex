const os = require("os")

console.log("Operating System type : " + os.type())
console.log("Platform  : " + os.platform())
console.log("Total Memory : " + os.totalmem())
console.log("Available Memory : " + os.freemem())
console.log("CPU Arch : " + os.arch())
console.log("Host Name : " + os.hostname())