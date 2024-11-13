export type Skill = {
  name: string
  expertise: number
}

export const skillFromObject = (object: { expertise: number; name: string }): Skill => {
  return {
    expertise: object.expertise,
    name: object.name
  }
}
