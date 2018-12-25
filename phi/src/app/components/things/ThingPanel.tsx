import React from "react"
import { connect } from "react-redux"
import AppState from "../../models/AppState"
import {Thing} from "epsilon-base"
import "./ThingPanel.less"
import { ThingUtils } from "../../utils/thing.utils"
import { updateThing } from "./things.action"

const component = ({
  thing,
  onThingChanged
}: {
  thing: Thing
  onThingChanged: any
}) => {
  const TypeComponent = ThingUtils.getComponentForType(thing.type)
  return (
    <div id="thing-panel">
      {thing && <TypeComponent thing={thing} onChange={onThingChanged} />}
    </div>
  )
}

const mapStateToProps = (state: AppState) => {
  return {
    thing:
      state.things.filter((t: Thing) => t.id === state.route.thingId)[0] ||
      state.things[0]
  }
}
const mapDispatchToProps = (dispatch: any) => {
  return {
    onThingChanged: (thing: Thing) => {
      dispatch(updateThing(thing))
    }
  }
}

const ThingPanel = connect(
  mapStateToProps,
  mapDispatchToProps
)(component)

export default ThingPanel
