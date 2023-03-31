import { AdminEntity } from "../admin.entity"

export function checkAdminType(admin: unknown): admin is AdminEntity {
  const typedAdmin = admin as AdminEntity

  return (
    Boolean(typedAdmin.id) &&
    Boolean(typedAdmin.login) && 
    Boolean(typedAdmin.password)
  )
}