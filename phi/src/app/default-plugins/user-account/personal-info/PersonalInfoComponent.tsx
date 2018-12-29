import React from "react"
import AddressesComponent from "../addresses-component/AddressesComponent"
import MeComponent from "../about-me-component/AboutMeComponent"
import "./PersonalInfoComponent.less"
import Address from "../addresses-component/Address"
import { Thing } from "epsilon-base"

interface Props {
  personalThings: Thing[]
  onChange: any
}

interface State {
  activeTabId: string
}

export default class PersonalInfoComponent extends React.Component<Props, State> {
  constructor(props: Props) {    
    super(props)
    this.state = { activeTabId: props.personalThings[0].id }
    this.switchTab = this.switchTab.bind(this)
  }

  switchTab(tabId: string) {
    this.setState({ activeTabId: tabId })
  }

  render() {
    const { personalThings } = this.props
    return (
      <div id="personal-info-box">
        <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
          {personalThings.map((thing: Thing) => (
            <a
              className={`nav-link ${this.state.activeTabId === thing.id ? "active" : ""}`}
              id={thing.id}
              key={thing.id}
              data-toggle="pill"
              href="javascript:void(0)"
              role="tab"
              onClick={() => this.switchTab(thing.id)}
            >
              {thing.name}
            </a>
          ))}
        </div>
        <div className="tab-content">
          {this.state.activeTabId === "about-me" && (
            <MeComponent
              thing={personalThings.find((thing: Thing) => thing.id === "about-me")}
              onChange={this.props.onChange}
            />
          )}
          {this.state.activeTabId === "addresses" && (
            <AddressesComponent
              thing={personalThings.find((thing: Thing) => thing.id === "addresses")}
              onChange={this.props.onChange}
            />
          )}
        </div>
      </div>
    )
  }
}
