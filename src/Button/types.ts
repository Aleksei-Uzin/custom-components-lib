import { SharedBasic } from '../utils'

export interface ButtonProps extends SharedBasic {
  /** Button primary color */
  color?: 'primary' | 'info' | 'success' | 'warning' | 'error'
  /** Whether the button is disabled */
  disabled?: boolean
  /**	If true, the button will take up the full width of its container */
  fullWidth?: boolean
  /** Loading state */
  loading?: boolean
  /** Optional click event handle */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  /** Sets the size of the button */
  size?: 'small' | 'medium' | 'large'
  /** The type of the button */
  type?: 'button' | 'submit' | 'reset'
  /** The variant to use */
  variant?: 'contained' | 'outlined' | 'text'
}
