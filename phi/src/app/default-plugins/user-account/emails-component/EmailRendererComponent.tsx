import React from "react";
import Email from "./Email";

interface Props {
  item: Email
  onEdit: any
  onDelete: any
}
const EmailRendererComponent = ({ item, onEdit, onDelete }: Props) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title text-muted">{item.label}</h5>
        <p className="card-text">{item.email}</p>
        <a href="javascript: void(0)" className="card-link" onClick={onEdit}>
          Edit
        </a>
        <a href="javascript: void(0)" className="card-link" onClick={onDelete}>
          Delete
        </a>
      </div>
    </div>
  )
}

export default EmailRendererComponent
