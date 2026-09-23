import './Pricing.css'

function Pricing() {
  const categories = [
    {
      name: 'House cleaning',
      description: 'General home cleaning and tidying.',
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 10.5 12 3l9 7.5" />
          <path d="M5 9.5V21h5v-6h4v6h5V9.5" />
        </svg>
      ),
    },
    {
      name: 'Gardening',
      description: 'Lawn care, planting, and garden upkeep.',
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M11 20A7 7 0 0 1 4 13c0-6 7-10 15-10 0 8-4 15-10 15a7 7 0 0 1-1 0z" />
          <line x1="4" y1="20" x2="10" y2="14" />
        </svg>
      ),
    },
    {
      name: 'Car wash',
      description: 'Exterior and interior car cleaning.',
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 17h14M6 17a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm12 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0z" />
          <path d="M3 17V11l2-5h14l2 5v6" />
        </svg>
      ),
    },
    {
      name: 'Upholstery',
      description: 'Deep cleaning for sofas, chairs, and fabric surfaces.',
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 18v-6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v6" />
          <path d="M2 18h20" />
          <path d="M4 12V7a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v3" />
        </svg>
      ),
    },
    {
      name: 'Moving',
      description: 'Help with packing, loading, and moving items.',
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 8l-9-5-9 5 9 5 9-5z" />
          <path d="M3 8v8l9 5 9-5V8" />
          <path d="M12 13v8" />
        </svg>
      ),
    },
  ]

  return (
    <section className="pricing" id="pricing">
      <div className="container">
        <span className="section-tag">SERVICES &amp; PRICING</span>
        <h2 className="pricing-title">What you can book on Sanz</h2>
        <p className="pricing-intro">
          Every provider on Sanz sets their own rate — either an hourly rate or
          a flat rate per job — shown upfront on their listing before you
          book. Prices are in South African Rand (ZAR) and charged in full at
          the time of booking through Paystack's secure checkout.
        </p>

        <div className="pricing-grid">
          {categories.map((cat) => (
            <div className="pricing-card" key={cat.name}>
              <div className="pricing-icon">{cat.icon}</div>
              <h3>{cat.name}</h3>
              <p>{cat.description}</p>
            </div>
          ))}
        </div>

        <div className="pricing-note">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12.01" y2="8" />
          </svg>
          <p>
            Sanz doesn't charge seekers a separate booking fee — the price you
            see on a listing is the price you pay. Cancelling before a
            provider accepts your request is always free.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Pricing
