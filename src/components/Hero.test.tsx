import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Hero } from './Hero'
import { heroStats, sparklineBars, miniCards } from '../data/content'

describe('Hero', () => {
  it('renders all stats and the formatted active session count', () => {
    render(
      <Hero
        stats={heroStats}
        sparklineBars={sparklineBars}
        miniCards={miniCards}
        activeSessions={1284}
        onGetStarted={vi.fn()}
        onViewComponents={vi.fn()}
      />,
    )

    for (const stat of heroStats) {
      const article = screen.getByTestId(`stat-${stat.id}`)
      expect(article).toHaveTextContent(stat.value)
      expect(article).toHaveTextContent(stat.label)
    }

    expect(screen.getByTestId('active-sessions')).toHaveTextContent('1,284')
  })

  it('renders every mini card with its label and value', () => {
    render(
      <Hero
        stats={heroStats}
        sparklineBars={sparklineBars}
        miniCards={miniCards}
        activeSessions={1284}
        onGetStarted={vi.fn()}
        onViewComponents={vi.fn()}
      />,
    )

    for (const mini of miniCards) {
      expect(screen.getByText(mini.label)).toBeInTheDocument()
      expect(screen.getByText(mini.value)).toBeInTheDocument()
    }
  })

  it('calls the action callbacks when the CTA buttons are clicked', async () => {
    const user = userEvent.setup()
    const onGetStarted = vi.fn()
    const onViewComponents = vi.fn()

    render(
      <Hero
        stats={heroStats}
        sparklineBars={sparklineBars}
        miniCards={miniCards}
        activeSessions={1284}
        onGetStarted={onGetStarted}
        onViewComponents={onViewComponents}
      />,
    )

    await user.click(screen.getByRole('button', { name: 'Get started' }))
    expect(onGetStarted).toHaveBeenCalledTimes(1)

    await user.click(screen.getByRole('button', { name: 'View components' }))
    expect(onViewComponents).toHaveBeenCalledTimes(1)
  })
})
