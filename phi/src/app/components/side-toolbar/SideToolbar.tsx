import React, { SyntheticEvent } from "react";
import { connect } from "react-redux";
import { updateRoute } from "../../actions/route.actions";
import AppState from "../../models/AppState";
import RouteState from "../../models/RouteState";
import { THING_TYPES } from "../../utils/thing.utils";
import "./SideToolbar.less";


const component = ({
  itemClicked,
  types,
  type
}: {
  itemClicked: any
  types: { type: string; icon: string }[]
  type: string
}) => {
  return (
    <div id="side-toolbar" role="toolbar" aria-label="">
      <button
        type="button"
        className="btn app-icon"
        onClick={(e: SyntheticEvent<HTMLButtonElement>) => itemClicked(null, null)}
      >
        <i className="fas fa-globe-americas" />
      </button>
      {types &&
        types.map((t: any) => (
          <button
            className={`btn ${t.type === type ? "selected" : ""}`}
            id={t.type}
            key={t.type}
            onClick={(e: SyntheticEvent<HTMLButtonElement>) => itemClicked((e.currentTarget as HTMLButtonElement).id)}
          >
            <i className={t.icon} />
          </button>
        ))}

      <span className="empty" />
      <button className="btn" onClick={(e: SyntheticEvent<HTMLButtonElement>) => console.log(e)}>
        <i className="fas fa-arrow-circle-right" />
      </button>
    </div>
  )
}

const mapStateToProps = (state: AppState) => {
  return {
    types: THING_TYPES,
    type: state.route.thingType
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    itemClicked: (type: string, id: string = null) => {
      dispatch(
        updateRoute({
          thingType: type,
          thingId: id
        } as RouteState)
      )
    }
  }
}

const SideToolbar = connect(
  mapStateToProps,
  mapDispatchToProps
)(component)

export default SideToolbar
