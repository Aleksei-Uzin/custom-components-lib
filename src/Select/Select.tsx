import { Label } from '../Label'
import cx from 'classnames'
import { SelectProps } from './types'

import '../Color'
import styles from './Select.module.css'

export function Select({
  boxClassName,
  labelClassName,
  selectClassName,
  disabled,
  label,
  labelProps,
  id,
  isRequired,
  options,
  placeholder,
  ...rest
}: SelectProps) {
  const finalBoxClassNames = cx(styles.box, boxClassName)
  const finalSelectClassNames = cx(styles.select, selectClassName)
  const finalLabelClassNames = cx(styles.label, labelClassName)

  return (
    <div className={finalBoxClassNames}>
      {label && (
        <Label
          className={finalLabelClassNames}
          htmlFor={id}
          isRequired={!disabled && isRequired}
          {...labelProps}
        >
          {label}
        </Label>
      )}
      <select id={id} className={finalSelectClassNames} disabled={disabled} {...rest}>
        {placeholder && (
          <option {...placeholder} className={cx(styles.option, placeholder.className)}>
            {placeholder.children}
          </option>
        )}
        {options.map(({ children, className, value, ...rest }) => (
          <option key={value} className={cx(styles.option, className)} value={value} {...rest}>
            {children}
          </option>
        ))}
      </select>
    </div>
  )
}
