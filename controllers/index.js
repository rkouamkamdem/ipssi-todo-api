// controllers/index.js

exports.hello = hello;

function hello(req, res) {
    res.json({ message: 'Hello' });
}
