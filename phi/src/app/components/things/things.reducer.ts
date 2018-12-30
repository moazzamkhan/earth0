import Action from "../../models/Action"
import {Thing} from "e0-base"
import { ThingActions } from "./things.action"

const things = (state: Thing[] = [], action: Action) => {
  switch (action.type) {
    case ThingActions.ADD_THING:
      return [...state, action.payload]

    case ThingActions.DELETE_THING:      
      return state.filter((t: Thing) => t.id !== action.payload)

      // always passed a cloned version of thing
    case ThingActions.UPDATE_THING:
      return state.map((t: Thing) =>
        t.id === action.payload.id ? Object.assign({}, t, action.payload) : t
      )

    default:
      return state
  }
}

export default things
