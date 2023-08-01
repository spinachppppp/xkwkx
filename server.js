const server = require('express')()
server.get('*', (req, res) => res.send('asdf'))
module.exports = () => server.listen(3000)
