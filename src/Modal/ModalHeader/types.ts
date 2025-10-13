import * as React from 'react'

export interface ModalHeaderProps {
  /** Optional modal title */
  children?: React.ReactNode
  /** Optional CSS class name for styling */
  className?: string
  /** Called when the close button is clicked */
  onClose?: () => void
  /** Modal title */
  title?: string
}
