import {  GetTasks , GetTaskById , GetTaskByUserId , CreateTask , UpdateTask , UpdateTaskPartially , DeleteTask} from "../services/taskServices.js"


const getTasks = (req , res) => {
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
const getTaskByUserId = (req , res) =>{
    let userTasks = GetTaskByUserId(req.params.id)
    if(!userTasks){
        return res.status(404).json("User doesn't exist")
    }
    res.json(userTasks)
}
const createTask = (req , res) => {
    let task = CreateTask(req.body);
    if(!task){
        return res.status(404).json("User doesn't exist")
    }
    res.status(201).json(task)
}

const updateTaskPartially = (req , res) => {
    let task = UpdateTaskPartially(req.params.id , req.body)
    if (task === undefined) {
        return res.status(404).json("Task doesn't exist");
    }

    if (task === null) {
        return res.status(400).json("User doesn't exist");
    }
    res.json(task)
}
const updateTask = (req , res) => {
    let task = UpdateTask(req.params.id , req.body)
    if (task === undefined) {
         return res.status(404).json("Task doesn't exist");
     }

     if (task === null) {
        return res.status(400).json("User doesn't exist");
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

export { getTasks , getTaskById , getTaskByUserId , createTask ,  updateTask , updateTaskPartially , deleteTask}