import {  GetTasks , GetTaskById , CreateTask , UpdateTask , DeleteTask} from "../services/taskServices.js"


const getTask = (req , res) => {
    let tasks = GetTasks();
    res.json(tasks)
}

const getTaskById = (req , res) => {
    let task = GetTaskById(req.params.id);
    if(!task){
        return  res.status(404).json("doesnt exist")
    }

    res.json(task)
} 

const createTask = (req , res) => {
    let task = CreateTask(req.body);
    res.status(201).json(task)
}

const updateTask = (req , res) => {
    let task = UpdateTask(req.params.id , req.body)
    if(!task){
        return res.status(404).json("doesnt exist")
    }
    res.json(task)
}

const deleteTask = (req , res) => {
    let task = DeleteTask(req.params.id)
    if(!task){
        return res.status(404).json("doesnt exist")
    }
    res.json(task)
}

export { createTask , getTask , getTaskById , updateTask , deleteTask}