import { type BaseInputProps } from '../BaseInput'

export interface CheckboxProps extends Omit<BaseInputProps, 'type' | 'placeholder'> {
  /** Checkbox primary color */
  color?: 'primary' | 'info' | 'success' | 'warning' | 'error'
  /** The placement of the label */
  labelPosition?: 'top' | 'right' | 'bottom' | 'left'
}
