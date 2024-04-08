import { Router, Request, Response } from "express";
import Todo from "../models/todo";

type RequestBody = { name: string }
type RequestParams = { todoId: string }

const router = Router();

let todosList: Todo[] = []

router.get('/', (req: Request, res: Response, next) => {
    return res.status(200).json({ todosList });
})

router.post('/create', (req, res, next) => {
    const body = req.body as RequestBody
    const newTodo: Todo = {
        name: body.name,
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
    const body = req.body as RequestBody
    const params = req.params as RequestParams
    const todoIndex = todosList.findIndex(todoItem => todoItem.id === params.todoId)
    if (todoIndex >= 0) {
        todosList[todoIndex] = {
            id: todosList[todoIndex].id,
            name: body.name,
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
    const params = req.params as RequestParams
    todosList = todosList.filter(todoItem => todoItem.id !== params.todoId)
    return res
        .status(200)
        .json({
            msg: 'Todo deleted',
            todosList,
        })
})

export default router;