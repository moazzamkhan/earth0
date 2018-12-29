import Address from "../addresses-component/Address"

// export default interface PersonalInfo {
//   aboutMe: AboutMe
//   phones: Phone[]
//   addresses: Address[]
//   importantDates: ImportantDate[]
//   education: Education[]
// }

export interface AboutMe {
  name: string
  dateOfBirth: string
}

export interface Education {
  level: string
  school: string
  startYear: string
  endYear: string
  city: string
  state: string
  country: string
}

export interface ImportantDate {
  label: string
  date: string
}

export interface Phone {
  label: string
  countryCode: string
  areaCode: string
  phoneNumber: string
  mobile: boolean
}

export interface Email {
  label: string
  email: string
}
