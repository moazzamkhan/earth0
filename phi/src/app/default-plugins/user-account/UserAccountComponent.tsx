import React from "react"
import { Thing } from "../../../../base"
import PersonalInfoComponent from "../personal-information/PersonalInfoComponent"
import "./UserAccountComponent.less"
import _ from "lodash"
interface Props {
  thing: Thing
  things: Thing[]
  onCreate: any
  onChange: any
  onDelete: any
}

const UserAccountComponent = ({ thing, things, onChange, onDelete, onCreate }: Props) => {
  return <div id="user-account-box">This is User Account Component </div>
}

export default UserAccountComponent
