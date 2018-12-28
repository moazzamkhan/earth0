import { Thing } from "epsilon-base"
import React from "react"
import "./MeComponent.less"
import PersonalInfo from "../personal-info/PersonalInfo"

interface Props {
  personalInfo: PersonalInfo
}

const MeComponent = ({ personalInfo }: Props) => {
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
          />
        </div>
        <div className="form-group">
          <label className="form-text text-muted" htmlFor="dateOfBirth">
            Date of Birth
          </label>
          <input
            type="text"
            className="form-control"
            id="dob"
            placeholder="DD/MM/YYYY"
            defaultValue={personalInfo.dateOfBirth}
          />
        </div>
      </form>
    </div>
  )
}

export default MeComponent
