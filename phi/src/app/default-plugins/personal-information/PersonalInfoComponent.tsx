import React from "react"
import { Thing } from "../../../../base"
import "./PersonalInfoComponent.less"
import AboutMeComponent from "./about-me-component/AboutMeComponent"
import AddressesComponent from "./addresses-component/AddressesComponent"
import PhonesComponent from "./phones-component/PhonesComponent"
import EmailsComponent from "./emails-component/EmailComponent"

interface Props {
  things: Thing[]
  onCreate: any
  onChange: any
  onDelete: any
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
  { id: "aboutMe", name: "About Me", component: AboutMeComponent },
  { id: "address", name: "Addresses", component: AddressesComponent },
  { id: "phone", name: "Phones", component: PhonesComponent },
  { id: "email", name: "Emails", component: EmailsComponent }
]

export default class PersonalInfoComponent extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { activeTabId: props.things[0].subtypes[0] }
    this.switchTab = this.switchTab.bind(this)
  }

  switchTab(tabId: string) {
    this.setState({ activeTabId: tabId })
  }

  getComponent(thingId: string) {
    return items.find((it: TabItem) => it.id === thingId).component
  }

  render() {
    const { things } = this.props
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
            things={things.filter((thing: Thing) => thing.subtypes[0] === this.state.activeTabId)}
            onCreate={this.props.onCreate}
            onChange={this.props.onChange}
            onDelete={this.props.onDelete}
          />
        </div>
      </div>
    )
  }
}
