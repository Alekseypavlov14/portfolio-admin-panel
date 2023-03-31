import { checkProjectType } from "./checkProjectType"
import { ProjectEntity } from '../project.entity'

export function filterProjectsByTypeChecking(projects: unknown[]): ProjectEntity[] {
  return projects.filter(checkProjectType)
}
