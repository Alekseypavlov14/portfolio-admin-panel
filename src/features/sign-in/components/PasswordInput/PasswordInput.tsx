import { ChangeEvent, FC } from 'react'
import { useSignInStore, passwordSelector, updatePasswordSelector } from '@features/sign-in/store'
import { Input } from '@shared/components/Input'

interface PasswordInputProps {
  className?: string
}

export const PasswordInput: FC<PasswordInputProps> = ({ className }) => {
  const password = useSignInStore(passwordSelector)
  const updatePassword = useSignInStore(updatePasswordSelector)

  function updatePasswordHandler(e: ChangeEvent<HTMLInputElement>) {
    updatePassword(e.target.value.trim())
  }

  return (
    <Input 
      placeholder='Password...'
      className={className}
      onChange={updatePasswordHandler}
      value={password}
    />
  )
}