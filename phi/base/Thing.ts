export class Thing {
  id: string
  type: string
  subtypes: string[] = []
  name: string

  /**
   * timestamp in milliseconds
   */
  created: number
  value: any
}
