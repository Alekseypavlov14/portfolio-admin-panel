import { checkAdminType, AdminEntity } from "@entities/admins"
import { ADMIN_STORAGE_KEY } from "./const"
import { SessionStorage } from "@shared/utils/SessionStorage"

export class AdminStorage extends SessionStorage<AdminEntity> {
  getValue(): AdminEntity | null {
    try {
      const stringifiedAdmin = sessionStorage.getItem(this.key)
      if (!stringifiedAdmin) return null

      const admin = JSON.parse(stringifiedAdmin) as unknown

      if (checkAdminType(admin)) return admin
      
      return null
    } catch(e) {
      return null
    }
  }
}

export const adminStorage = new AdminStorage(ADMIN_STORAGE_KEY)