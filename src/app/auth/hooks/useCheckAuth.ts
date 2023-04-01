import { adminSelector, useAuthStore } from "../store"

export function useCheckAuth() {
  const admin = useAuthStore(adminSelector)
  return Boolean(admin)
}