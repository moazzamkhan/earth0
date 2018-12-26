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
