import { filterProjectsByTypeChecking } from '../utils/filterProjectsByTypeChecking'
import { PROJECTS_COLLECTION } from './collection'
import { ProjectEntity } from '../project.entity'
import { getDocs } from 'firebase/firestore'

export async function fetchProjects(): Promise<ProjectEntity[]> {
  const projectDocs = await getDocs<unknown>(PROJECTS_COLLECTION)
  const projects = projectDocs.docs.map(doc => doc.data())
  const filteredProjects = filterProjectsByTypeChecking(projects)
  return filteredProjects
}