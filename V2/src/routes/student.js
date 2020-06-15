let StudentDetail = require("../details/studentDetail")


let express =require('express')
let router = express.Router()

router.post('/student', (req,res) =>{
    //  body

    if(!req.body){
        return res.status(400).send("request body is missing bro")
    }

    // name email and course. all strings
    let Detail = new StudentDetail(req.body)
    Detail.save()
        .then(doc =>{
            if(!doc || doc.length ===0){
                return res.status(500).send(doc)

            }
            res.status(201).send(doc)
            
        })

        .catch(err =>{
            res.status(500).json(err)
        })
})


router.get('/student', (req,res) =>{
    StudentDetail.findOne({
        email: req.query.email
    })
    .then(doc =>{
        res.json(doc)
    })
})


// router.get('/student/:name' , (req, res) =>{
//     res.send(`We would like to know about the student named as ${req.params.name}`)
// })

// router.get('/student/:rollNumber' , (req, res) =>{
//     res.send(`We would like to know about the student with roll number  ${req.params.rollNumber}`)
// })

router.get('/error' , (req, res) =>{
        throw new Error('This is a forced error')
})



module.exports = router

