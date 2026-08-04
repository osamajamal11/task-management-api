import express from "express"
import {createTask , getTasks , getTaskById , updateTask  , updateTaskPartially , deleteTask} from "../controller/taskController.js"
import taskValidate from "../middleware/taskValidator.js";
import asyncHandler from "../middleware/asyncHandler.js";

const router = express.Router();

router.get("/" , asyncHandler(getTasks))
router.get("/:id" , asyncHandler(getTaskById))
router.post ("/" , taskValidate ,asyncHandler(createTask))
router.put("/:id" , taskValidate , asyncHandler(updateTask))
router.patch("/:id" , asyncHandler(updateTaskPartially))
router.delete("/:id" , asyncHandler(deleteTask))

export default router;
