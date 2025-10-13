import * as React from 'react'

export interface ModalProps {
  /** Modal content */
  children?: React.ReactNode
  /** Optional CSS class name for styling */
  className?: string
  /** Whether or not the modal is visible */
  isOpen: boolean
}
