import './CTA.css'
import bookingsScreen from '../assets/screens/bookings.jpg'
import detailScreen from '../assets/screens/detail.jpg'

function CTA() {
  return (
    <section className="cta" id="cta">
      <div className="container cta-inner">
        <div className="cta-content">
          <h2 className="cta-title">
            Ready to book your
            <br />
            first clean?
          </h2>
          <p className="cta-text">
            Sign up, browse verified local cleaners, and book in minutes.
            Payment is handled securely through Paystack at checkout — no
            subscription, you only pay for the services you book.
          </p>
          <button className="cta-btn">Get Started</button>
        </div>

        <div className="cta-visual">
          <div className="cta-phone cta-phone-secondary">
            <img src={detailScreen} alt="Sanz app service detail screen" className="cta-phone-screenshot" />
          </div>
          <div className="cta-phone cta-phone-main">
            <img src={bookingsScreen} alt="Sanz app bookings screen" className="cta-phone-screenshot" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
