const http = require('http')
const port = 3000
const server = http.createServer((req, res)=>{
res.statusCode = 200
res.setHeader('Contenty-Type', 'text/html')
res.end('<h1>Olá, este é meu servidor</h1>')
})

server.listen(port,()=>{
    console.log('Server rodando na porta 3000')
})