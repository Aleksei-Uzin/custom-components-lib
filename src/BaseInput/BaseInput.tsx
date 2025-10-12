import { BaseLabel } from '../BaseLabel'
import { BaseInputProps } from './types'
import cx from 'classnames'
import styles from './BaseInput.module.css'

export function BaseInput({
  id,
  color = 'primary',
  boxClassName,
  labelClassName,
  inputClassName,
  isRequired,
  label,
  labelProps,
  labelPosition = 'left',
  onBlur,
  onChange,
  onFocus,
  type = 'text',
  value,
  ...rest
}: BaseInputProps) {
  const finalBoxClassNames = cx(styles.container, { [styles[labelPosition]]: true }, boxClassName)
  const finalInputClassNames = cx(styles.input, inputClassName)
  const finalLabelClassNames = cx(styles.label, labelClassName)

  return (
    <div className={finalBoxClassNames}>
      {label && (
        <BaseLabel
          className={finalLabelClassNames}
          color={color}
          id={id}
          isRequired={isRequired}
          {...labelProps}
        >
          {label}
        </BaseLabel>
      )}
      <input
        id={id}
        className={finalInputClassNames}
        onBlur={onBlur}
        onChange={onChange}
        onFocus={onFocus}
        type={type}
        value={value}
        {...rest}
      />
    </div>
  )
}
