let userValidator = (req , res , next) =>{

    let data = req.body

    if(data.name === undefined || typeof data.name !== "string") {
        return res.status(400).json("invalid input")
    }

    if(data.email === undefined || typeof data.email !== "string") {
        return res.status(400).json("invalid input")
    }
    next();
}

export default userValidator;