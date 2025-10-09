import { ButtonProps } from './types'

export function Button({ children, className }: ButtonProps) {
  return <button className={className}>{children}</button>
}
