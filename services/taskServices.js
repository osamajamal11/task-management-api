import { GetUserById } from "./userServices.js";
import AppError from "../utils/AppError.js"
let tasks = [];

let nextId = 1;
function GetTasks(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(tasks);
        }, 1000);
    });
}

function GetTaskById(id){
    return new Promise((resolve,reject)=>{

        setTimeout(async()=>{

            try{

                let task = tasks.find(
                    task => task.id === Number(id)
                );

                if(!task){
                    return reject(
                        new AppError("Task Doesn't Exist",404)
                    );
                }

                let userInfo = await GetUserById(task.userId);

                resolve({
                    ...task,
                    userInfo
                });

            }
            catch(error){
                reject(error);
            }

        },1000);

    });
}

function GetTaskByUserId(id){
    return new Promise((resolve, reject) => {

        setTimeout(async () => {

            try {

                await GetUserById(id);

                resolve(
                    tasks.filter(task => task.userId === Number(id))
                );

            } catch(error) {
                reject(error);
            }

        }, 1000);

    });
}

function CreateTask(data){
    return new Promise(async (resolve,reject)=>{

        setTimeout(async()=>{

            try{
                let task = {id: nextId, ...data};

                await GetUserById(task.userId);

                tasks.push(task);
                nextId++;

                resolve(task);
            }
            catch(error){
                reject(error);
            }

        },1000);

    });
}

function UpdateTaskPartially(id,data){

    return new Promise((resolve,reject)=>{

        setTimeout(async()=>{

            try{

                let task = tasks.find(
                    task => task.id === Number(id)
                );

                if(!task){
                    return reject(
                        new AppError("Task doesn't exist",404)
                    );
                }

                if(data.title !== undefined)
                    task.title = data.title;

                if(data.description !== undefined)
                    task.description = data.description;

                if(data.status !== undefined)
                    task.status = data.status;

                if(data.priority !== undefined)
                    task.priority = data.priority;

                if(data.userId !== undefined){
                    await GetUserById(data.userId);
                    task.userId = data.userId;
                }

                resolve(task);

            }
            catch(error){
                reject(error);
            }

        },1000);

    });
}

function UpdateTask(id,data){

    return new Promise((resolve,reject)=>{

        setTimeout(async()=>{

            try{

                let task = tasks.find(
                    task => task.id === Number(id)
                );

                if(!task){
                    return reject(
                        new AppError("Task doesn't exist",404)
                    );
                }

                await GetUserById(data.userId);

                task.title = data.title;
                task.description = data.description;
                task.status = data.status;
                task.priority = data.priority;
                task.userId = data.userId;

                resolve(task);

            }
            catch(error){
                reject(error);
            }

        },1000);

    });
}

function DeleteTask(id){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            const index = tasks.findIndex( task => {return Number(id) === task.id})
            if(index === -1){
             return reject( new AppError("Task doesnt exist" , 404));
            }
             let task = tasks.splice(index , 1)[0];
            resolve(task)
        } , 1000)
    })
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