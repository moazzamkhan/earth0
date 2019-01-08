import React from "react"
import Email from "./Email"
import "./EmailEditorComponent.less"
import { Thing } from "../../../../../base"

interface Props {
  thing: Thing
  onSave: any
  onCancel: any
}

export default class EmailEditorComponent extends React.Component<Props, any> {
  constructor(props: Props) {
    super(props)
    this.state = Object.assign({}, props.thing.value) || ({} as Email)
    this.onChange = this.onChange.bind(this)
  }

  onChange(e: any) {
    this.setState({ [e.target.id]: e.target.value })
  }

  render() {
    const { thing, onSave, onCancel } = this.props
    const email = this.state as Email
    return (
      <div id="email-editor-box">
        <div className="btn-group btn-group-sm" role="group">
          <button type="button" className="btn btn-outline-secondary" onClick={() => onCancel()}>
            Cancel Editing
          </button>
          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={() => onSave(thing, this.state as Email)}
          >
            Save Email
          </button>
        </div>
        <hr />
        <form>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label className="form-text text-muted" htmlFor="label">
                Label
              </label>
              <input
                type="text"
                className="form-control"
                id="label"
                placeholder="label"
                defaultValue={email.label}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group col-md-6">
              <label className="form-text text-muted" htmlFor="email">
                Email
              </label>
              <input
                type="text"
                className="form-control"
                id="email"
                placeholder="Email"
                defaultValue={email.email}
                onChange={this.onChange}
              />
            </div>
          </div>
        </form>
      </div>
    )
  }
}
