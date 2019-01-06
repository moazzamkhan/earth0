import React from "react"
import "./AboutMeComponent.less"
import { AboutMe } from "../personal-info/PersonalInfo"
import { Thing } from "../../../../../base"
import { ThingUtils } from "../../../utils/thing.utils"

interface Props {
  things: Thing[]
  onChange: any
}

const AboutMeComponent = ({ things, onChange }: Props) => {
  const aboutMe = things.reduce((m: any, thing: Thing) => {
    const tokens = thing.id.split(".")
    const id = tokens[tokens.length - 1]
    m[id] = thing.value
    return m
  }, {}) as AboutMe

  console.log(aboutMe)

  const items = [
    { label: "Full Name", property: "fullName", placeholder: "Your full name" },
    { label: "Date of Birth", property: "dateOfBirth", placeholder: "DD/MM/YYYY" },
    { label: "Gender", property: "gender", placeholder: "Your gender" },
    { label: "Marital Status", property: "maritalStatus", placeholder: "Your Maritus Status" },
    { label: "Blood Group", property: "bloodGroup", placeholder: "Your Blood Group" }
  ]

  return (
    <div id="me-box">
      <form>
        {items.map((item: any) => (
          <div className="form-group" key={item.property}>
            <label className="form-text text-muted" htmlFor="name">
              {item.label}
            </label>

            <input
              type="text"
              className="form-control"
              id={item.property}
              placeholder={item.placeholder}
              defaultValue={(aboutMe as any)[item.property]}
              onChange={e =>
                onChange(
                  ThingUtils.updateThing(things.find((thing: Thing) => thing.id.indexOf(item.property) > -1), {
                    value: e.target.value
                  })
                )
              }
            />
          </div>
        ))}
      </form>
    </div>
  )
}

export default AboutMeComponent
