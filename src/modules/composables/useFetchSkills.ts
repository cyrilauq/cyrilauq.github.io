import { computed, onMounted, ref } from 'vue'
import Skill from '../models/skill'

export function useFetchSkills() {
  const programmingLangageSkills = ref<Array<Skill>>()
  const frameworkSkills = ref<Array<Skill>>()
  const otherSkills = ref<Array<Skill>>()
  const scriptingSkills = ref<Array<Skill>>()
  const softwareSkills = ref<Array<Skill>>()

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
      Skill.fromObject({
        expertise: 7,
        name: 'C#'
      }),
      Skill.fromObject({
        expertise: 5,
        name: 'Kotlin'
      }),
      Skill.fromObject({
        expertise: 5,
        name: 'PHP'
      }),
      Skill.fromObject({
        expertise: 6,
        name: 'Java'
      }),
      Skill.fromObject({
        expertise: 7,
        name: 'Javascript'
      }),
      Skill.fromObject({
        expertise: 6,
        name: 'TypeScript'
      })
    ] as Array<Skill>
    frameworkSkills.value = [
      Skill.fromObject({
        expertise: 7,
        name: 'Vue JS 3'
      }),
      Skill.fromObject({
        expertise: 3,
        name: 'Next.JS'
      }),
      Skill.fromObject({
        expertise: 3,
        name: 'Angular'
      }),
      Skill.fromObject({
        expertise: 8,
        name: '.NET'
      }),
      Skill.fromObject({
        expertise: 6,
        name: '.NET MAUI'
      })
    ]
    otherSkills.value = [
      Skill.fromObject({
        expertise: 9,
        name: 'HTML'
      }),
      Skill.fromObject({
        expertise: 7,
        name: 'CSS'
      }),
      Skill.fromObject({
        expertise: 4,
        name: 'Docker'
      })
    ]
    scriptingSkills.value = [
      Skill.fromObject({
        expertise: 3,
        name: 'Powershell'
      }),
      Skill.fromObject({
        expertise: 2,
        name: 'Python'
      }),
      Skill.fromObject({
        expertise: 2,
        name: 'Docker Hub'
      })
    ]
    softwareSkills.value = [
      Skill.fromObject({
        expertise: 6,
        name: 'JetBrains Rider'
      }),
      Skill.fromObject({
        expertise: 6,
        name: 'Eclipse'
      }),
      Skill.fromObject({
        expertise: 3,
        name: 'Docker Desktop'
      }),
      Skill.fromObject({
        expertise: 6,
        name: 'JetBrains IntelliJ'
      }),
      Skill.fromObject({
        expertise: 8,
        name: 'Visual Studio'
      }),
      Skill.fromObject({
        expertise: 8,
        name: 'Visual Studio Code'
      })
    ]
  })

  return {
    programmingLangageSkills,
    lastSkills,
    frameworkSkills,
    otherSkills,
    scriptingSkills,
    softwareSkills
  }
}
