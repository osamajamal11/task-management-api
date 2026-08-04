import {GetUsers , GetUserById , CreateUser , UpdateUser , UpdateUserPartially , DeleteUser} from "../services/userServices.js"

const getUsers = async (req , res , next) => {
    try{
        let allUsers  = await GetUsers();
        res.json(allUsers )
    }
    catch(error){
        next(error)
    }

    
}

const getUserById = async (req , res , next) => {
    try{
        let user = await GetUserById(req.params.id)
        res.json(user)
    }
     catch(error){
        next(error)
    }
}

const createUser = async (req , res , next) => {
    try{
        let user = await CreateUser(req.body)
        res.status(201).json(user)
    }
     catch(error){
        next(error)
    }
}
const updateUser = async (req , res , next) => {
    try{
        let user = await UpdateUser(req.params.id , req.body)
        res.json(user)
    }
     catch(error){
        next(error)
    }
}
const updateUserPartially = async(req , res , next) => {
    try{
        let user = await UpdateUserPartially(req.params.id , req.body)
        res.json(user)
    }
     catch(error){
        next(error)
    }
}
const deleteUser = async (req , res , next) => {
    try{
        let user = await DeleteUser(req.params.id)
        res.status(204).send()
    }
    
     catch(error){
        next(error)
    }
}

export { getUsers , getUserById , createUser , updateUser , updateUserPartially , deleteUser}