import RouteState from "../models/RouteState"

export const enum RouteActions {
  UPDATE_ROUTE = "UPDATE_ROUTE"
}

export function updateRoute(route: RouteState) {
  return {
    type: RouteActions.UPDATE_ROUTE,
    payload: route
  }
}
