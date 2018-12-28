import defaultData from "../default-data.json"

export class ThingStore {
  getData(): any {
    const data: string = window.localStorage.getItem("epsilon-store")
    if (data) {
      return JSON.parse(data)
    } else {
      this.saveData(defaultData)
      return defaultData
    }
  }

  saveData(data: any): void {
    window.localStorage.setItem("epsilon-store", JSON.stringify(data))
  }
}
