import './Hero.css'
import homeScreen from '../assets/screens/home.jpg'

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-glow"></div>
      <div className="container hero-inner">
        <div className="hero-content">
          <h1 className="hero-title">
            Easy way to find
            <br />
            trusted home services
            <br />
            <span className="hero-title-accent">near you</span>
          </h1>
          <p className="hero-subtitle">
            A powerful platform that connects you with verified freelance
            providers in your area — cleaning, gardening, car wash, upholstery,
            and moving. Book, manage, and pay with our seamless interface.
          </p>
          <div className="hero-buttons">
            <a href="#cta" className="hero-cta-btn">Get Started</a>
          </div>

          <div className="hero-trust">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="11" width="18" height="10" rx="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            <p className="hero-trust-label">Secure payments powered by Paystack — your card details never touch our servers.</p>
          </div>
        </div>

        <div className="hero-visual">
          <div className="phone-mockup">
            <div className="phone-frame">
              <img src={homeScreen} alt="Sanz app home screen showing search, categories, and popular home services" className="phone-screenshot" />
            </div>
          </div>

          <div className="floating-card task-card">
            <div className="task-check">✓</div>
            <span>Deep House Clean · R350/hr</span>
          </div>

          <div className="floating-card assign-card">
            <div className="assign-info">
              <span className="assign-label">Rating</span>
              <span className="assign-name">★ 4.9 (128 reviews)</span>
            </div>
            <div className="assign-info">
              <span className="assign-label">📅 Next available</span>
              <span className="assign-name">Thu, 9:00 AM</span>
            </div>
          </div>

          <div className="floating-card subtask-card">
            Paid securely via Paystack
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
