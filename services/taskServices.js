import { GetUserById } from "./userServices.js";
import AppError from "../utils/AppError.js"
let tasks = [];

let nextId = 1;
function GetTasks(){
    return tasks;
}

function GetTaskById(id){
    let task = tasks.find( task => {return task.id === Number(id)} );
    if(!task){
        throw new AppError("Task Doesn't Exist" , 404)
    }
    let userInfo = GetUserById(task.userId)
    let taskWithUserInfo = {...task , userInfo}
     return taskWithUserInfo
}

function GetTaskByUserId(id){
    let user = GetUserById(id)
    return  tasks.filter(task => task.userId === Number(id))
    
}

function CreateTask(data){
    let task = {id: nextId , ...data}
    GetUserById(task.userId)
    tasks.push(task)
    nextId++;
    return task;
}

function UpdateTaskPartially(id, data) {
    let task = tasks.find(task => task.id === Number(id));

    if (!task) {
        throw new AppError("Task doesn't exist", 404);
    }

    if (data.title !== undefined) task.title = data.title;
    if (data.description !== undefined) task.description = data.description;
    if (data.status !== undefined) task.status = data.status;
    if (data.priority !== undefined) task.priority = data.priority;
    if (data.userId !== undefined) {
        GetUserById(data.userId);
        task.userId = data.userId;
    }

    return task;
}

function UpdateTask(id , data ){
        let task = tasks.find( task => {return task.id === Number(id)} );
        GetTaskById(id)
        if(task){
                GetUserById(data.userId)
                task.title = data.title;
                task.description = data.description;
                task.status = data.status;
                task.priority = data.priority;
                task.userId = data.userId
        }
        return task
}

function DeleteTask(id){
    const index = tasks.findIndex( task => {return Number(id) === task.id})
    if(index === -1){
        throw new AppError("Task doesnt exist" , 404);
    }
    let task = tasks.splice(index , 1)[0];
    return task;
}



export {
    GetTasks ,
    GetTaskById ,
    GetTaskByUserId ,
    CreateTask , 
    UpdateTask,
    UpdateTaskPartially , 
    DeleteTask
}