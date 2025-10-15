import type { Meta, StoryObj } from '@storybook/react-webpack5'
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
    color: 'primary',
    disabled: false,
    id: 'textfield-id',
    label: 'Label will be displayed here',
    placeholder: 'What’s on your mind?',
  },
}
