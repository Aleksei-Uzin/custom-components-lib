import * as React from 'react'

export interface BaseLabelProps {
  /** Label for input element */
  children: React.ReactNode
  /** Optional CSS class name for styling */
  className?: string
  /** Label primary color */
  color?: 'primary' | 'info' | 'success' | 'warning' | 'error'
  /** HTML attribute for binding input with label */
  id?: string
  /** Adds red asterisk after label */
  isRequired?: boolean
}
