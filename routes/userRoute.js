import express from "express"
import userValidator  from "../middleware/userValidator.js"
import { getUsers , getUserById , createUser , updateUser , updateUserPartially , deleteUser} from "../controller/userController.js"
import {getTaskByUserId} from "../controller/taskController.js"
const router = express.Router()

router.get("/" , getUsers)
router.get("/:id/tasks" , getTaskByUserId )
router.get("/:id" , getUserById)

router.post("/" , userValidator , createUser)

router.put("/:id" , userValidator , updateUser)
router.patch("/:id" , updateUserPartially)

router.delete("/:id" , deleteUser)

export default router