import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { Button } from '../Button'
import { ModalProps } from './types'
import cx from 'classnames'

import '../Color'
import styles from './Modal.module.css'

export const Modal: React.FC<ModalProps> = ({
  container,
  children,
  modalClassName,
  headerClassName,
  contentClassName,
  open: isOpen,
  onClose,
  title,
  ...rest
}) => {
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    if (isOpen) {
      dialogRef.current?.showModal()
    } else {
      dialogRef.current?.close()
    }
  }, [isOpen])

  const finalModalClassNames = cx(styles.modal, modalClassName)
  const finalHeaderClassNames = cx(styles.header, headerClassName)
  const finalContentClassNames = cx(styles.content, contentClassName)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    onClose()
  }

  if (!isOpen) return null

  return createPortal(
    <dialog ref={dialogRef} className={finalModalClassNames} onCancel={onClose} {...rest}>
      <header className={finalHeaderClassNames}>
        <span>{title}</span>
        <Button color="info" size="small" onClick={handleClick} variant="outlined">
          Close
        </Button>
      </header>
      <div className={finalContentClassNames}>{children}</div>
    </dialog>,
    container
  )
}
