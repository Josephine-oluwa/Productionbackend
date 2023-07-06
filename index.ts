import express, {Application} from "express"

const port: number = 2233;

const app: Application = express()

app.use(express.json())

const server = app.listen(port, ()=> {

    console.log("server is live now!")
})

process.on("uncaughtExpression", (error: any) => {
    console.log("server is shutting doen to uncaughtExcpression")
    console.log(error.message)

    process.exit(1)
})

process.on("unhandledRejection", (reason: any) => {
    console.log("server is shutting down to unhandledRejection")

    server.close(() => {
        process.exit(1)
    })
})