import { type BaseInputProps } from '../BaseInput'

export interface CheckboxProps extends Omit<BaseInputProps, 'type' | 'placeholder'> {
  /** Used for control checked state */
  checked?: boolean
  /** Checkbox primary color */
  color?: 'primary' | 'info' | 'success' | 'warning' | 'error'
}
