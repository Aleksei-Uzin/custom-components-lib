import cx from 'classnames'
import { SelectProps } from './types'

import '../Color'
import styles from './Select.module.css'

export function Select({
  id,
  className,
  disabled = false,
  isRequired,
  label,
  labelProps,
  options,
  placeholder,
  value,
  onChange,
  ...rest
}: SelectProps) {
  const optionsClassNames = cx(
    styles.option,
    {
      [styles.disabled]: disabled,
    },
    className
  )

  return (
    <div className={styles.selectBox}>
      {label && (
        <label
          {...labelProps}
          htmlFor={id}
          className={cx(styles.label, { [styles.required]: !disabled && isRequired })}
        >
          {label}
        </label>
      )}
      <select
        id={id}
        className={cx('ui-select', styles.select)}
        disabled={disabled}
        onChange={onChange}
        value={value}
        {...rest}
      >
        {placeholder && (
          <option className={cx(styles.option, styles.placeholder)} value={placeholder.value || ''}>
            {placeholder.description}
          </option>
        )}
        {options.map(option => (
          <option
            key={option.value}
            className={optionsClassNames}
            disabled={option.disabled}
            value={option.value}
          >
            {option.description}
          </option>
        ))}
      </select>
    </div>
  )
}
