import { type BaseInputProps } from '../BaseInput'

export interface TextFieldProps extends Omit<BaseInputProps, 'labelPosition'> {
  /** If `true`, the input will be styled to indicate an error */
  error?: boolean
  /** Maximum number of characters allowed in the element */
  maxLength?: number
  /** Optional text field placeholder */
  placeholder?: string
}
