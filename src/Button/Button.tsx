import { ButtonProps } from './types'
import cx from 'classNames'

export function Button({
  children,
  className,
  color = 'primary',
  disabled,
  fullWidth,
  loading,
  onClick,
  size = 'medium',
  style,
  type = 'button',
  variant = 'text',
  ...props
}: ButtonProps) {
  const finalClassNames = cx(
    'ui-button',
    {
      // [styles.button]: true,
      // [styles[color]]: true,
      // [styles.disabled]: disabled,
      // [styles.fullWidth]: fullWidth,
      // [styles[size]]: true,
      // [styles[variant]]: true,
    },
    className
  )

  return (
    <button
      className={finalClassNames}
      disabled={disabled || loading}
      onClick={onClick}
      style={style}
      type={type}
      {...props}
    >
      {children}
    </button>
  )
}
