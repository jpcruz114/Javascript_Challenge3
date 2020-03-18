const express = require('express')
const app = express()

app.use(express.json())

require('./routes/index')(app)

app.listen(3000, () => console.log("listening to port 3000..."))





