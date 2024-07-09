
const http=require("http")
const server=http.createServer(function(requ,resp){
    resp.write('<h1>Hello Node!!!!</h1>\n')
    resp.end()
})
server.listen(3000,(err)=>{
    err?console.log(err):console.log("server is running on port 3000")
})