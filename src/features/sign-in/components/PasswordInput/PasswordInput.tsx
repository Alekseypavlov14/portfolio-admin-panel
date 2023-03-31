import { ChangeEvent, FC } from 'react'
import { useSignInStore, passwordSelector, updatePasswordSelector } from './../../store'
import { useClearErrorsByReason } from '../../hooks/useClearErrorsByReason'
import { useErrorByReason } from '@features/sign-in/hooks/useErrorByReason'
import { getClassNames } from '@shared/lib/getClassNames'
import { Input } from '@shared/components/Input'
import styles from './PasswordInput.module.css'

interface PasswordInputProps {
  className?: string
}

export const PasswordInput: FC<PasswordInputProps> = ({ className }) => {
  const password = useSignInStore(passwordSelector)
  const updatePassword = useSignInStore(updatePasswordSelector)

  const error = useErrorByReason('password')
  const clearErrors = useClearErrorsByReason('password')

  function updatePasswordHandler(e: ChangeEvent<HTMLInputElement>) {
    updatePassword(e.target.value.trim())
  }

  const classNames = getClassNames(error && styles.PasswordInputWithError, className)

  return (
    <>
      {error && (
        <div className={styles.ErrorMessage}>
          {error.message}
        </div>
      )}

      <Input 
        placeholder='Password...'
        className={classNames}
        onFocus={clearErrors}
        onChange={updatePasswordHandler}
        value={password}
      />
    </>
  )
}