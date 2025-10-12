import cx from 'classnames'
import { BaseLabelProps } from './types'
import '../Color'
import styles from './BaseLabel.module.css'

export function BaseLabel({
  children,
  className,
  color = 'primary',
  id,
  isRequired,
  ...rest
}: BaseLabelProps) {
  const finalClassNames = cx(
    styles.label,
    {
      [styles[color]]: true,
      [styles.required]: isRequired,
    },
    className
  )

  return (
    <label className={finalClassNames} htmlFor={id} {...rest}>
      {children}
    </label>
  )
}
