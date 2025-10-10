import type { Meta, StoryObj } from '@storybook/react-webpack5'
import { fn } from 'storybook/test'
import { TextField } from '../TextField'

const meta = {
  component: TextField,
  title: 'TextField',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof TextField>

export default meta
type Story = StoryObj<typeof meta>

export const Preview: Story = {
  args: {
    id: 'app-id',
    disabled: false,
    error: false,
    isRequired: false,
    label: 'Label',
    maxLength: 20,
    placeholder: 'Type your text here',
    value: '',
    onChange: fn(),
  },
}
