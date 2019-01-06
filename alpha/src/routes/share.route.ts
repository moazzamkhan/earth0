import { User, UserModel } from "../models/User"
import express, { NextFunction, Request, Response } from "express"
import { AuthUtils } from "../auth/utils"
import ShareRequestDao from "../db/dao/ShareRequestDao"

const router = express.Router()

// middleware that is specific to this router
router.use((req: Request, res: Response, next: NextFunction) => {
  console.log("Time: ", Date.now())
  next()
})

router.post("/", AuthUtils.verifyJwtToken, (req: Request, res: Response, next: NextFunction) => {
  const username = (req as any).username
  const payload = {}
  const to = req.body.to
  ShareRequestDao.createRequest(username, to, payload).then(() => {
    // notify message queue, web sockets
    res.json({})
  })
})

// how to send to group?
// i think group is not supported?
export const shareRouter = router
