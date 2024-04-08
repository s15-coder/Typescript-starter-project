import { Router, Request, Response } from "express";
import Todo from "../models/todo";
const router = Router();
let todosList: Todo[] = []

router.get('/', (req: Request, res: Response, next) => {
    return res.status(200).json({ todosList });
})

router.post('/create', (req, res, next) => {
    const newTodo: Todo = {
        name: req.body.name,
        id: new Date().toISOString()
    }
    todosList.push(newTodo)
    return res
        .json({
            todosList,
            msg: 'Todo created',
        })
        .status(201)
})

router.put('/update/:todoId', (req, res) => {
    const todoId = req.params.todoId
    const todoIndex = todosList.findIndex(todoItem => todoItem.id === todoId)
    if (todoIndex >= 0) {
        todosList[todoIndex] = {
            id: todosList[todoIndex].id,
            name: req.body.name,
        }
        return res
            .status(200)
            .json({
                msg: 'Todo updated',
                todosList,
            })
    }
    return res
        .status(200)
        .json({
            msg: 'Todo has not been found'
        })
})

router.delete('/delete/:todoId', (req, res) => {
    const todoId = req.params.todoId
    todosList = todosList.filter(todoItem => todoItem.id !== todoId)
    return res
        .status(200)
        .json({
            msg: 'Todo deleted',
            todosList,
        })
})

export default router;