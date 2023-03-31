import { FC } from 'react'
import { PasswordInput } from '../PasswordInput'
import { SignInButton } from '../SignInButton'
import { LoginInput } from '../LoginInput'
import { H3 } from '@shared/components/Text'
import styles from './SignInForm.module.css'

interface SignInFormProps {}

export const SignInForm: FC<SignInFormProps> = () => {
  return (
    <form className={styles.SignInForm}>
      <H3 className={styles.Title}>Sign in</H3>

      <div className={styles.FormSections}>
        <div className={styles.FormSection}>
          <div className={styles.Label}>Login</div>
          <LoginInput />
        </div>
  
        <div className={styles.FormSection}>
          <div className={styles.Label}>Password</div>
          <PasswordInput />
        </div>
      </div>

      <SignInButton />
    </form>
  )
}