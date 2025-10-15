import * as React from 'react'

export interface ModalProps extends React.DialogHTMLAttributes<HTMLDialogElement> {
  /** The node where the portal should mount */
  container: HTMLElement
  /** Modal content */
  children?: React.ReactNode
  /** Optional CSS class name for modal dialog */
  modalClassName?: string
  /** Optional CSS class name for modal header */
  headerClassName?: string
  /** Optional CSS class name for modal content */
  contentClassName?: string
  /** Called when the close button is clicked */
  onClose: () => void
  /** The title to display in the modal header */
  title: string
}
