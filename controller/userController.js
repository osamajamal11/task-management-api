import {GetUsers , GetUserById , CreateUser , UpdateUser , UpdateUserPartially , DeleteUser} from "../services/userServices.js"

const getUsers = (req , res) => {
    let users = GetUsers();
    res.json(users)
}

const getUserById = (req , res) => {
    let user = GetUserById(req.params.id)
     if(!user){
        return res.status(404).json("doesnt exist")
    }
    res.json(user)
}

const createUser = (req , res) => {
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
const updateUserPartially = (req , res) => {
    let user = UpdateUserPartially(req.params.id , req.body)
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

    res.status(204).send()
}

export { getUsers , getUserById , createUser , updateUser , updateUserPartially , deleteUser}