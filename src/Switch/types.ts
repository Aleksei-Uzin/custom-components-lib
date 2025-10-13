import { type BaseInputProps } from '../BaseInput'

export interface SwitchProps extends Omit<BaseInputProps, 'type' | 'placeholder'> {
  /** Used for control checked state */
  checked?: boolean
  /** Checkbox primary color */
  color?: 'primary' | 'info' | 'success' | 'warning' | 'error'
  /** The placement of the label */
  labelPosition?: 'top' | 'right' | 'bottom' | 'left'
}
