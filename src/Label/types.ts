export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  /** Label for input element */
  children: React.ReactNode
  /** Adds red asterisk after label */
  isRequired?: boolean
}
