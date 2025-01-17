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
  const skills = reactive<Array<SkillWrapper>>(new Array<SkillWrapper>(0))

  const lastSkills = computed(() => {
    const temp = programmingLangageSkills.value
      ?.concat(frameworkSkills?.value || [])
      .concat(otherSkills.value || [])
      .concat(scriptingSkills.value || [])
      .concat(softwareSkills.value || [])
    temp?.sort(() => Math.random() - 0.5)
    return temp?.slice(-6)
  })

  onMounted(async () => {
    const firebaseDocs = await skillsCollection.get()
    console.log(firebaseDocs.size)
    await loadSkills()
  })

  const getSkillsByType = async (type: string) => {
    return (await skillsCollection.where('type', '==', type).get()).docs.map((doc) => {
      const docData = doc.data()
      return skillFromObject({ name: docData.name, expertise: Number(docData.expertise) })
    })
  }

  return {
    programmingLangageSkills,
    lastSkills,
    frameworkSkills,
    otherSkills,
    scriptingSkills,
    softwareSkills,
    skills
  }

  async function loadSkills() {
    skills.push({
      skills: await getSkillsByType('programming_languge'),
      skillsCatUid: 'programming_languge',
      skillsFriendlyCat: 'Programming Langages'
    })
    skills.push({
      skills: await getSkillsByType('it_tools'),
      skillsCatUid: 'it_tools',
      skillsFriendlyCat: 'Softwares'
    })
    skills.push({
      skills: await getSkillsByType('frameworks'),
      skillsCatUid: 'frameworks',
      skillsFriendlyCat: 'Frameworks'
    })
    skills.push({
      skills: await getSkillsByType('other'),
      skillsCatUid: 'other',
      skillsFriendlyCat: 'Others'
    })
  }
}
