import React, { SyntheticEvent } from "react"
import { connect } from "react-redux"
import AppState from "../../models/AppState"
import { Thing } from "../../../../base"
import "./TitleBar.less"
import WindowButtons from "./WindowButtons"
import { icon as UserAccountIcon } from "../../default-plugins/user-account"
import moment from "moment"
import RouteState from "../../models/RouteState"
import { updateRoute } from "../../actions/route.actions"

const component = ({ thing, additionalButtonClicked }: { thing: Thing; additionalButtonClicked: any }) => (
  <div id="title-bar">
    <div className="thing-breadcrumb">
      <span className="thing-name">{thing && thing.name}</span>
      {thing && ` \u00b7 ${moment(thing.created).fromNow()}`}
    </div>
    <div className="empty-space" />
    <div id="additional-buttons" className="btn-toolbar">
      <div className="btn-group btn-group-sm" role="group" aria-label="">
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={(e: SyntheticEvent<HTMLButtonElement>) => additionalButtonClicked("settings")}
        >
          <i className="fas fa-cog" />
        </button>

        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={(e: SyntheticEvent<HTMLButtonElement>) => additionalButtonClicked("locked")}
        >
          <i className="fas fa-lock" />
        </button>
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={(e: SyntheticEvent<HTMLButtonElement>) => additionalButtonClicked("user-account")}
        >
          <i className={UserAccountIcon} />
        </button>
      </div>
    </div>
    {process.env.PHI_CONTEXT !== "browser" && <WindowButtons />}
  </div>
)

const mapStateToProps = (state: AppState) => {
  return {
    thing: state.things.filter((t: Thing) => t.id === state.route.thingId)[0]
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    additionalButtonClicked: (type: string, id: string = null) => {
      dispatch(
        updateRoute({
          thingType: type,
          thingId: id
        } as RouteState)
      )
    }
  }
}

const TitleBar = connect(
  mapStateToProps,
  mapDispatchToProps
)(component)

export default TitleBar
