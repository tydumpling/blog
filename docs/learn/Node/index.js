const fs = require('node:fs')
const path = require('node:path')
const http = require('node:http')

const server = http.createServer()

server.on('request', (req, res) => {
  const url = req.url
  const method = req.method

  let fPath = ''
  if (url === '/')
    fPath = path.join(__dirname, '/clock/clock.html')
  else
    fPath = path.join(__dirname, '/clock', url)

  fs.readFile(fPath, 'utf8', (err, result) => {
    if (err)
      return res.end('404 not')
    res.end(result)
  })
})

server.listen(80, () => {
  console.log('已启动')
})
