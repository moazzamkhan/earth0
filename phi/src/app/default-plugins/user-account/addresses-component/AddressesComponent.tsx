import React from "react"
import Address from "./Address"
import "./AddressesComponent.less"
import AddressRendererComponent from "./AddressRendererComponent"
import AddressEditorComponent from "./AddressEditorComponent"

interface Props {
  addresses: Address[]
  onChange: any
}

interface State {
  // -2, not editing, -1 for new, otherwise index
  editing: number
}
const NOT_EDITING = -2
const NEW_ADDRESS = -1

export default class AddressesComponent extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { editing: NOT_EDITING }
    this.onChangeEditStatus = this.onChangeEditStatus.bind(this)
  }

  render() {
    const { addresses, onChange } = this.props    
    return (
      <div id="addresses-box">
        {this.state.editing !== NOT_EDITING && (
          <AddressEditorComponent
            address={addresses[this.state.editing]}
            onCancel={() => this.onChangeEditStatus(NOT_EDITING)}
            onSave={() => this.onChangeEditStatus(NOT_EDITING)}
          />
        )}
        {this.state.editing === NOT_EDITING && (
          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={() => {
              this.onChangeEditStatus(NEW_ADDRESS)
              onChange()
            }}
          >
            New Address
          </button>
        )}
        <hr />
        {this.state.editing === NOT_EDITING &&
          addresses.map((address: Address, i: number) => (
            <AddressRendererComponent key={`address-${i}`} address={address} onEdit={()=> this.onChangeEditStatus(i)}/>
          ))}
      </div>
    )
  }

  onChangeEditStatus(status: number) {
    this.setState({ editing: status })
  }
}

// export default AddressesComponent
