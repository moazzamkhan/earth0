import React from "react";
import { connect } from "react-redux";
import { Thing } from "../../../../base";
import AppState from "../../models/AppState";
import { Generator } from "../../utils/generator.utils";
import { ThingUtils } from "../../utils/thing.utils";
import "./ThingPanel.less";
import { addThing, deleteThing, updateThing } from "./things.action";

interface Props {
  thing: Thing
  things: Thing[]
  onThingCreated: any
  onThingChanged: any
  onThingDeleted: any
}
const component = ({ thing, things, onThingCreated, onThingChanged, onThingDeleted }: Props) => {
  const TypeComponent = ThingUtils.getComponentForType(thing.type)
  return (
    <div id="thing-panel">
      {thing && (
        <TypeComponent
          thing={thing}
          things={things}
          onCreate={onThingCreated}
          onChange={onThingChanged}
          onDelete={onThingDeleted}
        />
      )}
    </div>
  )
}

const mapStateToProps = (state: AppState) => {
  return {
    thing: state.things.filter((t: Thing) => t.id === state.route.thingId)[0] || state.things[0],
    things: state.things.filter((t: Thing) => t.type === state.route.thingType || t.type.startsWith("user-account"))
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
