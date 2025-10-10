import { useState, FocusEvent } from 'react'
import cx from 'classnames'
import { TextFieldProps } from './types'

import '../Color'
import styles from './TextField.module.css'

export function TextField({
  id,
  className,
  disabled,
  error,
  isRequired,
  label,
  labelProps,
  maxLength,
  placeholder = '',
  value = '',
  onChange,
  onFocus,
  onBlur,
  ...rest
}: TextFieldProps) {
  const [isFocused, setFocused] = useState(false)
  const hasFocus = isFocused

  const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
    setFocused(true)
    if (onFocus) {
      onFocus(e)
    }
  }

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    setFocused(false)
    if (onBlur) {
      onBlur(e)
    }
  }

  const textFieldClassNames = cx(
    'ui-text-field',
    styles.textField,
    {
      [styles.disabled]: disabled,
      [styles.textFieldFocused]: !error && hasFocus,
      [styles.textFieldError]: error,
    },
    className
  )

  const labelClassNames = cx('ui-text-field-label', styles.label, {
    [styles.required]: !disabled && isRequired,
    [styles.disabled]: disabled,
    [styles.labelFocused]: !error && hasFocus,
    [styles.labelError]: error,
  })

  return (
    <div className={styles.textFieldBox}>
      {label && (
        <label {...labelProps} htmlFor={id} className={labelClassNames}>
          {label}
        </label>
      )}
      <input
        id={id}
        className={textFieldClassNames}
        disabled={disabled}
        maxLength={maxLength}
        placeholder={placeholder}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        value={value}
        {...rest}
      />
    </div>
  )
}
