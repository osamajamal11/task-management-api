let tasks = [];
let nextId = 1;
function GetTasks(){
    return tasks;
}

function GetTaskById(id){
    let task = tasks.find( task => {return task.id === Number(id)} );
     return task
}

function CreateTask(data){
    let task = {nextId , ...data}
    tasks.push(task)
    nextId++;
    return task;
}

function UpdateTask(id , data){
        let task = tasks.find( task => {return task.id === Number(id)} );
        if(task){
            if(data.title !== undefined) task.title = data.title;
            if(data.description !== undefined) task.description = data.description;
            if(data.status !== undefined) task.status = data.status;
            if(data.priority !== undefined) task.priority = data.priority;
        }    

        return task;
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
    CreateTask , 
    UpdateTask , 
    DeleteTask
}