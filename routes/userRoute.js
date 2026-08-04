import express from "express"
import userValidator  from "../middleware/userValidator.js"
import { getUsers , getUserById , createUser , updateUser , updateUserPartially , deleteUser} from "../controller/userController.js"
import {getTaskByUserId} from "../controller/taskController.js"
import asyncHandler from "../middleware/asyncHandler.js"
const router = express.Router()

router.get("/" , asyncHandler(getUsers))
router.get("/:id/tasks" , asyncHandler(getTaskByUserId) )
router.get("/:id" , asyncHandler(getUserById))

router.post("/" , userValidator , asyncHandler(createUser))

router.put("/:id" , userValidator , asyncHandler(updateUser))
router.patch("/:id" , asyncHandler(updateUserPartially))

router.delete("/:id" , asyncHandler(deleteUser))

export default router