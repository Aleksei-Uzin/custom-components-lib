import type { Meta, StoryObj } from '@storybook/react-webpack5'
import { fn } from 'storybook/test'
import { Button } from '../Button'

const meta = {
  component: Button,
  title: 'Button',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Preview: Story = {
  render: args => (
    <div style={{ display: 'flex', justifyContent: 'center', width: '200px' }}>
      <Button {...args}>Button</Button>
    </div>
  ),
  args: {
    children: 'Button',
    color: 'primary',
    disabled: false,
    fullWidth: false,
    loading: false,
    size: 'medium',
    type: 'button',
    variant: 'text',
    onClick: fn(),
  },
}
