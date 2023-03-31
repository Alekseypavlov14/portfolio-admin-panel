import { loginSelector, passwordSelector, useSignInStore } from "../store"
import { useCallback } from "react"
import { useAdmins } from "@entities/admins"

export function useSignIn() {
  const { admins } = useAdmins()

  const login = useSignInStore(loginSelector)
  const password = useSignInStore(passwordSelector)

  const signInHandler = useCallback(() => {
    const candidate = admins.find(admin => (
      admin.login === login && 
      admin.password === password
    ))

    if (!candidate) return 

    // TODO: update auth state
  }, [admins])

  return signInHandler
}