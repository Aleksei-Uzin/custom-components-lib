import { useState, FocusEvent } from 'react'
import cx from 'classnames'
import { BaseInput } from '../BaseInput'
import { TextFieldProps } from './types'
import '../Color'
import styles from './TextField.module.css'

export function TextField({
  error,
  id,
  labelClassName,
  inputClassName,
  disabled,
  isRequired,
  onBlur,
  onFocus,
  ...rest
}: TextFieldProps) {
  const [isFocused, setFocused] = useState(false)

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

  const inputClassNames = cx(
    'ui-text-field',
    styles.textField,
    {
      [styles.disabled]: disabled,
      [styles.textFieldFocused]: !error && isFocused,
      [styles.textFieldError]: error,
    },
    inputClassName
  )

  const labelClassNames = cx('ui-text-field-label', {
    [styles.disabled]: disabled,
    [styles.labelFocused]: !error && isFocused,
    [styles.labelError]: error,
    labelClassName,
  })

  return (
    <BaseInput
      id={id}
      isRequired={!disabled && isRequired}
      inputClassName={inputClassNames}
      labelClassName={labelClassNames}
      onBlur={handleBlur}
      onFocus={handleFocus}
      {...rest}
    />
  )
}
