let taskValidate = (req , res , next) => {

    let task = req.body

    if(task.title === undefined || typeof task.title !== "string"){
        return res.status(400).json("invalid tite")
    }

    if(task.description === undefined || typeof task.description !== "string"){
        return res.status(400).json("invalid description")
    }

    if(task.status !== "pending" && task.status !== "in-progress" && task.status !== "completed"){
        return res.status(400).json("invalid status")
    }

    if(task.priority !== "low" && task.priority !== "medium" && task.priority !== "high"){
        return res.status(400).json("invalid priority")
    }
    next()
}

export default taskValidate;