import { computed, onMounted, reactive, ref } from 'vue'
import { skillFromObject, type Skill } from '../models/skill'
import type SkillWrapper from '../models/skillsWrapper'
import { skillsCollection } from '../includes/firebase'

export function useFetchSkills() {
  const programmingLangageSkills = ref<Array<Skill>>()
  const frameworkSkills = ref<Array<Skill>>()
  const otherSkills = ref<Array<Skill>>()
  const scriptingSkills = ref<Array<Skill>>()
  const softwareSkills = ref<Array<Skill>>()
  const skills = ref<Array<SkillWrapper>>(new Array<SkillWrapper>(0))
  const isLoading = ref(true)

  const lastSkills = computed(() => {
    const temp = skills.value.reduce((prev, curr) => prev.concat(curr.skills), new Array<Skill>(0))
    temp?.sort(() => Math.random() - 0.5)
    return temp?.slice(-6)
  })

  onMounted(async () => {
    await loadSkills()
  })

  const getSkillsByType = async (type: string) => {
    return (await skillsCollection.where('type', '==', type).get()).docs.map((doc) => {
      const docData = doc.data()
      return skillFromObject({ name: docData.name, expertise: Number(docData.expertise) })
    })
  }

  async function loadSkills() {
    isLoading.value = true
    const loadedSkills = new Array<SkillWrapper>(0)
    loadedSkills.push({
      skills: await getSkillsByType('programming_languge'),
      skillsCatUid: 'programming_languge',
      skillsFriendlyCat: 'Programming Langages'
    })
    loadedSkills.push({
      skills: await getSkillsByType('it_tools'),
      skillsCatUid: 'it_tools',
      skillsFriendlyCat: 'Softwares'
    })
    loadedSkills.push({
      skills: await getSkillsByType('frameworks'),
      skillsCatUid: 'frameworks',
      skillsFriendlyCat: 'Frameworks'
    })
    loadedSkills.push({
      skills: await getSkillsByType('other'),
      skillsCatUid: 'other',
      skillsFriendlyCat: 'Others'
    })
    skills.value = loadedSkills
    isLoading.value = false
  }

  return {
    programmingLangageSkills,
    lastSkills,
    frameworkSkills,
    otherSkills,
    scriptingSkills,
    softwareSkills,
    skills,
    isLoading
  }
}
