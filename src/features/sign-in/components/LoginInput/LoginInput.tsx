import { ChangeEvent, FC } from 'react'
import { loginSelector, updateLoginSelector, useSignInStore } from '@features/sign-in/store'
import { Input } from '@shared/components/Input'

interface LoginInputProps {
  className?: string
}

export const LoginInput: FC<LoginInputProps> = ({ className }) => {
  const login = useSignInStore(loginSelector)
  const updateLogin = useSignInStore(updateLoginSelector)

  function updateLoginHandler(e: ChangeEvent<HTMLInputElement>) {
    updateLogin(e.target.value.trim())
  }

  return (
    <Input 
      placeholder='Login...'
      className={className}
      onChange={updateLoginHandler}
      value={login}
    />
  )
}