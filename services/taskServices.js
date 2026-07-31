import { GetUserById } from "./userServices.js";
let tasks = [];

let nextId = 1;
function GetTasks(){
    return tasks;
}

function GetTaskById(id){
    let task = tasks.find( task => {return task.id === Number(id)} );
     return task
}

function GetTaskByUserId(id){
    let user = GetUserById(id)
    if(!user){
        return undefined;
    }
    let userTasks = tasks.filter(task => task.userId === Number(id))
    return userTasks
}

function CreateTask(data){
    let task = {id: nextId , ...data}
    let user = GetUserById(task.userId)
    if(!user){
        return undefined;
    }
    tasks.push(task)
    nextId++;
    return task;
}

function UpdateTaskPartially(id , data){
        let task = tasks.find( task => {return task.id === Number(id)} );
        if(task){
            if(data.title !== undefined) task.title = data.title;
            if(data.description !== undefined) task.description = data.description;
            if(data.status !== undefined) task.status = data.status;
            if(data.priority !== undefined) task.priority = data.priority;
            if(data.userId !== undefined){
                if(!GetUserById(data.userId)){
                    return null;
                }
                task.userId = data.userId
            }
        }    

        return task;
}

function UpdateTask(id , data ){
        let task = tasks.find( task => {return task.id === Number(id)} );
        if(task){
                if(!GetUserById(data.userId)){
                     return null;
                }
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
        return undefined;
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