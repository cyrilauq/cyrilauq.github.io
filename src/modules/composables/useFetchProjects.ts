import { computed, onMounted, reactive, ref } from 'vue'
import Project from '../models/project'
import { projectsCollection } from '../includes/firebase'

export function useFetchProjects() {
  const projects = ref<Array<Project>>()
  const currentProject = ref<Project>()

  const lastProjects = computed(() => projects.value?.slice(-3))

  async function fetchById(id: string): Promise<void> {
    if (projects.value === undefined || projects.value?.length === 0) {
      const firebaseDoc = await projectsCollection.doc(id).get()
      if (firebaseDoc.exists) {
        currentProject.value = Project.fromObject({ ...firebaseDoc.data(), id: firebaseDoc.id })
      }
    } else {
      currentProject.value = projects.value?.find((p) => p.id === id)
    }
  }

  async function fetchLast4Project() {
    const firebaseDocs = await projectsCollection.get()
    firebaseDocs.forEach((doc) => {
      projects.value?.push(Project.fromObject({ ...doc.data(), id: doc.id }))
    })
  }

  onMounted(() => {
    projects.value = []
  })

  return { projects, fetchById, lastProjects, fetchLast4Project, currentProject }
}
