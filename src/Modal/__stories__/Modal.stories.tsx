import { useRef, useState } from 'react'
import type { Meta } from '@storybook/react-webpack5'
import { Button } from '../../Button'
import { Modal } from '../Modal'

export const ModalStory = () => {
  const [isOpen, setOpen] = useState(false)
  const divRef = useRef<HTMLDivElement>(null!)

  return (
    <div
      ref={divRef}
      style={{
        width: '600px',
        height: '600px',
      }}
    >
      <div>
        <Button color="info" onClick={() => setOpen(true)} size="large" variant="contained">
          Open Modal
        </Button>
      </div>
      <Modal container={divRef.current} open={isOpen} onClose={() => setOpen(false)} title="Log In">
        <form>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              paddingBottom: '1rem',
            }}
          >
            <label htmlFor="email">Email address:</label>
            <input id="email" type="email" />
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              paddingBottom: '1rem',
            }}
          >
            <label htmlFor="password">Password:</label>
            <input id="password" type="password" />
          </div>
          <Button
            color="info"
            fullWidth={true}
            onClick={e => {
              e.preventDefault()
              setOpen(false)
            }}
            size="small"
            type="submit"
            variant="contained"
          >
            Log In
          </Button>
        </form>
      </Modal>
    </div>
  )
}

const meta = {
  component: Modal,
  title: 'Modal',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: { open: false },
} satisfies Meta<typeof Modal>

export default meta
