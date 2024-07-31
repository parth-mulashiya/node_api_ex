
const axios = require("axios")

axios.get("https://jsonplaceholder.typicode.com/posts/1").then((res)=> console.log(res.data)).catch((err)=> console.log(err))