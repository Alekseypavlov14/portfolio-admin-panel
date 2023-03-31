import { errorsSelector, useSignInStore } from "../store"
import { SignInErrorReason } from "../types/SignInErrorReason"
import { SignInError } from "../types/SignInError"

export function useErrorByReason(reason: SignInErrorReason): SignInError | undefined {
  const errors = useSignInStore(errorsSelector)
  const error = errors.find(error => error.reason === reason)
  return error
}