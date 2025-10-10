import * as React from 'react'

export interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** HTML attribute for binding input with label */
  id: string
  /** Optional CSS class names for styling */
  className?: string
  /** Whether the text field is disabled */
  disabled?: boolean
  /** If `true`, the input will be styled to indicate an error */
  error?: boolean
  /** Adds red asterisk after label */
  isRequired?: boolean
  /** Label for text field */
  label?: React.ReactNode
  /** HTML attributes for label */
  labelProps?: React.HTMLAttributes<HTMLLabelElement>
  /** Maximum number of characters allowed in the element */
  maxLength?: number
  /** text field placeholder */
  placeholder?: string
  /** The value of the text field */
  value?: string
  /** Optional change event handler */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  /** Optional focus event handler */
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void
  /** Optional blur event handler */
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void
}
