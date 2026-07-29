import {GetUsers , GetUserById , CreateUser , UpdateUser , DeleteUser} from "../services/userServices.js"

const getUsers = (req , res) => {
    let users = GetUsers();
    res.json(users)
}

const getUserById = (req , res) => {
    let user = getUserById(req.params.id)
     if(!user){
        return res.status(404).json("doesnt exist")
    }
    res.json(user)
}

const createUser = (req , req) => {
    let user = CreateUser(req.body)
    res.status(201).json(user)
}
const updateUser = (req , res) => {
    let user = UpdateUser(req.params.id , req.body)
    if(!user){
        return res.status(404).json("doesnt exist")
    }
    res.json(user)
}
const deleteUser = (req , res) => {
    let user = DeleteUser(req.params.id)
     if(!user){
        return res.status(404).json("doesnt exist")
    }

    res.status(204).json()
}

export { getUsers , getUserById , createUser , updateUser , deleteUser}