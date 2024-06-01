let Assignment = require('../models/assignment');

function getAssignments(req, res){
    Assignment.find((err, assignments) => {
        if(err){
            res.json({msg: "Aucun assignment trouvé"})
        }

        res.send(assignments);
    });
}
function getAssignment(req, res){
    let assignmentId = req.params.id;

    Assignment.findOne({id: assignmentId}, (err, assignment) =>{
        if(err){res.send(err)}
        res.json(assignment);
    })
}

function postAssignment(req, res){
    let assignment = new Assignment();
    assignment.id = req.body.id;
    assignment.name = req.body.name;
    assignment.deadLine = req.body.deadLine;
    assignment.rendered = req.body.rendered;
    assignment.author = req.body.author;
    assignment.course.name = req.body.course.name;
    assignment.course.coursePhoto = req.body.course.coursePhoto;
    assignment.course.teacherPhoto = req.body.course.teacherPhoto;
    assignment.mark = req.body.mark;
    assignment.comment = req.body.comment;
    assignment.save( (err) => {
        if(err){
            res.json({err: "Il y a eu une erreur lors de l'ajout de l'assignment"});
        }
        res.json({ msg: `Le devoir ${assignment.name} a été ajouté`})
    })
}

function updateAssignment(req, res) {
    console.log(req.body)
    Assignment.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, obj) => {
        if (err) {
            console.log(err);
         return  res.json({err: 'Impossible de mettre à jour ce devoir'})
        }
        res.json({msg: `Le devoir ${req.body.name} a bien été mis à jour`})
    });

}

function deleteAssignment(req, res) {

    Assignment.findByIdAndRemove(req.params.id, (err, assignment) => {
        if (err) {
            res.send(err);
        }
        res.json({msg: `Le devoir ${assignment.name} a bien été supprimé`});
    })
}

module.exports = { getAssignments, postAssignment, getAssignment, updateAssignment, deleteAssignment };