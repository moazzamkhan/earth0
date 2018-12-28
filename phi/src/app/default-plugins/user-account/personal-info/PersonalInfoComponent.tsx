import React from "react";
import AddressesComponent from "../addresses-component/AddressesComponent";
import MeComponent from "../me-component/MeComponent";
import PersonalInfo from "./PersonalInfo";
import "./PersonalInfoComponent.less";

const data = [
  {
    id: "me",
    label: "Me"
  },
  {
    id: "addresses",
    label: "Addresses"
  },
  {
    id: "phones",
    label: "Phones"
  },
  {
    id: "emails",
    label: "Emails"
  }
]

interface Props {
  personalInfo: PersonalInfo
  onChange: any
}

interface State {
  activeTabId: string
}

export default class PersonalInfoComponent1 extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { activeTabId: "me" }
    this.switchTab = this.switchTab.bind(this)
    this.onMeChange = this.onMeChange.bind(this)
    this.onAddressChange = this.onAddressChange.bind(this)
  }

  switchTab(tabId: string) {
    this.setState({ activeTabId: tabId })
  }

  render() {
    const { personalInfo, onChange } = this.props
    return (
      <div id="personal-info-box">
        <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
          {data.map((item: any) => (
            <a
              className={`nav-link ${this.state.activeTabId === item.id ? "active" : ""}`}
              id={item.id}
              key={item.id}
              data-toggle="pill"
              href="javascript:void(0)"
              role="tab"
              aria-selected="true"
              onClick={() => this.switchTab(item.id)}
            >
              {item.label}
            </a>
          ))}
        </div>
        <div className="tab-content">
          {this.state.activeTabId === "me" && <MeComponent personalInfo={personalInfo} onChange={this.onMeChange} />}
          {this.state.activeTabId === "addresses" && <AddressesComponent addresses={personalInfo.addresses} />}
        </div>
      </div>
    )
  }

  onMeChange(personalInfo: PersonalInfo) {
    this.props.onChange(personalInfo)
  }

  onAddressChange() {}
}
