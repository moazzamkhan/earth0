import React from "react"
import Address from "./Address"
import "./AddressRendererComponent.less"

interface Props {
  item: Address
  onEdit: any
  onDelete: any
}
const AddressRendererComponent = ({ item, onEdit, onDelete }: Props) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title text-muted">{item.label}</h5>
        <p className="card-text">
          {`${item.houseNumber}, ${item.building}, ${item.street}, ${item.city} ${item.pincode}, ${item.state}, ${
            item.country
          }`}
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

export default AddressRendererComponent
