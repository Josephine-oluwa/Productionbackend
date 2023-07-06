import express, {Request, Response} from "express"
import taskModel from "../model/taskModel"

export const createTask = async (req: Request, res: Response)=> {
    try{
        const {task, priority} = req.body

        const tasked = await taskModel.create({
            task, priority
        });

        return res.status(201).json({
            message: "task has been created",
            data: tasked
        })
    } catch (error){
        res.status(404).json({
            message: "task cannot be created "
        })
    }
}

export const getTask = async (req: Request, res: Response )=> {
    try{
        const tasked = await taskModel.find();

        return res.status(200).json({
            message: "Task has been created",
            data: tasked
        })
    } catch (error){
        res.status(404).json({
            message: "Task cannot be created"
        })
    }
}

export const updateTask = async(req: Request, res: Response) => {
    try {
        const {id} = req.params
        const tasked = await taskModel.findByIdAndUpdate(id, {
            isComplete: true
        }, {new: true});

        return res.status(210).json({
            message: "Task has been updated",
            data: tasked 
        })
    } catch (error) {
        return res.status(404).json({
            message: "Task cannot be updated"
        })
    }
}

export const deleteTask = async (req: Request, res: Response
) => {
    try {
        const {id} = req.params;

        const tasked = await taskModel.findByIdAndDelete(id);

        return res.status(201).json({
            message: "Task",
            data: tasked
        })
    } catch (error) {
        return res.status(404).json({
            message: "Task cannopt be deleted"
        })
    }
}