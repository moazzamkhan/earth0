import express, { NextFunction, Request, Response } from "express"
import { AuthUtils } from "../auth/utils"
import AccountDao from "../db/dao/AccountDao"

const router = express.Router()

// middleware that is specific to this router
router.use((req: Request, res: Response, next: NextFunction) => {
  console.log("Time: ", Date.now())
  next()
})

router.get("/username/check", (req: Request, res: Response, next: NextFunction) => {
  AccountDao.checkIfUsernameExists(req.query.username)
    .then((exists: boolean) => {
      res.send({
        username: req.query.username,
        available: !exists
      })
    })
    .catch(next)
})

router.post("/", (req: Request, res: Response, next: NextFunction) => {
  const username = req.body.username
  const password = req.body.password

  AccountDao.createAccount(username, password)
    .then((user: any) => {
      res.json(user)
    })
    .catch(next)
})

router.get("/", AuthUtils.verifyJwtToken, (req: Request, res: Response, next: NextFunction) => {
  const username = (req as any).username
  AccountDao.getAccountDetails(username)
    .then(res.json)
    .catch(next)
})

router.patch("/", (req: Request, res: Response, next: NextFunction) => {
  const username = req.body.username
  const newPassword = req.body.newPassword
  const password = req.body.password

  AccountDao.updateAccount(username, password, newPassword)
    .then(res.json)
    .catch(next)
})
export const accountRouter = router
