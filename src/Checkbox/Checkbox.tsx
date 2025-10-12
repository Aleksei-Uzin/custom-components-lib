import { BaseInput } from '../BaseInput'
import { CheckboxProps } from './types'
import cx from 'classnames'
import '../Color'
import styles from './Checkbox.module.css'

export function Checkbox({
  boxClassName,
  inputClassName,
  labelClassName,
  isRequired,
  color = 'primary',
  disabled,
  ...rest
}: CheckboxProps) {
  const finalBoxClassNames = cx(
    styles.container,
    {
      [styles[color]]: true,
      [styles.disabled]: disabled,
    },
    boxClassName
  )
  const finalCheckboxClassNames = cx(styles.checkbox, inputClassName)
  const finalLabelClassNames = cx(styles.label, labelClassName)

  return (
    <BaseInput
      boxClassName={finalBoxClassNames}
      color={color}
      disabled={disabled}
      isRequired={!disabled && isRequired}
      inputClassName={finalCheckboxClassNames}
      labelClassName={finalLabelClassNames}
      type="checkbox"
      {...rest}
    />
  )
}
