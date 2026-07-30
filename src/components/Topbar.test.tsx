import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Topbar } from './Topbar'
import { navLinks } from '../data/content'

describe('Topbar', () => {
  it('renders the brand and all nav links', () => {
    render(<Topbar navLinks={navLinks} demoLaunched={false} onLaunchDemo={vi.fn()} />)

    expect(screen.getByText('Nova UI')).toBeInTheDocument()
    for (const link of navLinks) {
      expect(screen.getByRole('link', { name: link.label })).toHaveAttribute('href', link.href)
    }
  })

  it('shows "Launch demo" when not launched and calls onLaunchDemo on click', async () => {
    const user = userEvent.setup()
    const onLaunchDemo = vi.fn()
    render(<Topbar navLinks={navLinks} demoLaunched={false} onLaunchDemo={onLaunchDemo} />)

    const button = screen.getByRole('button', { name: 'Launch demo' })
    expect(button).toHaveAttribute('aria-pressed', 'false')

    await user.click(button)
    expect(onLaunchDemo).toHaveBeenCalledTimes(1)
  })

  it('shows "Demo running" and aria-pressed=true when launched', () => {
    render(<Topbar navLinks={navLinks} demoLaunched={true} onLaunchDemo={vi.fn()} />)

    const button = screen.getByRole('button', { name: 'Demo running' })
    expect(button).toHaveAttribute('aria-pressed', 'true')
  })
})
