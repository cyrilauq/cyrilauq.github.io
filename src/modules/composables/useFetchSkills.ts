import { computed, onMounted, reactive, ref } from 'vue'
import { skillFromObject, type Skill } from '../models/skill'
import type SkillWrapper from '../models/skillsWrapper'

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

  onMounted(() => {
    programmingLangageSkills.value = [
      skillFromObject({
        expertise: 7,
        name: 'C#'
      }),
      skillFromObject({
        expertise: 5,
        name: 'Kotlin'
      }),
      skillFromObject({
        expertise: 5,
        name: 'PHP'
      }),
      skillFromObject({
        expertise: 6,
        name: 'Java'
      }),
      skillFromObject({
        expertise: 7,
        name: 'Javascript'
      }),
      skillFromObject({
        expertise: 6,
        name: 'TypeScript'
      })
    ] as Array<Skill>
    frameworkSkills.value = [
      skillFromObject({
        expertise: 7,
        name: 'Vue JS 3'
      }),
      skillFromObject({
        expertise: 3,
        name: 'Next.JS'
      }),
      skillFromObject({
        expertise: 3,
        name: 'Angular'
      }),
      skillFromObject({
        expertise: 8,
        name: '.NET'
      }),
      skillFromObject({
        expertise: 6,
        name: '.NET MAUI'
      })
    ]
    otherSkills.value = [
      skillFromObject({
        expertise: 9,
        name: 'HTML'
      }),
      skillFromObject({
        expertise: 7,
        name: 'CSS'
      }),
      skillFromObject({
        expertise: 3,
        name: 'Docker Desktop'
      }),
      skillFromObject({
        expertise: 2,
        name: 'Docker Hub'
      }),
      skillFromObject({
        expertise: 2,
        name: 'Docker'
      })
    ]
    scriptingSkills.value = [
      skillFromObject({
        expertise: 3,
        name: 'Powershell'
      }),
      skillFromObject({
        expertise: 2,
        name: 'Python'
      })
    ]
    softwareSkills.value = [
      skillFromObject({
        expertise: 6,
        name: 'JetBrains Rider'
      }),
      skillFromObject({
        expertise: 6,
        name: 'Eclipse'
      }),
      skillFromObject({
        expertise: 6,
        name: 'JetBrains IntelliJ'
      }),
      skillFromObject({
        expertise: 8,
        name: 'Visual Studio'
      }),
      skillFromObject({
        expertise: 8,
        name: 'Visual Studio Code'
      })
    ]
    skills.push({
      skillsCatUid: 'programming_lanaguges',
      skillsFriendlyCat: 'Programming Langages',
      skills: programmingLangageSkills.value
    })
    skills.push({
      skillsCatUid: 'software',
      skillsFriendlyCat: 'Softwares',
      skills: softwareSkills.value
    })
    skills.push({
      skillsCatUid: 'frameworks',
      skillsFriendlyCat: 'Frameworks',
      skills: frameworkSkills.value
    })
  })

  return {
    programmingLangageSkills,
    lastSkills,
    frameworkSkills,
    otherSkills,
    scriptingSkills,
    softwareSkills,
    skills
  }
}
