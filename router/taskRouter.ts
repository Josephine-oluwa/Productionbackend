import express, {Router} from "express";

import {
    deleteTask,
    createTask,
    getTask,
    updateTask,
} from "../controller/taskController";

const router = Router();

router.route("/").get(getTask).post(createTask);

router.route("/id").get(getTask).patch(updateTask).delete(deleteTask)

export default router;