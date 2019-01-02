import {Thing} from "e0-base"
import AppRoute from "./RouteState";

export default interface AppState {
  things: Thing[]
  route: AppRoute
}

