let express =require('express')
let router = express.Router()


router.get('/student' , (req, res) =>{
    res.send(" We would like to know about the student")
})

router.get('/student/:name' , (req, res) =>{
    res.send(`We would like to know about the student named as ${req.params.name}`)
})

router.get('/student/:rollNumber' , (req, res) =>{
    res.send(`We would like to know about the student with roll number  ${req.params.rollNumber}`)
})

router.get('/error' , (req, res) =>{
        throw new Error('This is a forced error')
})

module.exports = router