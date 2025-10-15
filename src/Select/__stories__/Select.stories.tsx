import type { Meta, StoryObj } from '@storybook/react-webpack5'
import { Select } from '../Select'
import { FormSelectOption } from '../types'

const options: FormSelectOption[] = [
  { value: 'typescript', children: 'TypeScript' },
  { value: 'javascript', children: 'JavaScript' },
  { value: 'python', children: 'Python' },
  { value: 'go', children: 'Go' },
  { value: 'rust', children: 'Rust', disabled: true },
]

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
    id: 'select-id',
    disabled: false,
    isRequired: true,
    label: 'Label will be displayed here',
    multiple: true,
    options,
  },
}
