import './Features.css'

function Features() {
  return (
    <section className="features" id="features">
      <div className="container">
        <div className="features-header">
          <div className="features-starburst">
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
              <path d="M40 0L44.5 28.2L60 4.6L50.8 31.2L75.4 20L53.8 36.6L80 40L53.8 43.4L75.4 60L50.8 48.8L60 75.4L44.5 51.8L40 80L35.5 51.8L20 75.4L29.2 48.8L4.6 60L26.2 43.4L0 40L26.2 36.6L4.6 20L29.2 31.2L20 4.6L35.5 28.2L40 0Z" fill="var(--accent)" />
            </svg>
          </div>
          <h2 className="features-title">
            Sanz offers a comprehensive
            <br />
            suite of features to help you
            <br />
            find the right cleaner
          </h2>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <h3>Connect with Cleaners</h3>
            <p>
              Find verified freelance cleaners in your area. Browse profiles,
              check ratings, read reviews, and connect directly through our
              messaging system.
            </p>
            <div className="feature-preview">
              <div className="fp-user">
                <div className="fp-avatar" style={{ background: '#7C5CFC' }}>S</div>
                <div>
                  <div className="fp-name">Sarah M.</div>
                  <div className="fp-role">Deep Clean Specialist</div>
                </div>
                <div className="fp-rating">★ 4.9</div>
              </div>
              <div className="fp-user">
                <div className="fp-avatar" style={{ background: '#5ca3fc' }}>J</div>
                <div>
                  <div className="fp-name">James K.</div>
                  <div className="fp-role">Office Cleaning</div>
                </div>
                <div className="fp-rating">★ 4.8</div>
              </div>
            </div>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
            </div>
            <h3>Smart Scheduling</h3>
            <p>
              Set deadlines, schedule recurring cleaning sessions, and receive
              timely reminders. Never miss a cleaning appointment with our
              intelligent scheduling system.
            </p>
            <div className="feature-preview schedule-preview">
              <div className="schedule-item">
                <div className="schedule-date">
                  <span className="sched-day">Mon</span>
                  <span className="sched-num">15</span>
                </div>
                <div className="schedule-info">
                  <span className="sched-title">Deep Clean - Living Room</span>
                  <span className="sched-time">10:00 AM - 1:00 PM</span>
                </div>
                <div className="sched-status active">Confirmed</div>
              </div>
              <div className="schedule-item">
                <div className="schedule-date">
                  <span className="sched-day">Wed</span>
                  <span className="sched-num">17</span>
                </div>
                <div className="schedule-info">
                  <span className="sched-title">Kitchen & Bathroom</span>
                  <span className="sched-time">2:00 PM - 4:00 PM</span>
                </div>
                <div className="sched-status pending">Pending</div>
              </div>
            </div>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <h3>Verified & Trusted</h3>
            <p>
              All cleaners on our platform go through a thorough verification
              process. Background checks, identity verification, and ongoing
              review monitoring keep you safe.
            </p>
            <div className="feature-preview trust-preview">
              <div className="trust-badge">
                <span className="trust-icon">✓</span>
                <span>Background Checked</span>
              </div>
              <div className="trust-badge">
                <span className="trust-icon">✓</span>
                <span>ID Verified</span>
              </div>
              <div className="trust-badge">
                <span className="trust-icon">✓</span>
                <span>Insured</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
