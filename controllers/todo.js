// controllers/todo.js

//on récupère notre couche model
const models = require('../models/todo');

exports.all = all;
exports.find = find;
exports.create = create;
exports.update = update;
exports.remove = remove;
exports.findByStatus = findByStatus;

function create(req, res) {
   /* //jsonObject = models.modelCreate({title: "Titre de test", description: "Description de test !!"});
  console.log('Je passe dans la création !! ');
  jsonObject = models.modelCreate();*/
  models.modelCreate(req.body)
.then(   
    function (){
        res.status(201);
        res.json({message: 'Task created'});
    },
    function (err) {
        res.status(500);
        res.json(err);
        //res.json({message: 'Task not created'});
    }
);
}
function all(req, res) {
    /* jsonObject = models.modelAll();//console.log('Mes controlleurs'+controllers);
    console.log('Mes models'+jsonObject);
    return res.json({ task: jsonObject });
    //res.json({ message: 'Hello controller All !!' }); */
    models.modelAll().then(
        function (tasks){
            res.json(tasks);
        },
        function (err){
            res.json(err);
        }
    );
}

function findByStatus(req, res){
    models.modelFindStatus(req.params.status).then(
        function (task){
            if( null === task){
                res.json({ message: "Task not find !!" });
            }
            res.json(task);
        },
        function (err){
            res.status(500);
            res.json(err);
        }
    );
}

function find(req, res) {
    models.modelFind(req.params.id).then(
        function (task){
            if( null === task){
                res.json({ message: "Task not find !!" });
            }
            res.json(task);
        },
        function (err){
            res.status(500);
            res.json(err);
        }
    );
}

function update(req, res) {
  models.modelUpdate(req.params.id,req.body).then(
    function (){
        //red.status(304);
        res.json({ message: "Task modified" });
    },
    function (err){
            res.status(500);
            res.json(err);
        }
  );
}

function remove(req, res) {
    models.modelRemove(req.params.id).then(
    function (){
        res.status(200);
        res.json({message: "Task deleted"});
    },
    function (err){
            res.status(500);
            res.json(err);
        }
  );
}