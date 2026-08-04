import {  GetTasks , GetTaskById , GetTaskByUserId , CreateTask , UpdateTask , UpdateTaskPartially , DeleteTask} from "../services/taskServices.js"


const getTasks = async (req , res) => {
    let tasks = await GetTasks();
    res.json(tasks)
}

const getTaskById = async (req , res) => {
    let task = await GetTaskById(req.params.id);
    res.json(task)
} 

const getTaskByUserId = async (req , res) =>{
    let userTasks = await GetTaskByUserId(req.params.id)
    res.json(userTasks)
}

const createTask = async (req , res) => {
    let task = await CreateTask(req.body);
    res.status(201).json(task)
}

const updateTaskPartially = async (req , res) => {
    let task = await UpdateTaskPartially(req.params.id , req.body)
    res.json(task)
}
const updateTask = async (req , res) => {
    let task = await UpdateTask(req.params.id , req.body)
    res.json(task)
}


const deleteTask = async (req , res) => {
    let task = await DeleteTask(req.params.id)
    res.json(task)
}

export { getTasks , getTaskById , getTaskByUserId , createTask ,  updateTask , updateTaskPartially , deleteTask}