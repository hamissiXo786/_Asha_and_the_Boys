import './CTA.css'
import bookingsScreen from '../assets/screens/bookings.jpg'
import detailScreen from '../assets/screens/detail.jpg'

function CTA() {
  return (
    <section className="cta" id="cta">
      <div className="container cta-inner">
        <div className="cta-content">
          <h2 className="cta-title">
            Start your free trial
            <br />
            today just in one click
          </h2>
          <p className="cta-text">
            Try our premium cleaning marketplace. Simply sign up for an account
            and start connecting with trusted cleaners. No credit card required. Find
            your perfect cleaner and maintain a spotless space effortlessly.
          </p>
          <button className="cta-btn">Start Free Trial</button>
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
