import { type LabelProps } from '../Label'

export interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Checkbox primary color */
  color?: 'primary' | 'info' | 'success' | 'warning' | 'error'
  /** Optional CSS class name for surrounding div */
  boxClassName?: string
  /** Optional CSS class name for label */
  labelClassName?: string
  /** Optional CSS class name for input */
  inputClassName?: string
  /** Whether the input is disabled */
  disabled?: boolean
  /** Label for checkbox */
  label?: React.ReactNode
  /** The placement of the label */
  labelPosition?: 'top' | 'right' | 'bottom' | 'left'
  /** HTML attributes for label */
  labelProps?: Omit<LabelProps, 'id' | 'isRequired'>
  /** HTML attribute for binding input with label */
  id?: string
  /** Adds red asterisk after label */
  isRequired?: boolean
}
