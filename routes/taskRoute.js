import express from "express"
import {createTask , getTasks , getTaskById , updateTask  , updateTaskPartially , deleteTask} from "../controller/taskController.js"
import taskValidate from "../middleware/taskValidator.js";

const router = express.Router();

router.get("/" , getTasks)
router.get("/:id" , getTaskById)
router.post ("/" , taskValidate , createTask)
router.put("/:id" , taskValidate , updateTask)
router.patch("/:id" , updateTaskPartially)
router.delete("/:id" , deleteTask)

export default router;
