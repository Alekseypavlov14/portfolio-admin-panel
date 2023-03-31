import { create } from "zustand"

interface SignInStore {
  login: string
  password: string
  updateLogin: (login: string) => void
  updatePassword: (password: string) => void
}

export const useSignInStore = create<SignInStore>((set) => ({
  login: '',
  password: '',
  updateLogin(login) {
    set((state) => ({ ...state, login }))
  },
  updatePassword(password) {
    set((state) => ({ ...state, password }))
  },
}))

export const loginSelector = (store: SignInStore) => store.login
export const passwordSelector = (store: SignInStore) => store.password
export const updateLoginSelector = (store: SignInStore) => store.updateLogin
export const updatePasswordSelector = (store: SignInStore) => store.updatePassword