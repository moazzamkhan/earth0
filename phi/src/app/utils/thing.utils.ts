import uniqid from "uniqid"
import { Thing } from "epsilon-base"
import AppState from "../models/AppState"

import * as Notes from "epsilon-plugins/dist/notes"
import * as Thoughts from "epsilon-plugins/dist/thoughts"
import * as UserAccount from "../default-plugins/user-account/"

export class ThingUtils {
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

  static getUserAccount(appState: AppState): Thing {
    return appState.things.find((thing: Thing) => thing.type == "user-account")
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
