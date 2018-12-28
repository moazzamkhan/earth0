import { Thing } from "epsilon-base"
import React from "react"
import "./PersonalInfoComponent.less"
import MeComponent from "../me-component/MeComponent"
import AddressesComponent from "../addresses-component/AddressesComponent"
import PersonalInfo from "./PersonalInfo"

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
}

interface State {
  activeTabId: string
}

export default class PersonalInfoComponent1 extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { activeTabId: "me" }
  }

  render() {
    const { personalInfo } = this.props
    return (
      <div id="personal-info-box">
        <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
          {data.map((item: any) => (
            <a
              className="nav-link"
              id={item.id}
              key={item.id}
              data-toggle="pill"
              href="javascript:void(0)"
              role="tab"
              aria-selected="true"
            >
              {item.label}
            </a>
          ))}
        </div>
        <div className="tab-content">
          <MeComponent personalInfo={personalInfo} />
          <AddressesComponent addresses={personalInfo.addresses} />
        </div>
      </div>
    )
  }
}
