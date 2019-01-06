import { ShareRequest, ShareRequestModel } from "../../models/ShareRequest"
import AccountDao from "./AccountDao"

class LocalShareRequestDao {
  createRequest(from: string, to: string, payload: any) {
    return new Promise((resolve: any, reject: any) => {
      // check if from and to exist and valid

      AccountDao.checkIfUsernameExists(to).then((exists: boolean) => {
        if (!exists) {
          reject("Receiver does not exist")
        } else {
          const shareRequestModel = new ShareRequestModel({ from, to, payload })
          shareRequestModel.save().then((shareRequest: ShareRequest) => {
            resolve(shareRequest)
          })
        }
      })
    })
  }
}

// share request is saved to database
// also pushed to messaging queue

// message queue will use websocket to broadcast to the list of users, users will know there is something to download and they will download or reject or block
// for those users who are not connected can download the data from table later
// user will poll

const ShareRequestDao = new LocalShareRequestDao()
export default ShareRequestDao
