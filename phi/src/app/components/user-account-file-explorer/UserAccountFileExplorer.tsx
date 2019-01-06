import React, { SyntheticEvent } from "react"
import { connect } from "react-redux"
import { updateRoute } from "../../actions/route.actions"
import AppState from "../../models/AppState"
import RouteState from "../../models/RouteState"
import { Generator } from "../../utils/generator.utils"
import { ThingUtils } from "../../utils/thing.utils"
import { Thing } from "../../../../base"
import { addThing, deleteThing } from "../things/things.action"
import "./UserAccountFileExplorer.less"

interface Props {
  selectedItemId: string
  onItemClick: any
}

const component = ({ selectedItemId, onItemClick }: Props) => {
  const items = [{ id: "personal-info", name: "Personal Information" }, { id: "settings", name: "Settings" }]
  return (
    <div id="file-explorer" className="btn-toolbar" role="toolbar" aria-label="">
      <div className="list-group">
        {items &&
          items.map((t: { id: string; name: string }) => (
            <a
              href="javascript:void 0"
              id={t.id}
              key={t.id}
              onClick={(e: SyntheticEvent) => onItemClick(t.id)}
              className={`list-group-item list-group-item-action ${selectedItemId === t.id ? "active" : ""}`}
            >
              {t.name} <small>{t.name}</small>
            </a>
          ))}
      </div>
    </div>
  )
}

const mapStateToProps = (state: AppState) => {
  console.log(state.route)
  return {
    currentThing: state.things.filter((t: Thing) => t.id === state.route.thingId)[0] || state.things[0]
  }
}

const mapDispatchToProps = (dispatch: any, ownProps: any) => {
  return {
    onItemClick: (selectedItemId: string) => {
      dispatch(
        updateRoute({
          thingType: "user-account",
          thingId: selectedItemId
        } as RouteState)
      )
    },
    onNewItem: (type: string) => {
      type && dispatch(addThing(ThingUtils.createThingInstance(type, `${type}#${Generator.numlt100()}`, null)))
    },
    onDeleteItem: (id: string) => {
      id && dispatch(deleteThing(id))
    }
  }
}

const UserAccountFileExplorer = connect(
  mapStateToProps,
  mapDispatchToProps
)(component)

export default UserAccountFileExplorer
