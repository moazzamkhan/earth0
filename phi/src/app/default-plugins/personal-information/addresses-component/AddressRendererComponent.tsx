import React from "react"
import Address from "./Address"
import "./AddressRendererComponent.less"
import { Thing } from "../../../../../base"

interface Props {
  thing: Thing
  onEdit: any
  onDelete: any
}
const AddressRendererComponent = ({ thing, onEdit, onDelete }: Props) => {
  const address = thing.value as Address
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title text-muted">{address.label}</h5>
        <p className="card-text">
          {`${address.houseNumber}, ${address.building}, ${address.street}, ${address.city} ${address.pincode}, ${
            address.state
          }, ${address.country}`}
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

export default AddressRendererComponent
