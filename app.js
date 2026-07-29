import express from "express"
import taskRoute from "./routes/taskRoute.js"

const app = express();

app.use(express.json());

app.use("/tasks" , taskRoute)


let port = 5000
app.listen(port , () => {console.log(`stared server on port ${port}`)})

