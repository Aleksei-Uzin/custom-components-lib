import { BaseLabel } from '../BaseLabel'
import { BaseInputProps } from './types'

export function BaseInput({
  id,
  boxClassName,
  labelClassName,
  inputClassName,
  isRequired,
  label,
  labelProps,
  onBlur,
  onChange,
  onFocus,
  type = 'text',
  value,
  ...rest
}: BaseInputProps) {
  return (
    <div className={boxClassName}>
      {label && (
        <BaseLabel className={labelClassName} id={id} isRequired={isRequired} {...labelProps}>
          {label}
        </BaseLabel>
      )}
      <input
        id={id}
        className={inputClassName}
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
