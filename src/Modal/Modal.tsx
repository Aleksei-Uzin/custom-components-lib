import cx from 'classnames'
import { ModalHeader } from './ModalHeader'
import { ModalProps } from './types'
import '../Color'
import styles from './Modal.module.css'

export function Modal({ children, className, isOpen }: ModalProps) {
  const finalModalClassNames = cx(
    styles.modal,
    {
      [styles.displayBlock]: isOpen,
      [styles.displayNone]: !isOpen,
    },
    className
  )

  return (
    <div className={finalModalClassNames}>
      <div className={styles.modalContent}>{children}</div>
    </div>
  )
}

Modal.Header = ModalHeader
