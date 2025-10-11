import cx from 'classnames'
import { BaseLabelProps } from './types'
import styles from './BaseLabel.module.css'

export function BaseLabel({ children, className, id, isRequired, ...rest }: BaseLabelProps) {
  const finalClassNames = cx(styles.label, { [styles.required]: isRequired }, className)

  return (
    <label className={finalClassNames} htmlFor={id} {...rest}>
      {children}
    </label>
  )
}
