import type { Meta, StoryObj } from '@storybook/react-webpack5'
import { Checkbox } from '../Checkbox'

const meta = {
  component: Checkbox,
  title: 'Checkbox',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Preview: Story = {
  args: {
    id: 'app-id',
    disabled: false,
    isRequired: false,
    label: 'Ready to get started?',
    labelPosition: 'right',
    value: 'yes',
  },
}
