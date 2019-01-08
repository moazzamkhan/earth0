import React from "react"
import { connect } from "react-redux"
import { Thing } from "../../../../base"
import AppState from "../../models/AppState"
import { Generator } from "../../utils/generator.utils"
import { ThingUtils } from "../../utils/thing.utils"
import "./ThingPanel.less"
import { addThing, deleteThing, updateThing } from "./things.action"

interface Props {
  thingType: string
  thing: Thing
  things: Thing[]
  onThingCreated: any
  onThingChanged: any
  onThingDeleted: any
}
const component = ({ thingType, thing, things, onThingCreated, onThingChanged, onThingDeleted }: Props) => {
  const TypeComponent = ThingUtils.getComponentForType(thingType)
  return (
    <div id="thing-panel">
      <TypeComponent
        thing={thing}
        things={things}
        onCreate={onThingCreated}
        onChange={onThingChanged}
        onDelete={onThingDeleted}
      />
    </div>
  )
}

const mapStateToProps = (state: AppState) => {
  return {
    thingType: state.route.thingType,
    thing: state.things.find((t: Thing) => t.id === state.route.thingId),
    things: state.things.filter((t: Thing) => t.type === state.route.thingType)
  }
}
const mapDispatchToProps = (dispatch: any) => {
  return {
    onThingChanged: (thing: Thing) => {
      dispatch(updateThing(thing))
    },
    onThingDeleted: (id: string) => {
      id && dispatch(deleteThing(id))
    },
    onThingCreated: (type: string) => {
      type && dispatch(addThing(ThingUtils.createThingInstance(type, `${type}#${Generator.numlt100()}`, null)))
    }
  }
}

const ThingPanel = connect(
  mapStateToProps,
  mapDispatchToProps
)(component)

export default ThingPanel
