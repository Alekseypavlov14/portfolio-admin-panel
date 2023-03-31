import clsx, { ClassValue } from 'clsx'

export function getClassNames(...classNames: ClassValue[]) {
  return clsx(...classNames)
}