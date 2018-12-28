import React from "react";
import Address from "./Address";
import "./AddressRendererComponent.less";

interface Props {
  address: Address
}
const AddressRendererComponent = ({ address }: Props) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title text-muted">{address.label}</h5>
        <p className="card-text">
          {`${address.houseNumber}, ${address.building}, ${address.street}, ${address.city} ${address.pincode}, ${
            address.state
          }, ${address.country}`}{" "}
        </p>
        <a href="#" className="card-link">
          Edit
        </a>
      </div>
    </div>
  )
}

export default AddressRendererComponent
