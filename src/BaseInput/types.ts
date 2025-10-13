import { type BaseLabelProps } from '../BaseLabel'

export interface BaseInputProps {
  /** HTML attribute for binding input with label */
  id?: string
  /** Optional CSS class name for surrounding div */
  boxClassName?: string
  /** Optional CSS class name for label */
  labelClassName?: string
  /** Optional CSS class name for input */
  inputClassName?: string
  /** Input primary color */
  color?: 'primary' | 'info' | 'success' | 'warning' | 'error'
  /** Whether the input is disabled */
  disabled?: boolean
  /** Adds red asterisk after label */
  isRequired?: boolean
  /** Label for text field */
  label?: React.ReactNode
  /** HTML attributes for label */
  labelProps?: BaseLabelProps
  /** Optional blur event handler */
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void
  /** Optional change event handler */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  /** Optional focus event handler */
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void
  /** The placement of the label */
  labelPosition?: 'top' | 'right' | 'bottom' | 'left'
  /** The input available types */
  type?: 'checkbox' | 'radio' | 'text'
  /** The value of the text field */
  value?: string
}
