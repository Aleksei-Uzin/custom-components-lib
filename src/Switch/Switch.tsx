import { Label } from '../Label'
import { SwitchProps } from './types'
import cx from 'classnames'
import '../Color'
import styles from './Switch.module.css'

export const Switch: React.FC<SwitchProps> = ({
  color = 'primary',
  boxClassName,
  inputClassName,
  labelClassName,
  disabled,
  label,
  labelPosition = 'left',
  labelProps,
  id,
  isRequired,
  ...rest
}) => {
  const colorClass = { [styles[color]]: true }
  const labelPositionClass = { [styles[labelPosition]]: true }
  const finalBoxClassNames = cx(styles.box, labelPositionClass, boxClassName)
  const finalSwitchClassNames = cx(styles.switch, colorClass, inputClassName)
  const finalLabelClassNames = cx(styles.label, colorClass, labelClassName)

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
      <input
        type="checkbox"
        className={finalSwitchClassNames}
        disabled={disabled}
        id={id}
        {...rest}
      />
    </div>
  )
}
