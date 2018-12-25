import RouteState from "../models/RouteState"
import Action from "../models/Action"
import { RouteActions } from "../actions/route.actions"

const route = (state: RouteState = { thingId: null, thingType: null }, action: Action) => {
  switch (action.type) {
    case RouteActions.UPDATE_ROUTE:
      return Object.assign({}, state, action.payload)

    default:
      return state
  }
}

export default route
