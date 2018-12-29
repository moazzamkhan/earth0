import uniqid from "uniqid"
import { Thing } from "epsilon-base"
import AppState from "../models/AppState"

import * as Notes from "e0-plugins-notes"
import * as Thoughts from "e0-plugins-thoughts"
import * as UserAccount from "../default-plugins/user-account/"
import clone from "clone"
export class ThingUtils {
  /**
   *
   * @param thing
   * @param value - not expecting a object with nested properties
   */
  static updateThingValue(thing: Thing, patch: any): Thing {
    const newThing = clone(thing)
    newThing.value = Object.assign(thing.value, patch)
    return newThing
  }

  static updateThingValueArray(thing: Thing, value: any) {}

  static createThingInstance(type: string, name: string, value: any) {
    return Object.assign(
      {
        id: uniqid(),
        created: Date.now()
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
