import uniqid from "uniqid"
import { Thing } from "../../../base"
import AppState from "../models/AppState"

import * as Notes from "../../../plugins/notes"
import * as Thoughts from "../../../plugins/thoughts"
import * as UserAccount from "../default-plugins/user-account/"
import clone from "clone"
export class ThingUtils {
  /**
   *
   * @param thing
   * @param value - not expecting a object with nested properties
   */
  static updateThing(thing: Thing, patch: any): Thing {
    return Object.assign(thing, patch)
  }

  static updateThingValueArray(thing: Thing, value: any, index: number): Thing {
    const newThing = clone(thing)

    if (index < 0) {
      newThing.value = [value].concat(newThing.value)
    } else {
      newThing.value[index] = value
    }
    return newThing
  }

  static deleteThingValueArray(thing: Thing, index: number): Thing {
    const newThing = clone(thing)
    ;(newThing.value as any[]).splice(index, 1)
    return newThing
  }

  static createThingInstance(type: string, name: string, value: any) {
    console.log(type)
    return;
    return Object.assign(
      {
        id: uniqid(),
        created: Date.now(),
        subtypes: []
      },
      { name, value },
      THING_TYPES.filter((t: any) => t.type === type)[0]
    ) as Thing
  }

  static getComponentForType(type: string): any {
    switch (type) {
      case "thought":
        return Thoughts.component

      case "user-account":
        return UserAccount.component

      case "note":
        return Notes.component

      default:
        console.log("ok, I am default", type)
        return Thoughts.component
    }
  }

  static getAboutMe(appState: AppState): Thing {
    return appState.things.find((thing: Thing) => thing.id == "about-me")
  }
}

export const THING_TYPES = [
  {
    type: Notes.type,
    icon: Notes.icon
  },
  {
    type: Thoughts.type,
    icon: Thoughts.icon
  }
]
