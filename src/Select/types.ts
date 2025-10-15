import * as React from 'react'

export interface FormSelectOption extends React.OptionHTMLAttributes<HTMLOptionElement> {
  /** The text or content to display inside the option */
  children: React.ReactNode
  /** The value of the option */
  value: string
}

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  /** Optional CSS class name for surrounding div */
  boxClassName?: string
  /** Optional CSS class name for label */
  labelClassName?: string
  /** Optional CSS class name for input */
  selectClassName?: string
  /** Whether the select is disabled */
  disabled?: boolean
  /** Label for select */
  label?: React.ReactNode
  /** HTML attributes for label */
  labelProps?: React.HTMLAttributes<HTMLLabelElement>
  /** HTML attribute for binding select with label */
  id: string
  /** Adds red asterisk after label */
  isRequired?: boolean
  /** Array of possible options */
  options: FormSelectOption[]
  /** select placeholder */
  placeholder?: FormSelectOption
}
