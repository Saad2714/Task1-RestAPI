let ProfDetail = require("../details/profDetail")

let express =require('express')
let router = express.Router()

// Adding a new prof
router.post('/professor', (req,res) =>{
    //  body

    if(!req.body){
        return res.status(400).send("request body is missing bro")
    }

    // name email and course. all strings
    let Detail = new ProfDetail(req.body)
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

router.get('/professor', (req,res) =>{
    ProfDetail.findOne({
        email: req.query.email
    })
    .then(doc =>{
        res.json(doc)
    })
})

router.put('/professor', (req,res) =>{
    ProfDetail.findOneAndUpdate({
        email: req.query.email
    },req.body,{
        new:true
    })
    .then(doc =>{
        res.json(doc)
    })
})

router.delete('/professor', (req,res) =>{
    ProfDetail.findOneAndRemove({
        email: req.query.email
    })
    .then(doc =>{
        res.json(doc)
    })
})

module.exports = router
