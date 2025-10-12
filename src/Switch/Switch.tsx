import { BaseInput } from '../BaseInput'
import { SwitchProps } from './types'
import cx from 'classnames'
import '../Color'
import styles from './Switch.module.css'

export function Switch({
  boxClassName,
  inputClassName,
  labelClassName,
  isRequired,
  color = 'primary',
  disabled,
  ...rest
}: SwitchProps) {
  const finalBoxClassNames = cx(
    styles.container,
    {
      [styles[color]]: true,
      [styles.disabled]: disabled,
    },
    boxClassName
  )
  const finalSwitchClassNames = cx(styles.switch, inputClassName)
  const finalLabelClassNames = cx(styles.label, labelClassName)

  return (
    <BaseInput
      boxClassName={finalBoxClassNames}
      color={color}
      disabled={disabled}
      isRequired={!disabled && isRequired}
      inputClassName={finalSwitchClassNames}
      labelClassName={finalLabelClassNames}
      type="checkbox"
      {...rest}
    />
  )
}
