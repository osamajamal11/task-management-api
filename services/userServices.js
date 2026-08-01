import AppError from "../utils/AppError.js"

let users = []
let nextId = 1
function GetUsers(){
    return users
}
function GetUserById(id){
    let user = users.find(user => {return Number(id) === user.id})
    if(!user){
        throw new AppError("user doesnt exist" , 404)
    }
    return user
}
function CreateUser(data){
    let user = {id: nextId , ...data}
    users.push(user)
    nextId++;
    return user
}
function UpdateUser(id , data){
    let user = users.find(user => {return Number(id) === user.id})

    if(!user){
       throw new AppError("User doesnt Exist" , 404)
    }
     user.email = data.email
     user.name = data.name
    return user
}
function UpdateUserPartially(id , data){
    let user = users.find(user => {return Number(id) === user.id})
    if(!user){
         throw new AppError("User doesnt Exist" , 404)
    }
    if(data.name !== undefined) user.name = data.name
    if(data.email !== undefined) user.email = data.email
    return user
}
function DeleteUser(id){
   
    const index = users.findIndex( user => { return  user.id === Number(id) } )
    if(index === -1) throw new AppError("User doesnt Exist" , 404)
    let user = users.splice(index , 1)[0]
    return user

}

export { GetUsers , GetUserById , CreateUser , UpdateUser , UpdateUserPartially , DeleteUser  }