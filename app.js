import express from "express"
import taskRoute from "./routes/taskRoute.js"
import userRoute from "./routes/userRoute.js"

const app = express();

app.use(express.json());

app.use("/tasks" , taskRoute)
app.use("/users" , userRoute)


let port = 5000
app.listen(port , () => {console.log(`stared server on port ${port}`)})

