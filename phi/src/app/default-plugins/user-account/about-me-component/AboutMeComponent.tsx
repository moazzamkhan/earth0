import React from "react"
import "./AboutMeComponent.less"
import { AboutMe } from "../personal-info/PersonalInfo"
import { Thing } from "epsilon-base"
import { ThingUtils } from "../../../utils/thing.utils"

interface Props {
  thing: Thing
  onChange: any
}

const AboutMeComponent = ({ thing, onChange }: Props) => {
  const aboutMe = thing.value as AboutMe
  return (
    <div id="me-box">
      <form>
        <div className="form-group">
          <label className="form-text text-muted" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter your full name"
            defaultValue={aboutMe.name}
            onChange={e => onChange(ThingUtils.updateThingValue(thing, { name: e.target.value }))}
          />
        </div>
        <div className="form-group">
          <label className="form-text text-muted" htmlFor="dateOfBirth">
            Date of Birth
          </label>
          <input
            type="text"
            className="form-control"
            id="dateOfBirth"
            placeholder="DD/MM/YYYY"
            defaultValue={aboutMe.dateOfBirth}
            onChange={e => onChange(ThingUtils.updateThingValue(thing, { dateOfBirth: e.target.value }))}
          />
        </div>
      </form>
    </div>
  )
}

export default AboutMeComponent
