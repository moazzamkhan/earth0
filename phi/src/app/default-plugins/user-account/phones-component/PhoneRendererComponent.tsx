import React from "react"
import Phone from "./Phone"

interface Props {
  item: Phone
  onEdit: any
  onDelete: any
}
const PhoneRendererComponent = ({ item, onEdit, onDelete }: Props) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title text-muted">{item.label}</h5>
        <p className="card-text">
          {item.mobile ? <i className="fas fa-mobile-alt" /> : <i className="fas fa-phone" />}
          {` (+${item.countryCode}) ${item.mobile ? "" : item.areaCode + " "}${item.phoneNumber}`}
        </p>
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

export default PhoneRendererComponent
