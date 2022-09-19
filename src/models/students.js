const mongoose = require("mongoose");
const validator = require("validator");

const studentSchema = new mongoose.Schema({
    firstname : {
        type : String,
       
    } ,
    lastname : {
        type : String,
       
    } ,
    
    
    email:{
            type:String,
        },
    password:{
            type:String
        }
   
})
const Student = new mongoose.model('Student',studentSchema);
module.exports = Student;