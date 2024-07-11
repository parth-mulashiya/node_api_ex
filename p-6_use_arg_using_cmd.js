var arg = process.argv
function add(a,b){
    return parseInt(a)+parseInt(b)
}
var sum = add(arg[2],arg[3])
console.log("Addition of 2,3 arguments is : ",sum)