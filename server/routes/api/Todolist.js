const { Router } = require('express');
const Todo = require('../../models/Todo');

const router = Router()

router.get('/', (req, res) => {
    Todo.find()
        .then(todos => {
            res.json(todos);
        })
        .catch(err => {
            return res.status(404).json({ message: 'No todo List found.' });
        });
});

router.post('/', (req, res) => {
    const todoList = new Todo({
        title: req.body.title,
        description: req.body.description
    });
    todoList.save()
        .then(todo => {
            res.json(todo);
        })
        .catch(err => {
            console.log(err);
        });
});

router.delete('/:id', (req, res) => {
    Todo.findByIdAndDelete(req.params.id)
        .then(() => {
            res.json({ message: 'Succeed '}); 
        })
        .catch(err => {
            console.log(err);
        });
});

module.exports = router;