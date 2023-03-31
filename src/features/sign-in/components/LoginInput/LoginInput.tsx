import { ChangeEvent, FC } from 'react'
import { loginSelector, updateLoginSelector, useSignInStore } from './../../store'
import { useClearErrorsByReason } from '../../hooks/useClearErrorsByReason'
import { useErrorByReason } from '@features/sign-in/hooks/useErrorByReason'
import { getClassNames } from '@shared/lib/getClassNames'
import { Input } from '@shared/components/Input'
import styles from './LoginInput.module.css'

interface LoginInputProps {
  className?: string
}

export const LoginInput: FC<LoginInputProps> = ({ className }) => {
  const login = useSignInStore(loginSelector)
  const updateLogin = useSignInStore(updateLoginSelector)

  const error = useErrorByReason('login')
  const clearErrors = useClearErrorsByReason('login')

  function updateLoginHandler(e: ChangeEvent<HTMLInputElement>) {
    updateLogin(e.target.value.trim())
  }

  const classNames = getClassNames(error && styles.LoginInputWithError, className)

  return (
    <>
      {error && (
        <div className={styles.ErrorMessage}>
          {error.message}
        </div>
      )}

      <Input 
        placeholder='Login...'
        className={classNames}
        onFocus={clearErrors}
        onChange={updateLoginHandler}
        value={login}
      />
    </>
  )
}