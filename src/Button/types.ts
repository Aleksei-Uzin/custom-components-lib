export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** The text or content to display inside the button */
  children: React.ReactNode
  /** Optional CSS class names for styling */
  className?: string
}
