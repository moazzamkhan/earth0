export class Thing {
  id: string
  type: string
  subtypes: string[]
  name: string
  created: number
  value: Value
}

export type Value = any
