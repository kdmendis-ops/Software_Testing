import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Contact } from './Contact'

describe('Contact', () => {
  it('does not show the duplicate status when count is 0', () => {
    render(
      <Contact duplicateCount={0} onCustomizeLayout={vi.fn()} onDuplicateSection={vi.fn()} />,
    )
    expect(screen.queryByTestId('duplicate-status')).not.toBeInTheDocument()
  })

  it('shows singular status text for a count of 1', () => {
    render(
      <Contact duplicateCount={1} onCustomizeLayout={vi.fn()} onDuplicateSection={vi.fn()} />,
    )
    expect(screen.getByTestId('duplicate-status')).toHaveTextContent(
      'Section duplicated 1 time.',
    )
  })

  it('shows plural status text for counts greater than 1', () => {
    render(
      <Contact duplicateCount={3} onCustomizeLayout={vi.fn()} onDuplicateSection={vi.fn()} />,
    )
    expect(screen.getByTestId('duplicate-status')).toHaveTextContent(
      'Section duplicated 3 times.',
    )
  })

  it('invokes the correct callback for each button', async () => {
    const user = userEvent.setup()
    const onCustomizeLayout = vi.fn()
    const onDuplicateSection = vi.fn()

    render(
      <Contact
        duplicateCount={0}
        onCustomizeLayout={onCustomizeLayout}
        onDuplicateSection={onDuplicateSection}
      />,
    )

    await user.click(screen.getByRole('button', { name: 'Customize layout' }))
    expect(onCustomizeLayout).toHaveBeenCalledTimes(1)
    expect(onDuplicateSection).not.toHaveBeenCalled()

    await user.click(screen.getByRole('button', { name: 'Duplicate section' }))
    expect(onDuplicateSection).toHaveBeenCalledTimes(1)
  })
})
