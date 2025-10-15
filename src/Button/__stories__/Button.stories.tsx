import type { Meta, StoryObj } from '@storybook/react-webpack5'
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
    className: 'ui-button',
    children: 'Button',
    color: 'primary',
    fullWidth: false,
    size: 'medium',
    variant: 'outlined',
    disabled: true,
  },
}
