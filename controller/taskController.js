import {  GetTasks , GetTaskById , GetTaskByUserId , CreateTask , UpdateTask , UpdateTaskPartially , DeleteTask} from "../services/taskServices.js"


const getTasks = (req , res) => {
    let tasks = GetTasks();
    res.json(tasks)
}

const getTaskById = (req , res) => {
    let task = GetTaskById(req.params.id);
    res.json(task)
} 

const getTaskByUserId = (req , res) =>{
    let userTasks = GetTaskByUserId(req.params.id)
    res.json(userTasks)
}

const createTask = (req , res) => {
    let task = CreateTask(req.body);
    res.status(201).json(task)
}

const updateTaskPartially = (req , res) => {
    let task = UpdateTaskPartially(req.params.id , req.body)
    res.json(task)
}
const updateTask = (req , res) => {
    let task = UpdateTask(req.params.id , req.body)
    res.json(task)
}


const deleteTask = (req , res) => {
    let task = DeleteTask(req.params.id)
    res.json(task)
}

export { getTasks , getTaskById , getTaskByUserId , createTask ,  updateTask , updateTaskPartially , deleteTask}