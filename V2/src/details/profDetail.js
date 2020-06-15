let mongoose = require('mongoose')

 const server ='ds139436.mlab.com:39436'
 const database ='task1nodejs'
 const user ='saad'
 const password ='saad1234'

 mongoose.connect("mongodb://saad:saad1234@ds139436.mlab.com:39436/task1nodejs")

 
// module.exports={
//     mongoURL: 'mongodb://saad:saad1234@ds139436.mlab.com:39436/task1nodejs'

// }



let ProfSchema = new mongoose.Schema({
    name:String,
    email: {
        type:String,
        required: true,
        unoque:true,
    
    },
    course:String,


})

// let StudentSchema = new mongoose.Schema({
//     name:String,
//     email: {
//         type:String,
//         required: true,
//         unique:true,
    
//     },
//     rollNumber:String,
//     project:String


// })

// module.exports = mongoose.model('Student', StudentSchema)

module.exports = mongoose.model('Professor', ProfSchema)