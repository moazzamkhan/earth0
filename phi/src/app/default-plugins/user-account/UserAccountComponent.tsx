import React from "react"
import { Thing } from "../../../../base"
import PersonalInfoComponent from "./personal-info/PersonalInfoComponent"
import "./UserAccountComponent.less"

interface Props {
  thing: Thing
  things: Thing[]
  onCreate: any
  onChange: any
  onDelete: any
}

const UserAccountComponent = ({ thing, things, onChange, onDelete, onCreate }: Props) => {
  const personalThings: Thing[] = things.filter((t: Thing) => t.id.indexOf("personal-info") > -1)
  return (
    <div id="user-account-box">
      {thing.id.indexOf("personal-info") > -1 && (
        <PersonalInfoComponent
          personalThings={personalThings}
          onChange={(thing: Thing) => {
            // expecting  a deep copied thing
            console.log(thing)
            onChange(thing)
          }}
          onDelete= {onDelete}
          onCreate= {onCreate}
        />
      )}
    </div>
  )
}

export default UserAccountComponent
