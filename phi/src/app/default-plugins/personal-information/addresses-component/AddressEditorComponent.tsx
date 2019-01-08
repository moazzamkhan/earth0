import React, { SyntheticEvent, FormEvent } from "react"
import Address from "./Address"
import "./AddressesComponent.less"
import { Thing } from "../../../../../base"

interface Props {
  thing: Thing
  onSave: any
  onCancel: any
}

export default class AddressEditorComponent extends React.Component<Props, any> {
  constructor(props: Props) {
    super(props)
    this.state = Object.assign({}, props.thing.value) || ({} as Address)
    this.onChange = this.onChange.bind(this)
  }

  onChange(e: any) {
    this.setState({ [e.target.id]: e.target.value })
  }
  render() {
    const { thing, onSave, onCancel } = this.props
    const address = this.state
    return (
      <div id="address-editor-box">
        <div className="btn-group btn-group-sm" role="group">
          <button type="button" className="btn btn-outline-secondary" onClick={() => onCancel()}>
            Cancel Editing
          </button>
          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={() => onSave(thing, this.state as Address)}
          >
            Save Address
          </button>
        </div>
        <hr />
        <form>
          <div className="form-group">
            <label className="form-text text-muted" htmlFor="label">
              Label
            </label>
            <input
              type="text"
              className="form-control"
              id="label"
              placeholder="label"
              defaultValue={address.label}
              onChange={this.onChange}
            />
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label className="form-text text-muted" htmlFor="houseNumber">
                House/Flat No
              </label>
              <input
                type="text"
                className="form-control"
                id="houseNumber"
                placeholder="House/Flat Number"
                defaultValue={address.houseNumber}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group col-md-6">
              <label className="form-text text-muted" htmlFor="building">
                Building
              </label>
              <input
                type="text"
                className="form-control"
                id="building"
                placeholder="Building Name"
                defaultValue={address.building}
                onChange={this.onChange}
              />
            </div>
          </div>
          <div className="form-group">
            <label className="form-text text-muted" htmlFor="street">
              Street
            </label>
            <textarea
              rows={1}
              className="form-control"
              id="street"
              placeholder="Street"
              defaultValue={address.street}
              onChange={this.onChange}
            />
          </div>
          <div className="form-row">
            <div className="form-group  col-md-6">
              <label className="form-text text-muted" htmlFor="city">
                City
              </label>
              <input
                type="text"
                className="form-control"
                id="city"
                placeholder="City"
                defaultValue={address.city}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group  col-md-6">
              <label className="form-text text-muted" htmlFor="pincode">
                Pincode
              </label>
              <input
                type="text"
                className="form-control"
                id="pincode"
                placeholder="Pincode"
                defaultValue={address.pincode}
                onChange={this.onChange}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group  col-md-6">
              <label className="form-text text-muted" htmlFor="state">
                State/Province
              </label>
              <input
                type="text"
                className="form-control"
                id="state"
                placeholder="State/Province"
                defaultValue={address.state}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group  col-md-6">
              <label className="form-text text-muted" htmlFor="country">
                Country
              </label>
              <input
                type="text"
                className="form-control"
                id="country"
                placeholder="Country"
                defaultValue={address.country}
                onChange={this.onChange}
              />
            </div>
          </div>
        </form>
      </div>
    )
  }
}
