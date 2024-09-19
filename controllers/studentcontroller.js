const Student = require('../models/Student')
// const Student=require('../models/Student')

async function addStudent(req,res){
    try{
        console.log(req.body,'req.body')
        let student=new Student(req.body);
        await student.save();
        console.log("data saved succuss")
        res.end("data added..")
    }catch(err){
console.log(err)
    }

}
const getStudent=async function(req,res){
try{
let students=await Student.find({});
console.log(students)
res.send(students)
}catch(err){
    console.log(err)
}
}
module.exports={
    addStudent,
    getStudent
}