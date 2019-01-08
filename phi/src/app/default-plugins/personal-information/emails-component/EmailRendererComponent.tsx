import React from "react"
import Email from "./Email"
import { Thing } from "../../../../../base"

interface Props {
  thing: Thing
  onEdit: any
  onDelete: any
}
const EmailRendererComponent = ({ thing, onEdit, onDelete }: Props) => {
  const item = thing.value as Email
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title text-muted">{item.label}</h5>
        <p className="card-text">{item.email}</p>
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

export default EmailRendererComponent
