import { FC } from 'react'
import { useSignIn } from '@features/sign-in/hooks/useSignIn'
import { Button } from '@shared/components/Button'
import styles from './SignInButton.module.css'

interface SignInButtonProps {}

export const SignInButton: FC<SignInButtonProps> = () => {
  const signIn = useSignIn()

  return (
    <Button 
      className={styles.SignInButton}
      onClick={signIn}
    >
      Sign in
    </Button>
  )
}