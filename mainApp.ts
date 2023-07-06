import express, { Application } from "express"
import cors from "cors"

export const mainApp = (app: Application)=> {
    app.use(express.json())
    app.use(cors())
}