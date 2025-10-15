import cx from 'classnames'
import { LabelProps } from './types'
import '../Color'
import styles from './Label.module.css'

export const Label: React.FC<LabelProps> = ({ children, className, isRequired, ...rest }) => {
  const finalClassNames = cx(styles.label, { [styles.required]: isRequired }, className)

  return (
    <label className={finalClassNames} {...rest}>
      {children}
    </label>
  )
}
