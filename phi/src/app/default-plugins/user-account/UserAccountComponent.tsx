import { Thing } from "epsilon-base"
import React from "react"
import UserAccount from "./UserAccount"
import "./UserAccountComponent.less"
import PersonalInfoComponent from "./personal-info/PersonalInfoComponent"
import PersonalInfo from "./personal-info/PersonalInfo"
import clone from "clone"

interface Props {
  thing: Thing
  onChange: any
}

const UserAccountComponent = ({ thing, onChange }: Props) => {
  return (
    <div id="user-account-box">
      {thing.id === "personal-info" && (
        <PersonalInfoComponent
          personalInfo={thing.value as PersonalInfo}
          onChange={(personalInfo: PersonalInfo) => {
            const newThing = clone(thing)
            newThing.value = Object.assign({}, newThing.value, personalInfo)
            onChange(newThing)
          }}
        />
      )}
    </div>
  )
}

export default UserAccountComponent
