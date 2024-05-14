const Student = require("../models/student");
const Course = require("../models/course");

const addCourse = (req, res) => {
    const course = new Course()
    course.name = req.name
    course.coursePhoto = req.coursePhoto
    course.teachPhoto = req.teachPhoto
    course.save(err => {
        if (err){
            res.json({err: err})
        }
        res.json({msg: `Le course ${course.name} a bien été bien ajouté`})
    })
}
const getCourses = (req, res) =>{
    Course.find((err, courses) => {
        if(err){
            res.json({err: "Attention ! il y a un problème avec les cours"})
        }
        res.json(courses)
    })
}

const addStudent = (req, res) => {
    const student = new Student()
    student.name = req.name
    student.level = req.level
    student.save(err => {
        if (err){
            res.json({err: err})
        }
        res.json({msg: `L'etudiant ${student.name} a bien été ajouté`})
    })
}
const getStudents = (req, res) =>{
    Student.find((err, students) => {
        if(err){
            res.json({err: "Attention ! il y a un problème avec les étudiants"})
        }
        res.json(students)
    })
}

module.exports = {
    addCourse,
    getCourses,
    addStudent,
    getStudents
}
