import React from "react"
import Address from "./Address"
import "./AddressesComponent.less"
import AddressRendererComponent from "./AddressRendererComponent"

interface Props {
  addresses: Address[]
}
const AddressesComponent = ({ addresses }: Props) => {
  return (
    <div id="addresses-box">
      <button type="button" className="btn btn-outline-secondary">
        New Address
      </button>
      <hr />
      {addresses.map((address: Address, i: number) => (
        <AddressRendererComponent key={`address-${i}`} address={address} />
      ))}
    </div>
  )
}

export default AddressesComponent
