import { SignInError } from "../types/SignInError"

export const emptyLoginError: SignInError = {
  message: 'Login is empty',
  reason: 'login'
}

export const emptyPasswordError: SignInError = {
  message: 'Password is empty',
  reason: 'password'
}

export const shortLoginError: SignInError = {
  message: 'Login is short, min 6 characters',
  reason: 'login'
}

export const shortPasswordError: SignInError = {
  message: 'Password is short, min 6 characters',
  reason: 'password'
}