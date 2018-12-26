export default interface UserAccount {
  personalInfo: PersonalInfo
  settings: Settings
}

export interface PersonalInfo {
  name: string
}

export interface Settings {
  savedAt: string
}
