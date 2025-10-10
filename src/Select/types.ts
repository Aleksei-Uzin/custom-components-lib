import * as React from 'react'

export type FormSelectOption = {
  value: string
  description: React.ReactNode
  disabled?: boolean
  selected?: boolean
}

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  /** HTML attribute for binding select with label */
  id: string
  /** Optional CSS class names for styling */
  className?: string
  /** Whether the select is disabled */
  disabled?: boolean
  /** Adds red asterisk after label */
  isRequired?: boolean
  /** Label for select */
  label?: React.ReactNode
  /** HTML attributes for label */
  labelProps?: React.HTMLAttributes<HTMLLabelElement>
  /** Array of possible options */
  options: FormSelectOption[]
  /** select placeholder */
  placeholder?: FormSelectOption
  /** The value of the select */
  value?: string
  /** Optional change event handler */
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void
}
