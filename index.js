const express = require('express')
const app = express()
const port = process.env.PORT||3000
app.use(express.static('private'))
app.get('/', (req, res) => res.sendFile(__dirname+'/private/html/index.html'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))