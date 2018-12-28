import { Thing } from "epsilon-base"
import React from "react"
import "./AddressesComponent.less"
import Address from "./Address"

interface Props {
  addresses: Address[]
}
const AddressesComponent = ({ addresses }: Props) => {
  const address = addresses[0]
  return (
    <div id="addresses-box">
      <form>
        <div className="form-group">
          <label className="form-text text-muted" htmlFor="houseNumber">
            House/Flat No
          </label>
          <input
            type="text"
            className="form-control"
            id="houseNumber"
            placeholder="House/Flat Number"
            defaultValue={address.houseNumber}
          />
        </div>
        <div className="form-group">
          <label className="form-text text-muted" htmlFor="building">
            Country
          </label>
          <input
            type="text"
            className="form-control"
            id="building"
            placeholder="Building Name"
            defaultValue={address.building}
          />
        </div>
        <div className="form-group">
          <label className="form-text text-muted" htmlFor="street">
            Street
          </label>
          <textarea rows={1} className="form-control" id="street" placeholder="Street" defaultValue={address.street} />
        </div>
        <div className="form-group">
          <label className="form-text text-muted" htmlFor="city">
            City
          </label>
          <input type="text" className="form-control" id="city" placeholder="City" defaultValue={address.city} />
        </div>
        <div className="form-group">
          <label className="form-text text-muted" htmlFor="state">
            State/Province
          </label>
          <input
            type="text"
            className="form-control"
            id="state"
            placeholder="State/Province"
            defaultValue={address.state}
          />
        </div>
        <div className="form-group">
          <label className="form-text text-muted" htmlFor="country">
            Country
          </label>
          <input
            type="text"
            className="form-control"
            id="country"
            placeholder="Country"
            defaultValue={address.country}
          />
        </div>
      </form>
    </div>
  )
}

export default AddressesComponent
