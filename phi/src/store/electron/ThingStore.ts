import fs from "fs"
import mkdirp from "mkdirp"
import os from "os"
import path from "path"

const defaultData = {
  things: [
    {
      created: 1540401395373,
      id: "user-account",
      name: "User Account",
      type: "user-account",
      value: {
        name: "",
        settings: {
          savedAt: "~/.everything/et.json"
        }
      }
    }
  ]
}

export class ThingStore {
  private filepath: string = path.join(os.homedir(), ".everything", "et.json")
  private homedir = path.join(os.homedir(), ".everything")

  constructor() {
    const something = mkdirp.sync(this.homedir)
    console.log(something)
  }

  getData(): any {
    const data: string = fs.readFileSync(this.filepath, {
      flag: "a+",
      encoding: "utf8"
    })

    if (data) {
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
