import React from "react";
import { Thing } from "../../../../base";
import PersonalInfoComponent from "./personal-info/PersonalInfoComponent";
import "./UserAccountComponent.less";


interface Props {
  thing: Thing
  things: Thing[]
  onChange: any
}

const personalProps = ["about-me", "addresses", "phones", "emails"]

const UserAccountComponent = ({ thing, things, onChange }: Props) => {  
  const personalThings: Thing[] = personalProps.map((id: any) => things.find((thing: Thing) => thing.id === id))
  return (
    <div id="user-account-box">
      {personalProps.some((id: string) => thing.id === id) && (
        <PersonalInfoComponent
          personalThings={personalThings}
          onChange={(thing: Thing) => {
            // expecting  a deep copied thing
            console.log(thing)
            onChange(thing)
          }}
        />
      )}
    </div>
  )
}

export default UserAccountComponent
