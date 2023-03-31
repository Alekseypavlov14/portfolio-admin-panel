import { updateErrorsSelector, useSignInStore } from '../store'
import { SignInErrorReason } from '../types/SignInErrorReason'
import { errorsSelector } from './../store'

export function useClearErrorsByReason(reason: SignInErrorReason) {
  const errors = useSignInStore(errorsSelector)
  const updateErrors = useSignInStore(updateErrorsSelector)

  return () => updateErrors(errors.filter(error => error.reason !== reason))
}