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

interface Props {
  name: string
  onLogin: (name: string) => void
}

const component = ({ name, onLogin }: Props) => (
  <div id="lock-screen">
    <video autoPlay loop>
      <source src={vid} type="video/mp4" />
    </video>
    <div id="user-info-summary">
      {name === "NONAME" ? (
        <NameInputComponent onChange={(name: string) => onLogin(name)} />
      ) : (
        <button
          id="login-button"
          type="button"
          className="btn btn-warning"
          onClick={e => onLogin(null)}
        >
          {name} <i className="fas fa-arrow-right" />
        </button>
      )}

      <h1>{moment().format("hh:mm A")}</h1>
      <h4>{moment().format("MMMM Do")}</h4>
    </div>
  </div>
)

const mapStateToProps = (state: AppState) => {
  console.log(ThingUtils.getUserAccount(state))
  return {
    name: (ThingUtils.getUserAccount(state).value as UserAccount).name
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    onLogin: (name: string) => {
      console.log(name)
    }
  }
}

const LockScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(component)

// const LockScreen = component

export default LockScreen
