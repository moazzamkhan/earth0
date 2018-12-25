import { combineReducers } from "redux"

import things from "../components/things/things.reducer"
import route from "./route-state.reducer"

export default combineReducers({
  things,
  route
})
