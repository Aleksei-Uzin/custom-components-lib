import { ButtonProps } from './types'
import cx from 'classnames'
import '../Color'
import styles from './Button.module.css'

export const Button = ({
  className,
  children,
  color = 'primary',
  fullWidth,
  size = 'medium',
  variant = 'outlined',
  ...rest
}: ButtonProps) => {
  const finalClassNames = cx(
    'ui-button',
    {
      [styles.button]: true,
      [styles[color]]: color,
      [styles.fullWidth]: fullWidth,
      [styles[size]]: size,
      [styles[variant]]: variant,
    },
    className
  )

  return (
    <button className={finalClassNames} {...rest}>
      {children}
    </button>
  )
}
