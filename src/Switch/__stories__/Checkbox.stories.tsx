import type { Meta, StoryObj } from '@storybook/react-webpack5'
import { Switch } from '../Switch'

const meta = {
  component: Switch,
  title: 'Switch',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Switch>

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
