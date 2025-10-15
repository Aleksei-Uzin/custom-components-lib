export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Optional CSS class names for styling */
  className?: string
  /** The text or content to display inside the button */
  children: React.ReactNode
  /** Button primary color */
  color?: 'primary' | 'info' | 'success' | 'warning' | 'error'
  /**	If true, the button will take up the full width of its container */
  fullWidth?: boolean
  /** Sets the size of the button */
  size?: 'small' | 'medium' | 'large'
  /** The variant to use */
  variant?: 'contained' | 'outlined' | 'text'
}
