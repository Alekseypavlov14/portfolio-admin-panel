import { FC } from 'react'
import styles from './Logo.module.css'
import logo from './logo.svg'

interface LogoProps {}

export const Logo: FC<LogoProps> = () => {
  return (
    <img 
      className={styles.Logo}
      src={logo} 
      alt='ALEX' 
    />
  )
}