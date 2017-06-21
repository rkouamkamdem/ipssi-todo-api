// routes/index.js
//C'est dans ce fichier que je charge toutes mes routes
const controllers = require('../controllers');

router.get('/hello', controllers.hello);
//Ici je charge les routes qui sont dans le fichier todo.js
require('./todo');
