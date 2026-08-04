import {GetUsers , GetUserById , CreateUser , UpdateUser , UpdateUserPartially , DeleteUser} from "../services/userServices.js"

const getUsers = async (req , res , next) => {
    
        let allUsers  = await GetUsers();
        res.json(allUsers )
    

    
}

const getUserById = async (req , res , next) => {
   
        let user = await GetUserById(req.params.id)
        res.json(user)
    
}

const createUser = async (req , res , next) => {
    
        let user = await CreateUser(req.body)
        res.status(201).json(user)
    
}
const updateUser = async (req , res , next) => {
  
        let user = await UpdateUser(req.params.id , req.body)
        res.json(user)
    
}
const updateUserPartially = async(req , res , next) => {
    
        let user = await UpdateUserPartially(req.params.id , req.body)
        res.json(user)
    
}
const deleteUser = async (req , res , next) => {
    
        let user = await DeleteUser(req.params.id)
        res.status(204).send()
    
}

export { getUsers , getUserById , createUser , updateUser , updateUserPartially , deleteUser}