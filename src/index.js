let express = require("express")

let app =express()

app.use(express.static('public'))

const PORT = 5140

app.listen(PORT, ()=>console.log(`server chalu hai on ${PORT}`))


