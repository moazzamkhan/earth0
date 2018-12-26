import React from "react"
import { connect } from "react-redux"
import AppState from "../../models/AppState"
import { Thing } from "epsilon-base"
import "./TitleBar.less"
import WindowButtons from "./WindowButtons"
import moment from "moment"

const component = ({ thing }: { thing: Thing }) => (
  <div id="title-bar">
    <div className="thing-breadcrumb">
      <span className="thing-name">{thing && thing.name}</span>
      {thing && ` \u00b7 ${moment(thing.created).fromNow()}`}
    </div>
    <div className="empty-space" />
    {process.env.PHI_CONTEXT !== "browser" && <WindowButtons />}
  </div>
)

const mapStateToProps = (state: AppState) => {
  return {
    thing: state.things.filter((t: Thing) => t.id === state.route.thingId)[0]
  }
}
const mapDispatchToProps = (dispatch: any) => {
  return {}
}

const TitleBar = connect(
  mapStateToProps,
  mapDispatchToProps
)(component)

export default TitleBar
