let express = require("express")
let path =require('path')

let bodyParser = require('body-parser')

let app =express()


let studentRoute = require('./routes/student')
let profRoute = require('./routes/prof')

app.use(bodyParser.json())

app.use((req,res,nextFunc)=>{
    console.log(`Hey the requested URl is ${req.originalUrl} and the time and date are  ${new Date().toString()}`)
    console.log(req.body)

    nextFunc()

})


app.use(studentRoute)
app.use(profRoute)
app.use(express.static('public'))



// To manage not found pages: 404
app.use((req,res,nextFunc) =>{
    res.status(404).send("Hey buddy... I think you should watch Dark releasing on 27th June.... By the way You are Lost. 404")
})

// To manage not found pages: 500

app.use((err,req,res,nextFunc) =>{
console.error(err.stack)

res.sendFile(path.join(__dirname, '../public/500.html'))
})

const PORT = 5140

app.listen(PORT, ()=>console.log(`server chalu hai on ${PORT}`))


