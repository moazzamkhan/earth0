import React from "react"
import Address from "./Address"
import "./AddressesComponent.less"

interface Props {
  address: Address
}
const AddressEditorComponent = ({ address = {} as Address }: Props) => {
  return (
    <div id="address-editor-box">
      <div className="btn-group btn-group-sm" role="group">
        <button type="button" className="btn btn-outline-secondary">
          Cancel Editing
        </button>
        <button type="button" className="btn btn-outline-secondary">
          Save Address
        </button>
      </div>
      <hr />
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
            Building
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
          <label className="form-text text-muted" htmlFor="pincode">
            Pincode
          </label>
          <input
            type="text"
            className="form-control"
            id="pincode"
            placeholder="Pincode"
            defaultValue={address.pincode}
          />
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

export default AddressEditorComponent
