import React from "react"
import "./AboutMeComponent.less"
import { AboutMe } from "../../personal-information/PersonalInfo"
import { Thing } from "../../../../../base"
import { ThingUtils } from "../../../utils/thing.utils"

interface Props {
  things: Thing[]
  onChange: any
}

const AboutMeComponent = ({ things, onChange }: Props) => {
  const aboutMe = things.reduce((m: any, thing: Thing) => {
    const property = thing.subtypes[1]
    m[property] = thing.value
    return m
  }, {}) as AboutMe

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
                  ThingUtils.updateThing(things.find((thing: Thing) => thing.subtypes[1] == item.property), {
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
