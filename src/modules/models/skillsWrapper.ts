import type { Skill } from './skill'

export default interface SkillWrapper {
  skillsCatUid: string
  skillsFriendlyCat: string
  skills: Skill[]
}
