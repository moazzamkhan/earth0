import React from "react"
import "./App.less"
import FileExplorer from "./components/file-explorer/FileExplorer"
import SideToolbar from "./components/side-toolbar/SideToolbar"
import ThingPanel from "./components/things/ThingPanel"
import TitleBar from "./components/titlebar/TitleBar"
import AppState from "./models/AppState"
import RouteState from "./models/RouteState"
import { connect } from "react-redux"
import LockScreen from "./components/lockscreen/LockScreen";

// 1. LockScreen - // locked/null
// 2. SignUpScreen // signup/null
// 3. EverythingScreen - default - /user-account/user-account/
const component = ({ thingId }: RouteState) => {
  if (true) {
    return (
      <div id="everything">
        <LockScreen />
      </div>
    )
  } else {
    return (
      <div id="everything">
        <div id="side-toolbar-wrapper">
          <SideToolbar />
        </div>
        <div id="file-explorer-wrapper">{<FileExplorer />}</div>
        <div id="thing-panel-wrapper">
          <TitleBar />
          {thingId && <ThingPanel />}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state: AppState) => {
  return state.route
}

const mapDispatchToProps = (dispatch: any) => {
  return {}
}

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(component)

export default App
