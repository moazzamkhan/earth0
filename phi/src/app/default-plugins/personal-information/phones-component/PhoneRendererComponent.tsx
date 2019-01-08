import React from "react"
import Phone from "./Phone"
import { Thing } from "../../../../../base"

interface Props {
  thing: Thing
  onEdit: any
  onDelete: any
}
const PhoneRendererComponent = ({ thing, onEdit, onDelete }: Props) => {
  const item = thing.value as Phone
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title text-muted">{item.label}</h5>
        <p className="card-text">
          {item.mobile ? <i className="fas fa-mobile-alt" /> : <i className="fas fa-phone" />}
          {` (+${item.countryCode}) ${item.mobile ? "" : item.areaCode + " "}${item.phoneNumber}`}
        </p>
        <a href="javascript: void(0)" className="card-link" onClick={() => onEdit(thing)}>
          Edit
        </a>
        <a href="javascript: void(0)" className="card-link" onClick={() => onDelete(thing)}>
          Delete
        </a>
      </div>
    </div>
  )
}

export default PhoneRendererComponent
