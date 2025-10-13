import cx from 'classnames'
import { Button } from '../../Button'
import { ModalHeaderProps } from './types'
import styles from './ModalHeader.module.css'

export const ModalHeader = ({ children, className, onClose }: ModalHeaderProps) => {
  const finalHeaderClassNames = cx(styles.modalHeader, className)

  return (
    <div className={finalHeaderClassNames}>
      <span>{children}</span>
      <Button color="info" size="small" onClick={onClose} variant="outlined">
        Close
      </Button>
    </div>
  )
}
