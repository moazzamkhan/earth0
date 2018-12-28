import { Thing } from "epsilon-base"
import React from "react"
import "./MeComponent.less"
import PersonalInfo from "../personal-info/PersonalInfo"

interface Props {
  personalInfo: PersonalInfo
  onChange: any
}

const MeComponent = ({ personalInfo, onChange }: Props) => {
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
            defaultValue={personalInfo.name}
            onChange={e => onChange({ name: e.target.value })}
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
            defaultValue={personalInfo.dateOfBirth}
            onChange={e => onChange({ dateOfBirth: e.target.value })}
          />
        </div>
      </form>
    </div>
  )
}

export default MeComponent
