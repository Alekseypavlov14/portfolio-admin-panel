import { loginSelector, passwordSelector, useSignInStore } from "../store"
import { useHandleErrors } from "./useHandleErrors"
import { useCallback } from "react"
import { useAdmins } from "@entities/admins"

export function useSignIn() {
  const { admins } = useAdmins()

  const login = useSignInStore(loginSelector)
  const password = useSignInStore(passwordSelector)

  const isInvalid = useHandleErrors()

  return useCallback(() => {
    if (isInvalid()) return

    const candidate = admins.find(admin => (
      admin.login === login && 
      admin.password === password
    ))

    if (!candidate) return 
    
    // TODO: update auth state
  }, [admins, login, password])
}