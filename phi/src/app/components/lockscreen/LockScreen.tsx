import clone from "clone"
import { Thing } from "epsilon-base"
import moment from "moment"
import React from "react"
import { connect } from "react-redux"
import { updateRoute } from "../../actions/route.actions"
import { AboutMe } from "../../default-plugins/user-account/personal-info/PersonalInfo"
import AppState from "../../models/AppState"
import RouteState from "../../models/RouteState"
import { ThingUtils } from "../../utils/thing.utils"
import { updateThing } from "../things/things.action"
import "./LockScreen.less"
import { NameInputComponent } from "./NameInputComponet"
import vid from "./screensaver.mp4"

interface Props {
  thing: Thing
  onLogin: (thing: Thing) => void
  onNameSet: (thing: Thing) => void
}

const component = ({ thing, onLogin, onNameSet }: Props) => (
  <div id="lock-screen">
    <video autoPlay loop playsInline muted>
      <source src={vid} type="video/mp4" />
    </video>
    <div id="user-info-summary">
      {!(thing.value as AboutMe).name ? (
        <NameInputComponent
          onChange={(name: string) => {
            const t = clone(thing)
            t.value.name = name
            onNameSet(t)
          }}
        />
      ) : (
        <button id="login-button" type="button" className="btn btn-warning" onClick={e => onLogin(thing)}>
          {(thing.value as AboutMe).name} <i className="fas fa-arrow-right" />
        </button>
      )}

      <h1>{moment().format("hh:mm A")}</h1>
      <h4>{moment().format("MMMM Do")}</h4>
    </div>
  </div>
)

const mapStateToProps = (state: AppState) => {
  return {
    thing: ThingUtils.getAboutMe(state)
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    onLogin: (thing: Thing) => {
      if (thing) {
        dispatch(
          updateRoute({
            thingType: thing.type,
            thingId: thing.id
          } as RouteState)
        )
      }
    },
    onNameSet: (thing: Thing) => {
      if (thing) {
        dispatch(updateThing(thing))
      }
    }
  }
}

const LockScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(component)

// const LockScreen = component

export default LockScreen
