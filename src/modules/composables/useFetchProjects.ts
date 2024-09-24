import { computed, onMounted, ref } from 'vue'
import Project from '../models/project'

export function useFetchProjects() {
  const projects = ref<Array<Project>>()

  const lastProjects = computed(() => projects.value?.slice(-3))

  function fetchById(id: string): Promise<Project | undefined> {
    return Promise.resolve(projects.value?.find((p) => p.id === id))
  }

  onMounted(() => {
    projects.value = [
      Project.fromObject({
        id: '1',
        name: 'Portfolio',
        description:
          "GitHub project containing my portfolio project. This project is just here to expose all my little project and bigger ones with some of the technologies I've used and a description of it.",
        links: [{ name: 'front-end', link: 'https://github.com/cyrilauq/cyrilauq.github.io' }],
        miniatureLink: '',
        technologies: ['Vue JS 3', 'HTML', 'CSS', 'TypeScript', 'Firebase']
      }),
      Project.fromObject({
        id: '2',
        name: 'Tchat',
        description:
          'This project consist of a website for chatting. It let you authenticate and send message to other people that are authenticated and on the same network as you.',
        links: [
          { name: 'front-end and back-end', link: 'https://github.com/cycy243/hodinfosse-tchat/' }
        ],
        miniatureLink: '',
        technologies: [
          'Vue JS 3',
          'HTML',
          'CSS',
          'TypeScript',
          'C#',
          '.NET',
          'Pusher',
          'MySQL',
          'Entity Framework'
        ]
      }),
      Project.fromObject({
        id: '3',
        name: 'Career-Vault',
        description:
          "WebSite to keep a track of job application. With career-vault you can save every application you've made and share it as an excel or a pdf.",
        links: [{ name: 'front-end', link: 'https://github.com/cycy243/career-vault' }],
        miniatureLink: '',
        technologies: ['Vue JS 3', 'HTML', 'CSS', 'TypeScript', 'Firebase']
      }),
      Project.fromObject({
        id: '4',
        name: 'Project-Quiz',
        description:
          'Project-Quiz is an application that allow you to create, answer, share and note quizzes. You can, of course, authenticate on it.',
        links: [
          { name: 'front-end (mobile)', link: 'https://github.com/cycy243/project-quiz-web' },
          { name: 'back-end', link: 'https://github.com/cycy243/project-quiz-api' },
          { name: 'front-end(mobile/windows)', link: 'https://github.com/cycy243/project-quiz-web' }
        ],
        miniatureLink: '',
        technologies: [
          'Vue JS 3',
          'HTML',
          'CSS',
          'TypeScript',
          'MongoDB',
          'Node.JS',
          'Express.JS',
          '.NET',
          '.NET MAUI',
          'C#'
        ]
      })
    ]
  })

  return { projects, fetchById, lastProjects }
}
