import { BaseLabel } from '../BaseLabel'
import { BaseInputProps } from './types'
import cx from 'classnames'
import styles from './BaseInput.module.css'

export function BaseInput({
  id,
  boxClassName,
  labelClassName,
  inputClassName,
  disabled,
  isRequired,
  label,
  labelProps,
  onBlur,
  onChange,
  onFocus,
  placeholder,
  value,
  ...rest
}: BaseInputProps) {
  return (
    <div className={cx(styles.inputBox, boxClassName)}>
      {label && (
        <BaseLabel className={labelClassName} id={id} isRequired={isRequired} {...labelProps}>
          {label}
        </BaseLabel>
      )}
      <input
        id={id}
        className={inputClassName}
        disabled={disabled}
        onBlur={onBlur}
        onChange={onChange}
        onFocus={onFocus}
        placeholder={placeholder}
        value={value}
        {...rest}
      />
    </div>
  )
}
