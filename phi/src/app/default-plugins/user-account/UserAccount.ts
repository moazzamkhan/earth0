import PersonalInfo from "./personal-info/PersonalInfo";

export default interface UserAccount {
  personalInfo: PersonalInfo
  settings: Settings
}

export interface Settings {
  savedAt: string
}

/*
Addresses
  label: Address

  phone: 
    label: phone
  
  email:
  label: email

*/
