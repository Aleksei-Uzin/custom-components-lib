import type { Meta, StoryObj } from '@storybook/react-webpack5'
import { fn } from 'storybook/test'
import { Select } from '../Select'
import { FormSelectOption } from '../types'

const options: FormSelectOption[] = [
  { value: 'option1', description: 'Option 1' },
  { value: 'option2', description: 'Option 2' },
  { value: 'option3', description: 'Option 3', disabled: true },
]

const placeholder: FormSelectOption = { value: 'default value', description: 'Default option' }

const meta = {
  component: Select,
  title: 'Select',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

export const Preview: Story = {
  args: {
    id: 'app-id',
    disabled: false,
    isRequired: false,
    label: 'Label',
    multiple: true,
    value: 'default value',
    onChange: fn(),
    options,
    placeholder,
  },
}
