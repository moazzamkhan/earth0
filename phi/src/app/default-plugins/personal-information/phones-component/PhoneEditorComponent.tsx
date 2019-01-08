import React from "react"
import "./PhoneEditorComponent.less"
import Phone from "./Phone"
import { Thing } from "../../../../../base";

interface Props {
  thing: Thing
  onSave: any
  onCancel: any
}

export default class PhoneEditorComponent extends React.Component<Props, any> {
  constructor(props: Props) {
    super(props)
    this.state = Object.assign({}, props.thing.value) || ({} as Phone)
    this.onChange = this.onChange.bind(this)
  }

  onChange(e: any) {
    this.setState({ [e.target.id]: e.target.value })
  }

  render() {
    const { thing, onSave, onCancel } = this.props
    const phone = this.state as Phone
    return (
      <div id="phone-editor-box">
        <div className="btn-group btn-group-sm" role="group">
          <button type="button" className="btn btn-outline-secondary" onClick={() => onCancel()}>
            Cancel Editing
          </button>
          <button type="button" className="btn btn-outline-secondary" onClick={() => onSave(thing, this.state as Phone)}>
            Save Phone
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
              defaultValue={phone.label}
              onChange={this.onChange}
            />
          </div>
          <div className="form-row">
            <div className="form-group col-md-3">
              <label className="form-text text-muted" htmlFor="mobile">
                Mobile
              </label>

              <input
                type="checkbox"
                className="form-control"
                id="mobile"
                defaultChecked={phone.mobile}
                onChange={this.onChange}
              />
            </div>

            <div className="form-group col-md-3">
              <label className="form-text text-muted" htmlFor="countryCode">
                Country Code
              </label>
              <input
                type="text"
                className="form-control"
                id="countryCode"
                placeholder="Country Code"
                defaultValue={phone.countryCode}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group col-md-3">
              <label className="form-text text-muted" htmlFor="areaCode">
                Area Code
              </label>
              <input
                type="text"
                className="form-control"
                id="areaCode"
                placeholder="Area Code"
                defaultValue={phone.areaCode}
                onChange={this.onChange}
              />
            </div>

            <div className="form-group col-md-3">
              <label className="form-text text-muted" htmlFor="phoneNumber">
                Phone Number
              </label>
              <input
                type="text"
                className="form-control"
                id="phoneNumber"
                placeholder="Phone Number"
                defaultValue={phone.phoneNumber}
                onChange={this.onChange}
              />
            </div>
          </div>
        </form>
      </div>
    )
  }
}
