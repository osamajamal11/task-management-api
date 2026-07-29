let users = []
let nextId = 1
function GetUsers(){
    return users
}
function GetUserById(id){
    let user = users.find(user => {return Number(id) === user.id})
    return user
}
function CreateUser(data){
    let user = {nextId , ...data}
    users.push(user)
    return user
}
function UpdateUser(id , data){
    let user = users.find(user => {return Number(id) === user.id})
    if(user){
        if(data.name !== undefined) user.name = data.name
        if(data.email !== undefined) user.email = data.email
    }
    return user
}
function DeleteUser(id){
   
    const index = users.findIndex( user => { return  user.id === Number(id) } )
    if(index === -1) return undefined
    let user = users.splice(index , 1)[0]
    return user

}

export { GetUsers , GetUserById , CreateUser , UpdateUser , DeleteUser  }