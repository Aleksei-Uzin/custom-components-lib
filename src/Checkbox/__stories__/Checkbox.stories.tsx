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
    color: 'primary',
    disabled: false,
    id: 'checkbox-id',
    label: 'Label will be displayed here',
  },
}
