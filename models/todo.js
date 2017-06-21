//models/todo.js
//On fait appel à notre schema
const taskSchema = require('../schemas/task');
const Task = mongoose.model('Task', taskSchema.schema);

//On exporte les modèles
exports.modelAll = all;
exports.modelCreate = create;
exports.modelUpdate = update;
exports.modelRemove = remove;
exports.modelFind = find;
exports.modelFindStatus = findByStatus;

function all() {
    return Task.find({}, { "__v": 0 }).sort({ date: -1 }).exec();
    //exec() envoie une promesse
}

function find(id) {
    //return Task.findById(id);
    //return Task.find({},{"_v":0}).sort({ date: -1}).exec();
    return Task.findById(id, { "__v": 0 });
}

function findByStatus(status){
    return Task.find({ status: status } );
}

function create(data) {
    var task = new Task();
    task.title = data.title;
    task.description = data.description;
    task.status = data.status || 'pending';
    task.created = new Date();

    return task.save();
}

function update(id, data) {
    var promise = find(id);
    //on dit que si t'a récupéré des choses en Bdd, alors!
    promise.then(
        function (task) {
            //succes
            if (task === null) return null;
            task.title = data.title;
            task.description = data.description;
            task.status = data.status;
            return task.save();
        },

        function () {
            //error
        }
    );
    return promise;
}

function remove(id) {
    return Task.findByIdAndRemove(id);
}
