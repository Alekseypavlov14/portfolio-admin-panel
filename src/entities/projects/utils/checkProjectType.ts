import { ProjectEntity } from './../project.entity'

export function checkProjectType(project: unknown): project is ProjectEntity {
  const typedProject = (project as ProjectEntity)

  return (
    Boolean(typedProject.id) &&
    Boolean(typedProject.name) &&
    Boolean(typedProject.description) &&
    Boolean(typedProject.link) &&
    Boolean(typedProject.repository) &&
    Boolean(typedProject.technologies) &&
    Boolean(typedProject.date)
  )
}