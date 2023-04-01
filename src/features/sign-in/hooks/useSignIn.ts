import { loginSelector, passwordSelector, useSignInStore } from "../store"
import { updateAdminSelector, useAuthStore } from "@app/auth"
import { useHandleErrors } from "./useHandleErrors"
import { useCallback } from "react"
import { useAdmins } from "@entities/admins"

export function useSignIn() {
  const { admins } = useAdmins()

  const login = useSignInStore(loginSelector)
  const password = useSignInStore(passwordSelector)

  const isInvalid = useHandleErrors()

  const updateAdmin = useAuthStore(updateAdminSelector)

  return useCallback(() => {
    if (isInvalid()) return

    const candidate = admins.find(admin => (
      admin.login === login && 
      admin.password === password
    ))

    if (!candidate) return 
    
    updateAdmin(candidate)
  }, [admins, login, password])
}