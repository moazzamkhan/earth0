import fs from "fs"
import mkdirp from "mkdirp"
import os from "os"
import path from "path"
import uniqid from "uniqid"

import defaultData from "../default-data.json"

export class ThingStore {
  private filepath: string = path.join(os.homedir(), ".everything", "et.json")
  private homedir = path.join(os.homedir(), ".everything")

  constructor() {
    mkdirp.sync(this.homedir)
  }

  getData(): any {
    const data: string = fs.readFileSync(this.filepath, {
      flag: "a+",
      encoding: "utf8"
    })

    if (data) {
      defaultData.things.forEach((item: any) => {
        item.id = uniqid()
        item.created = Date.now()
      })

      return JSON.parse(data)
    } else {
      this.saveData(defaultData)
      return defaultData
    }
  }

  saveData(data: any): void {
    fs.writeFile(this.filepath, JSON.stringify(data), err => {
      if (err) {
        return console.log(err)
      }

      console.log(data, "saved at", this.filepath)
    })
  }
}
