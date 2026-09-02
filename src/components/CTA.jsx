import './CTA.css'

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
          <div className="cta-phone">
            <div className="cta-phone-screen">
              <div className="cta-app-header">
                <h3>Find your<br />cleaner ✨</h3>
              </div>
              <div className="cta-card">
                <div className="cta-card-badge">Top Rated</div>
                <h4>Premium Deep Clean</h4>
                <p>Complete home cleaning service</p>
                <div className="cta-card-footer">
                  <span>⭐ 4.9</span>
                  <span>💰 From R250/hr</span>
                </div>
              </div>
              <div className="cta-card">
                <h4>Office Cleaning</h4>
                <p>Professional workspace cleaning</p>
                <div className="cta-card-footer">
                  <span>⭐ 4.7</span>
                  <span>💰 From R300/hr</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
