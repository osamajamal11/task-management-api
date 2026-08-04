import AppError from "../utils/AppError.js"

let users = []
let nextId = 1
function GetUsers(){
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            resolve(users)
        } , 1000)
    })
    
}
function GetUserById(id){
    return new Promise((resolve , reject ) =>{
        setTimeout(() => {
        let user = users.find(user => {return Number(id) === user.id})
        if(!user){
            return reject( new AppError("user doesnt exist" , 404))
        }
         resolve(user)} , 1000)
    })
}
function CreateUser(data){
    return new Promise((resolve , reject) =>{
        setTimeout(() => {
            let user = {id: nextId , ...data}
            users.push(user)
            nextId++;
            resolve(user)
        } , 1000)
    })
    
}
function UpdateUser(id , data){
    return new Promise((resolve , reject) =>{
        setTimeout(() => {
            let user = users.find(user => {return Number(id) === user.id})
            if(!user){
               return reject (new AppError("User doesnt Exist" , 404))
            }
             user.email = data.email
             user.name = data.name
            resolve(user)
        } , 1000)
    })
    
}
function UpdateUserPartially(id , data){
    return new Promise((resolve , reject) =>{
        setTimeout(() => {
            let user = users.find(user => {return Number(id) === user.id})
            if(!user){
                return reject( new AppError("User doesnt Exist" , 404))
            }
            if(data.name !== undefined) user.name = data.name
            if(data.email !== undefined) user.email = data.email
            resolve(user)
        } , 1000)
    })
}
function DeleteUser(id){
    return new Promise((resolve , reject ) => {
        setTimeout(() => {
            const index = users.findIndex( user => { return  user.id === Number(id) } )
            if(index === -1) return reject (new AppError("User doesnt Exist" , 404))
            let user = users.splice(index , 1)[0]
            resolve(user)
        } , 1000)
    })
}

export { GetUsers , GetUserById , CreateUser , UpdateUser , UpdateUserPartially , DeleteUser  }