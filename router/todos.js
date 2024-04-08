"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
let todosList = [];
router.get('/', (req, res, next) => {
    return res.status(200).json({ todosList });
});
router.post('/create', (req, res, next) => {
    const newTodo = {
        name: req.body.name,
        id: new Date().toISOString()
    };
    todosList.push(newTodo);
    return res
        .json({
        todosList,
        msg: 'Todo created',
    })
        .status(201);
});
router.put('/update/:todoId', (req, res) => {
    const todoId = req.params.todoId;
    const todoIndex = todosList.findIndex(todoItem => todoItem.id === todoId);
    todosList[todoIndex] = {
        id: todosList[todoIndex].id,
        name: req.body.name,
    };
    return res
        .status(200)
        .json({
        msg: 'Todo updated',
        todosList,
    });
});
router.delete('/delete/:todoId', (req, res) => {
    const todoId = req.params.todoId;
    todosList = todosList.filter(todoItem => todoItem.id !== todoId);
    return res
        .status(200)
        .json({
        msg: 'Todo deleted',
        todosList,
    });
});
exports.default = router;
