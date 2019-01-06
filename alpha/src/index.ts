require("dotenv").config()

import bodyParser from "body-parser"
import express, { Request, Response } from "express"
import mongoose from "mongoose"
import { accountRouter } from "./routes/account.route"
import { shareRouter } from "./routes/share.route"
import { NextFunction } from "connect"
import cors from "cors"

const app = express()
const port = process.env.APP_PORT

app.use(cors())
app.use(bodyParser.json({ limit: "50mb" }))

app.use(
  bodyParser.urlencoded({
    extended: true
  })
)

app.use((req, res, next) => {
  next()
})

mongoose.Promise = global.Promise
mongoose.connect(
  process.env.DB_URL_LOCAL,
  { useNewUrlParser: true, dbName: process.env.DB_NAME }
)

// Connected handler
mongoose.connection.on("connected", function(err) {
  console.log("Connected to DB...")
})

app.get("/", (req, res) => res.send("Hello World!"))

app.use("/account", accountRouter)
app.use("/share", shareRouter)

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  if (err.statusCode) {
    res.status(err.statusCode).send(err)
  } else {
    next(err)
  }
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
