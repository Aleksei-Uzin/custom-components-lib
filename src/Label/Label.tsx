import cx from 'classnames'
import { LabelProps } from './types'
import '../Color'
import styles from './Label.module.css'

export function Label({ children, className, isRequired, ...rest }: LabelProps) {
  const finalClassNames = cx(styles.label, { [styles.required]: isRequired }, className)

  return (
    <label className={finalClassNames} {...rest}>
      {children}
    </label>
  )
}
