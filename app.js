import express from "express"
import taskRoute from "./routes/taskRoute.js"
import userRoute from "./routes/userRoute.js"
import errorHandler from "./middleware/errorHandler.js";

const app = express();

app.use(express.json());

app.use("/tasks" , taskRoute)
app.use("/users" , userRoute)

app.get("/error" , (req , res , next) =>{
    const error = new Error("Something went wrong");
    next()
})

app.use(errorHandler)


let port = 3000
app.listen(port , () => {console.log(`stared server on port ${port}`)})

