import defaultData from "../default-data.json"
import uniqid from "uniqid"

export class ThingStore {
  getData(): any {
    const data: string = window.localStorage.getItem("epsilon-store")
    if (data) {
      return JSON.parse(data)
    } else {
      defaultData.things.forEach((item: any) => {
        item.id = uniqid()
        item.created = Date.now()
      })
      this.saveData(defaultData)
      return defaultData
    }
  }

  saveData(data: any): void {
    window.localStorage.setItem("epsilon-store", JSON.stringify(data))
  }
}
