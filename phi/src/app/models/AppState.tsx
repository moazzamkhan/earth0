import { Thing } from "../../../base";
import AppRoute from "./RouteState";

export default interface AppState {
  things: Thing[]
  route: AppRoute
}

