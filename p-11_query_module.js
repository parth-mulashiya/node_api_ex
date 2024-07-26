const url = require("url")
const queryString = require("querystring")
const myUrl = url.parse("https://www.example.com:81/sun?id=134&num=2")

const query = myUrl.query
let query_parsed = queryString.parse(query)
console.log("Passed Query string : ", query_parsed)