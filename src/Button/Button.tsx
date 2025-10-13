import { ButtonProps } from './types'
import cx from 'classnames'
import '../Color'
import styles from './Button.module.css'

export function Button({
  children,
  className,
  color = 'primary',
  disabled,
  fullWidth,
  loading,
  onClick,
  size = 'medium',
  type = 'button',
  variant = 'text',
  ...props
}: ButtonProps) {
  const finalClassNames = cx(
    'ui-button',
    {
      [styles.button]: true,
      [styles[color]]: true,
      [styles.disabled]: disabled || loading,
      [styles.fullWidth]: fullWidth,
      [styles[size]]: true,
      [styles[variant]]: true,
    },
    className
  )

  return (
    <button
      className={finalClassNames}
      disabled={disabled || loading}
      onClick={onClick}
      type={type}
      {...props}
    >
      {children}
    </button>
  )
}
