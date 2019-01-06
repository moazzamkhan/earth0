import { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken"

export class AuthUtils {
  public static verifyJwtToken(req: Request, res: Response, next: NextFunction) {
    const bearerHeader = req.headers["authorization"]

    // if bearer is undefined
    if (typeof bearerHeader !== "undefined") {
      const bearer = bearerHeader.split(" ")
      const token = bearer[1]

      // verify a token symmetric
      jwt.verify(token, process.env.JWT_SECRET_KEY, function(err: any, u: any) {
        if (err) next({ statusCode: 403, message: err.message })
        ;(req as any).username = u.username
        next()
      })
    } else {
      // forbidden
      next({ statusCode: 403 })
    }
  }
}
