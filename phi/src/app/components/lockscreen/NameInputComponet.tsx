import React, { Component, SyntheticEvent, FormEvent } from "react"

interface Props {
  onChange: (name: string) => void
}

interface State {
  value: string
}

export class NameInputComponent extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { value: "" }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event: FormEvent<HTMLInputElement>) {
    this.setState({ value: event.currentTarget.value })
  }

  handleSubmit(event: SyntheticEvent) {
    this.props.onChange(this.state.value)
    event.preventDefault()
  }

  render() {
    return (
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="What is your name?"
          onChange={this.handleChange}
        />
        <div className="input-group-append">
          <button
            value={this.state.value}
            className="btn btn-outline-warning"
            type="button"
            id="button-addon2"
          >
            <i className="fas fa-arrow-right" />
          </button>
        </div>
      </div>
    )
  }
}
