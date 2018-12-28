import { Thing } from "epsilon-base"
import React from "react"
import UserAccount from "./UserAccount"
import "./UserAccountComponent.less"
import PersonalInfoComponent from "./personal-info/PersonalInfoComponent"
import PersonalInfo from "./personal-info/PersonalInfo";

const UserAccountComponent = ({ thing }: { thing: Thing }) => {
  console.log(thing)
  return <div id="user-account-box">{thing.id === "personal-info" && <PersonalInfoComponent personalInfo={thing.value as PersonalInfo}/>}</div>
}

/* <form>
<div className="form-group">
  <input
    type="email"
    className="form-control border-warning"
    id="exampleInputEmail1"
    aria-describedby="emailHelp"
    placeholder="Enter email"
  />
  <small className="form-text text-muted">Email address</small>
</div>
<div className="form-group">
  <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
  <small className="form-text text-muted">Password</small>
</div>
</form> */

export default UserAccountComponent
