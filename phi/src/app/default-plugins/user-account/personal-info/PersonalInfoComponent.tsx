import React from "react"
import AddressesComponent from "../addresses-component/AddressesComponent"
import MeComponent from "../about-me-component/AboutMeComponent"
import "./PersonalInfoComponent.less"
import Address from "../addresses-component/Address"
import { Thing } from "epsilon-base"
import PhonesComponent from "../phones-component/PhonesComponent"
import AboutMeComponent from "../about-me-component/AboutMeComponent"
import EmailsComponent from "../emails-component/EmailComponent"

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
    const componentMap: any = {
      "about-me": AboutMeComponent,
      addresses: AddressesComponent,
      phones: PhonesComponent,
      emails: EmailsComponent
    }

    const Comp = componentMap[this.state.activeTabId]
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
          <Comp
            thing={personalThings.find((thing: Thing) => thing.id === this.state.activeTabId)}
            onChange={this.props.onChange}
          />
        </div>
      </div>
    )
  }
}
