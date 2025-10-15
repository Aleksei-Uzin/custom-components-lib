import { Label } from '../Label'
import { CheckboxProps } from './types'
import cx from 'classnames'
import '../Color'
import styles from './Checkbox.module.css'

export const Checkbox: React.FC<CheckboxProps> = ({
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
  const finalCheckboxClassNames = cx(styles.checkbox, colorClass, inputClassName)
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
        className={finalCheckboxClassNames}
        disabled={disabled}
        id={id}
        {...rest}
      />
    </div>
  )
}
