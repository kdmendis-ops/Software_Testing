interface ContactProps {
  duplicateCount: number
  onCustomizeLayout: () => void
  onDuplicateSection: () => void
}

export function Contact({ duplicateCount, onCustomizeLayout, onDuplicateSection }: ContactProps) {
  return (
    <section className="card contact-card" id="contact">
      <div>
        <p className="eyebrow">Next step</p>
        <h2>Use this as a starting point for your own product UI.</h2>
        {duplicateCount > 0 && (
          <p className="duplicate-status" data-testid="duplicate-status">
            Section duplicated {duplicateCount} time{duplicateCount === 1 ? '' : 's'}.
          </p>
        )}
      </div>
      <div className="contact-actions">
        <button className="primary-button" type="button" onClick={onCustomizeLayout}>
          Customize layout
        </button>
        <button className="ghost-button dark" type="button" onClick={onDuplicateSection}>
          Duplicate section
        </button>
      </div>
    </section>
  )
}
