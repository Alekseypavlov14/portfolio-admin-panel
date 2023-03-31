import { AdminEntity } from "../admin.entity"
import { checkAdminType } from "./checkAdminType"

export function filterAdminsByTypeChecking(admins: unknown[]): AdminEntity[] {
  return admins.filter(checkAdminType)
}