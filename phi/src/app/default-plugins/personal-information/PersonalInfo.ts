
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
  bloodGroup: string
  gender: string
  maritalStatus: string
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

