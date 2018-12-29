import React from "react"
import { connect } from "react-redux"
import AppState from "../../models/AppState"
import { Thing } from "epsilon-base"
import "./ThingPanel.less"
import { ThingUtils } from "../../utils/thing.utils"
import { updateThing } from "./things.action"

interface Props {
  thing: Thing
  things: Thing[]
  onThingChanged: any
}
const component = ({ thing, things, onThingChanged }: Props) => {
  const TypeComponent = ThingUtils.getComponentForType(thing.type)
  return (
    <div id="thing-panel">{thing && <TypeComponent thing={thing} things={things} onChange={onThingChanged} />}</div>
  )
}

const mapStateToProps = (state: AppState) => {
  return {
    thing: state.things.filter((t: Thing) => t.id === state.route.thingId)[0] || state.things[0],
    things: state.things.filter((t: Thing) => t.type === state.route.thingType)
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
