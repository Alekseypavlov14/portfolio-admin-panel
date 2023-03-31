import { FC, ReactNode } from 'react'
import { NavLink as ReactNavLink } from 'react-router-dom'
import { getClassNames } from '@shared/lib/getClassNames'
import { H6 } from '@shared/components/Text'
import styles from './NavLink.module.css'

interface NavLinkProps {
  to: string
  children: ReactNode
  className?: string 
  onClick?: () => void
}

interface ClassNameProps {
  isActive: boolean
  isPending: boolean
}

export const NavLink: FC<NavLinkProps> = ({ to, children, className, onClick }) => {
  function calculateClassNames(props: ClassNameProps) {
    return getClassNames(styles.NavLink, props.isActive && styles.ActiveNavLink, className)
  }

  function clickHandler() {
    if (onClick) onClick()
  }

  return (
    <ReactNavLink 
      className={calculateClassNames}
      onClick={clickHandler} 
      to={to}
    >
      <H6>{children}</H6>
    </ReactNavLink>
  )
}