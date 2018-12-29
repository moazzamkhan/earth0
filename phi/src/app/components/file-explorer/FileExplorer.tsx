import React, { SyntheticEvent } from "react"
import { connect } from "react-redux"
import { updateRoute } from "../../actions/route.actions"
import AppState from "../../models/AppState"
import RouteState from "../../models/RouteState"
import { Generator } from "../../utils/generator.utils"
import { ThingUtils } from "../../utils/thing.utils"
import { Thing } from "epsilon-base"
import { addThing, deleteThing } from "../things/things.action"
import "./FileExplorer.less"
import moment from "moment"

interface Props {
  things: Thing[]
  currentThing: Thing
  currentType: string
  readonly: boolean
  onNewItem: any
  onDeleteItem: any
  onItemClick: any
}

const component = ({ things, currentThing, currentType, readonly, onNewItem, onDeleteItem, onItemClick }: Props) => {
  return (
    <div id="file-explorer" className="btn-toolbar" role="toolbar" aria-label="">
      {!readonly && (
        <div className="btn-group btn-group-sm">
          <button type="button" className="btn btn-outline-secondary" onClick={() => onDeleteItem(currentThing.id)}>
            <i className="far fa-trash-alt" />
          </button>

          <button type="button" className="btn btn-outline-secondary" onClick={() => onNewItem(currentType)}>
            <i className="fas fa-plus-circle" />
          </button>
        </div>
      )}
      <div className="list-group">
        {things &&
          things.map((t: Thing) => (
            <a
              href="javascript:void 0"
              id={t.id}
              key={t.id}
              onClick={(e: SyntheticEvent) => onItemClick((e.currentTarget as HTMLAnchorElement).getAttribute("id"))}
              className={`list-group-item list-group-item-action ${currentThing.id === t.id ? "active" : ""}`}
            >
              {t.name} <small>{moment(t.created).calendar()}</small>
            </a>
          ))}
      </div>
    </div>
  )
}

const mapStateToProps = (state: AppState) => {
  const things = state.route.thingType
    ? state.things.filter((t: Thing) => t.type === state.route.thingType)
    : state.things
  return {
    things,
    currentType: state.route.thingType,
    currentThing: state.things.filter((t: Thing) => t.id === state.route.thingId)[0] || state.things[0],
    readonly: state.route.thingType === "person-info"
  }
}

const mapDispatchToProps = (dispatch: any, ownProps: any) => {
  return {
    onItemClick: (id: string) => {
      dispatch(
        updateRoute({
          thingId: id
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

const FileExplorer = connect(
  mapStateToProps,
  mapDispatchToProps
)(component)

export default FileExplorer
