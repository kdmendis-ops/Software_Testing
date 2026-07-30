import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'
import { features } from '../data/content'

describe('Features', () => {
  it('renders a card for every feature with its index, title, and description', () => {
    render(<Features features={features} />)

    for (const feature of features) {
      const card = screen.getByTestId(`feature-${feature.id}`)
      expect(card).toHaveTextContent(feature.index)
      expect(card).toHaveTextContent(feature.title)
      expect(card).toHaveTextContent(feature.description)
    }
  })

  it('renders nothing when given an empty list', () => {
    render(<Features features={[]} />)
    expect(screen.queryByRole('article')).not.toBeInTheDocument()
  })
})
