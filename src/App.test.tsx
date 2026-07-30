import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

describe('App', () => {
  it('does not show the demo banner initially', () => {
    render(<App />)
    expect(screen.queryByTestId('demo-banner')).not.toBeInTheDocument()
    expect(screen.getByTestId('active-sessions')).toHaveTextContent('1,284')
  })

  it('toggles the demo banner and bumps active sessions when "Launch demo" is clicked', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('button', { name: 'Launch demo' }))

    expect(screen.getByTestId('demo-banner')).toBeInTheDocument()
    expect(screen.getByTestId('active-sessions')).toHaveTextContent('1,334')
    expect(screen.getByRole('button', { name: 'Demo running' })).toHaveAttribute(
      'aria-pressed',
      'true',
    )

    await user.click(screen.getByRole('button', { name: 'Demo running' }))
    expect(screen.queryByTestId('demo-banner')).not.toBeInTheDocument()
  })

  it('launches the demo from the hero "Get started" button', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('button', { name: 'Get started' }))
    expect(screen.getByTestId('demo-banner')).toBeInTheDocument()
  })

  it('increments the duplicate count and active sessions each time "Duplicate section" is clicked', async () => {
    const user = userEvent.setup()
    render(<App />)

    const duplicateButton = screen.getByRole('button', { name: 'Duplicate section' })
    await user.click(duplicateButton)
    await user.click(duplicateButton)

    expect(screen.getByTestId('duplicate-status')).toHaveTextContent(
      'Section duplicated 2 times.',
    )
    expect(screen.getByTestId('active-sessions')).toHaveTextContent('1,308')
  })

  it('renders every feature card', () => {
    render(<App />)
    expect(screen.getByText('Clear hierarchy')).toBeInTheDocument()
    expect(screen.getByText('Motion with intent')).toBeInTheDocument()
    expect(screen.getByText('Responsive by default')).toBeInTheDocument()
  })
})
