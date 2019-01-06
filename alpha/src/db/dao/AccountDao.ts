import jwt from "jsonwebtoken";
import { User, UserModel } from "../../models/User";

// create user, also add username to redis list

// check username just check in redis client

// check if username password combination is correct

// username cannot be updated
// update user credential - 1. check if user exists by id,

class LocalAccountDao {
  checkIfUsernameExists(username: string) {
    return new Promise((resolve: any, reject: any) => {
      UserModel.findOne({ username }, (err: any, user: User) => {
        if (err) {
          reject(err)
        }
        if (user) {
          resolve(true)
        } else {
          resolve(false)
        }
      })
    })
  }

  createAccount(username: string, password: string) {
    return new Promise((resolve: any, reject: any) => {
      this.checkIfUsernameExists(username).then((exists: boolean) => {
        if (exists) {
          reject("Username already exists")
        } else {
          const userModel = new UserModel({ username, password })
          userModel.save().then((user: User) => {
            jwt.sign(
              { username: user.username, password: user.password, id: user._id },
              process.env.JWT_SECRET_KEY,
              { expiresIn: "1h" },
              (err: any, token: string) => {
                if (err) reject(err.message)
                resolve(Object.assign({}, user.toJSON(), { jwtToken: token }))
              }
            )
          })
        }
      })
    })
  }

  updateAccount(username: string, password: string, newPassword: string) {
    return new Promise((resolve: any, reject: any) => {
      UserModel.findOne({ username }, (err: any, user: User) => {
        if (err) {
          reject(err.message)
        }

        if (user.password === password) {
          user.password = newPassword
          user.save().then((u: User) => {
            jwt.sign(
              { username: u.username, password: u.password, id: u._id },
              process.env.JWT_SECRET_KEY,
              { expiresIn: "1h" },
              (err: any, token: string) => {
                resolve(Object.assign({}, user.toJSON(), { jwtToken: token }))
              }
            )
          })
        } else {
          reject("Incorrect Password")
        }
      })
    })
  }

  getAccountDetails(username: string) {
    return new Promise((resolve: any, reject: any) => {
      UserModel.findOne({ username }, (err: any, user: User) => {
        if (err) {
          reject(err.message)
        }
        resolve(user.toJSON())
      })
    })
  }
}

const AccountDao = new LocalAccountDao()
export default AccountDao

// REDIS
// redisClient.smembers("usernames", (err, reply) => {
//     console.log(reply)
//   })
//   redisClient.sismember("usernames", username, (err, alreadyExists) => {
//     res.json({ username: { available: !alreadyExists } })
//   })

// redisClient.sismember("usernames", username, (err, alreadyExists) => {
//     if (alreadyExists) {
//       redisClient.smembers("usernames", (err, reply) => {
//         res.json({ username: { available: !alreadyExists }, takenNames: reply })
//       })
//     } else {
//       const userModel = new UserModel({ username, password })
//       userModel.save().then((user: User) => {
//         redisClient.sadd("usernames", user.username, (err, reply) => {
//           jwt.sign(
//             { username: user.username, password: user.password, id: user._id },
//             process.env.JWT_SECRET_KEY,
//             { expiresIn: "1h" },
//             (err: any, token: string) => {
//               res.json(Object.assign({}, user.toJSON(), { jwtToken: token }))
//             }
//           )
//         })
//       })
//     }
//   })
