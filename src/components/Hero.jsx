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
            trusted cleaners
            <br />
            <span className="hero-title-accent">near you</span>
          </h1>
          <p className="hero-subtitle">
            A powerful platform that connects you with verified freelance
            cleaners in your area. Book, manage, and pay for cleaning services
            with our seamless interface.
          </p>
          <div className="hero-buttons">
            <button className="store-btn apple-btn">
              <svg width="20" height="24" viewBox="0 0 20 24" fill="currentColor">
                <path d="M16.52 12.46c-.03-3.13 2.55-4.63 2.67-4.71-1.45-2.12-3.72-2.41-4.53-2.45-1.93-.2-3.76 1.13-4.74 1.13-.98 0-2.49-1.1-4.1-1.07-2.11.03-4.05 1.23-5.14 3.12-2.19 3.8-.56 9.43 1.57 12.51 1.04 1.51 2.28 3.2 3.91 3.14 1.57-.06 2.16-1.02 4.06-1.02 1.9 0 2.43 1.02 4.09.99 1.69-.03 2.76-1.54 3.79-3.06 1.2-1.75 1.69-3.44 1.72-3.53-.04-.02-3.3-1.27-3.33-5.02zM13.39 3.27C14.24 2.23 14.82.84 14.67-.56c-1.2.05-2.65.8-3.51 1.81-.77.89-1.44 2.31-1.26 3.68 1.33.1 2.69-.68 3.49-1.66z"/>
              </svg>
              <div className="store-btn-text">
                <span className="store-btn-small">Download on the</span>
                <span className="store-btn-large">App Store</span>
              </div>
            </button>
            <button className="store-btn google-btn">
              <svg width="22" height="24" viewBox="0 0 22 24" fill="currentColor">
                <path d="M1.22.56L12.7 12 1.22 23.44C.86 22.94.64 22.3.64 21.6V2.4c0-.7.22-1.34.58-1.84zM16.64 8.06L4.06.26C3.64.04 3.18-.06 2.72.04l10.18 10.18 3.74-3.74v1.58zM16.64 15.94l-3.74-3.74L2.72 22.38c.46.1.92 0 1.34-.22l12.58-6.22zM20.14 10.44l-2.92-1.6-3.32 3.32 3.32 3.32 2.92-1.6c.88-.48 1.36-1.2 1.36-2.02s-.48-1.54-1.36-2.02z"/>
              </svg>
              <div className="store-btn-text">
                <span className="store-btn-small">GET IT ON</span>
                <span className="store-btn-large">Google Play</span>
              </div>
            </button>
          </div>

          <div className="hero-stats">
            <div className="hero-stat-number">
              <span className="stat-value">1.2M</span>
            </div>
            <div className="hero-stat-avatars">
              <div className="avatar" style={{ background: '#29B6F6' }}>J</div>
              <div className="avatar" style={{ background: '#0288D1' }}>M</div>
              <div className="avatar" style={{ background: '#4FC3F7' }}>A</div>
              <div className="avatar" style={{ background: '#0D47A1' }}>R</div>
              <div className="avatar avatar-more">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </div>
            <p className="hero-stat-label">Users already<br />use the app</p>
          </div>
        </div>

        <div className="hero-visual">
          <div className="phone-mockup">
            <div className="phone-frame">
              <img src={homeScreen} alt="Sanz app home screen showing search, categories, and popular cleaning services" className="phone-screenshot" />
            </div>
          </div>

          <div className="floating-card task-card">
            <div className="task-check">✓</div>
            <span>Book a cleaner for March</span>
          </div>

          <div className="floating-card assign-card">
            <div className="assign-info">
              <span className="assign-label">Assigned to</span>
              <span className="assign-name">Sarah Wilson</span>
            </div>
            <div className="assign-info">
              <span className="assign-label">📅 Due date</span>
              <span className="assign-name">16 Feb</span>
            </div>
          </div>

          <div className="floating-card subtask-card">
            Add a subtask
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
