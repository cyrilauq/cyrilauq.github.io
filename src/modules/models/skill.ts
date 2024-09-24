export default class Skill {
  private _expertise: number
  public get expertise() {
    return this._expertise
  }

  private _name: string
  public get name() {
    return this._name
  }

  private constructor(object: { expertise: number; name: string }) {
    this._expertise = object.expertise
    this._name = object.name
  }

  public static fromObject(object: { expertise: number; name: string }) {
    const expertise = new Skill(object)
    return expertise
  }
}
