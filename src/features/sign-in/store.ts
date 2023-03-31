import { create } from "zustand"
import { SignInError } from "./types/SignInError"

interface SignInStore {
  login: string
  password: string
  errors: SignInError[]
  updateLogin: (login: string) => void
  updatePassword: (password: string) => void
  updateErrors: (errors: SignInError[]) => void
}

export const useSignInStore = create<SignInStore>((set) => ({
  login: '',
  password: '',
  errors: [],
  updateLogin(login) {
    set((state) => ({ ...state, login }))
  },
  updatePassword(password) {
    set((state) => ({ ...state, password }))
  },
  updateErrors(errors) {
    set((state) => ({ ...state, errors }))
  },
}))

export const loginSelector = (store: SignInStore) => store.login
export const passwordSelector = (store: SignInStore) => store.password
export const errorsSelector = (store: SignInStore) => store.errors
export const updateLoginSelector = (store: SignInStore) => store.updateLogin
export const updatePasswordSelector = (store: SignInStore) => store.updatePassword
export const updateErrorsSelector = (store: SignInStore) => store.updateErrors