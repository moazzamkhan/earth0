import { Thing } from "epsilon-base"
import React, { Component } from "react"
import { connect } from "react-redux"
import AppState from "../../models/AppState"
import "./LockScreen.less"

import vid from "./screensaver.mp4"
import moment from "moment"
import { NameInputComponent } from "./NameInputComponet"
import { ThingUtils } from "../../utils/thing.utils"
import UserAccount from "../../default-plugins/user-account/UserAccount"
import { updateThing } from "../things/things.action"
import clone from "clone"

interface Props {
  thing: Thing
  onLogin: (thing: Thing) => void
}

const component = ({ thing, onLogin }: Props) => (
  <div id="lock-screen">
    <video autoPlay loop>
      <source src={vid} type="video/mp4" />
    </video>
    <div id="user-info-summary">
      {!(thing.value as UserAccount).personalInfo.name ? (
        <NameInputComponent
          onChange={(name: string) => {
            const t = clone(thing)
            t.value.personalInfo.name = name
            onLogin(t)
          }}
        />
      ) : (
        <button id="login-button" type="button" className="btn btn-warning" onClick={e => onLogin(null)}>
          {(thing.value as UserAccount).personalInfo.name} <i className="fas fa-arrow-right" />
        </button>
      )}

      <h1>{moment().format("hh:mm A")}</h1>
      <h4>{moment().format("MMMM Do")}</h4>
    </div>
  </div>
)

const mapStateToProps = (state: AppState) => {
  return {
    thing: ThingUtils.getUserAccount(state)
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    onLogin: (thing: Thing) => {
      if (thing) {
        dispatch(updateThing(thing))
      }
      console.log(thing)
    }
  }
}

const LockScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(component)

// const LockScreen = component

export default LockScreen
