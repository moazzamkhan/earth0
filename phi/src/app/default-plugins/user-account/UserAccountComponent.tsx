import { Thing } from "epsilon-base";
import React from "react";
import UserAccount from "./UserAccount";

const UserAccountComponent = ({ thing }: { thing: Thing }) => {
  const userAccount = thing.value as UserAccount
  return (
    <div id="personInfo">
      <form>
        <div className="form-group row">
          <label
            htmlFor="name"
            className="col-sm-2 col-form-label col-form-label-lg"
          >
            Name {userAccount.personalInfo.name}
          </label>
          <div className="col-sm-10">
            <input
              type="file"
              className="form-control form-control-lg"
              id="saved-at"
            />
          </div>
        </div>
      </form>
    </div>
  )
}

export default UserAccountComponent
