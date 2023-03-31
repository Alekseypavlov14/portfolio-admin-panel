import { FC } from 'react'
import { PasswordInput } from '../PasswordInput'
import { SignInButton } from '../SignInButton'
import { LoginInput } from '../LoginInput'
import { H3, H4 } from '@shared/components/Text'
import styles from './SignInForm.module.css'

interface SignInFormProps {}

export const SignInForm: FC<SignInFormProps> = () => {
  return (
    <div className={styles.SignInForm}>
      <H3 className={styles.Title}>Sign in</H3>

      <div className={styles.FormSections}>
        <div className={styles.FormSection}>
          <H4 className={styles.Label}>Login</H4>
          <LoginInput />
        </div>
  
        <div className={styles.FormSection}>
          <H4 className={styles.Label}>Password</H4>
          <PasswordInput />
        </div>
      </div>

      <SignInButton />
    </div>
  )
}