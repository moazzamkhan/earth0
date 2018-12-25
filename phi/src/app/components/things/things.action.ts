import {Thing} from "epsilon-base"

export const enum ThingActions {
  ADD_THING = "ADD_THING",
  DELETE_THING = "DELETE_THING",
  UPDATE_THING = "UPDATE_THING"
}

export function addThing(thing: Thing) {
  return {
    type: ThingActions.ADD_THING,
    payload: thing
  }
}

export function deleteThing(id: string) {  
  return {
    type: ThingActions.DELETE_THING,
    payload: id
  }
}

export function updateThing(thing: Thing) {
  return {
    type: ThingActions.UPDATE_THING,
    payload: thing
  }
}
