import { Label } from '../Label'
import cx from 'classnames'
import { TextFieldProps } from './types'
import '../Color'
import styles from './TextField.module.css'

export const TextField: React.FC<TextFieldProps> = ({
  color = 'primary',
  boxClassName,
  inputClassName,
  labelClassName,
  disabled,
  label,
  labelProps,
  id,
  isRequired,
  ...rest
}) => {
  const colorClass = { [styles[color]]: true }
  const finalBoxClassNames = cx(styles.box, boxClassName)
  const finalTextFieldClassNames = cx(styles.textField, colorClass, inputClassName)
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
        type="text"
        className={finalTextFieldClassNames}
        disabled={disabled}
        id={id}
        {...rest}
      />
    </div>
  )
}
