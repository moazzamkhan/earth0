import React from "react"
import { Thing } from "../../../../../base"
import AboutMeComponent from "../about-me-component/AboutMeComponent"
import AddressesComponent from "../addresses-component/AddressesComponent"
import EmailsComponent from "../emails-component/EmailComponent"
import PhonesComponent from "../phones-component/PhonesComponent"
import "./PersonalInfoComponent.less"

interface Props {
  personalThings: Thing[]
  onChange: any
}

interface State {
  activeTabId: string
}

interface TabItem {
  id: string
  name: string
  component: any
}

const items = [
  { id: "about-me", name: "About Me", component: AboutMeComponent },
  { id: "address", name: "Addresses", component: AddressesComponent },
  { id: "phone", name: "Phones", component: PhonesComponent },
  { id: "email", name: "Emails", component: EmailsComponent }
]

export default class PersonalInfoComponent extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { activeTabId: props.personalThings[0].id }
    this.switchTab = this.switchTab.bind(this)
  }

  switchTab(tabId: string) {
    this.setState({ activeTabId: tabId })
  }

  getComponent(thingId: string) {
    thingId = this.extractActualId(thingId)
    return items.find((it: TabItem) => it.id === thingId).component
  }

  extractActualId(thingId: string) {
    const tokens = thingId.split(".")
    return tokens[1] || tokens[0]
  }

  render() {
    const { personalThings } = this.props
    const Comp = this.getComponent(this.state.activeTabId)
    return (
      <div id="personal-info-box">
        <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
          {items.map((it: TabItem) => (
            <a
              className={`nav-link ${this.state.activeTabId === it.id ? "active" : ""}`}
              id={it.id}
              key={it.id}
              data-toggle="pill"
              href="javascript:void(0)"
              role="tab"
              onClick={() => this.switchTab(it.id)}
            >
              {it.name}
            </a>
          ))}
        </div>
        <div className="tab-content">
          <Comp
            things={personalThings.filter(
              (thing: Thing) => thing.id.indexOf(this.extractActualId(this.state.activeTabId)) > -1
            )}
            onChange={this.props.onChange}
          />
        </div>
      </div>
    )
  }
}
