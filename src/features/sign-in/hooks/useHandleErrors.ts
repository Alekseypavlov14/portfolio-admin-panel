import { loginSelector, passwordSelector, updateErrorsSelector, useSignInStore } from "../store"
import { emptyLoginError, emptyPasswordError, shortLoginError, shortPasswordError } from "../core/errors"
import { SignInError } from "../types/SignInError"
import { useCallback } from "react"

export function useHandleErrors() {
  const login = useSignInStore(loginSelector)
  const password = useSignInStore(passwordSelector)
  const updateErrors = useSignInStore(updateErrorsSelector)

  return useCallback(() => {
    const errors: SignInError[] = []

    if (!login.length) errors.push(emptyLoginError)
    if (!password.length) errors.push(emptyPasswordError)
    if (!(login.length >= 6) && login.length > 0) errors.push(shortLoginError)
    if (!(password.length >= 6) && password.length > 0) errors.push(shortPasswordError)

    if (!errors.length) return false

    updateErrors(errors)
    return true
  }, [login, password])
}