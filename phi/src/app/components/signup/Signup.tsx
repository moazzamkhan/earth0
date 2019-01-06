import { Thing } from "../../../../base";
import React from "react"
import { connect } from "react-redux"
import AppState from "../../models/AppState"
import "./Signup.less"
import splash from "./splash.jpg"

import moment from "moment"

const component = () => <div id="signup" />

const mapStateToProps = (state: AppState) => {
  return {
    thing:
      state.things.filter((t: Thing) => t.id === state.route.thingId)[0] ||
      state.things[0]
  }
}
const mapDispatchToProps = (dispatch: any) => {
  return {}
}

const Signup = connect(
  mapStateToProps,
  mapDispatchToProps
)(component)

export default Signup
