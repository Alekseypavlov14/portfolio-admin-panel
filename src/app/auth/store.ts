import { adminStorage } from "./storage"
import { AdminEntity } from "@entities/admins"
import { create } from "zustand"

interface AuthStore {
  admin: AdminEntity | null
  updateAdmin: (user: AdminEntity | null) => void
}

export const useAuthStore = create<AuthStore>((set) => ({
  admin: adminStorage.getValue(),
  updateAdmin(admin) {
    set((state) => ({ ...state, admin }))
    adminStorage.setValue(admin)
  },
}))

export const adminSelector = (store: AuthStore) => store.admin
export const updateAdminSelector = (store: AuthStore) => store.updateAdmin
