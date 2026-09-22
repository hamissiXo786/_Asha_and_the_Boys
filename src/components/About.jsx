import './About.css'
import splashScreen from '../assets/screens/splash.jpg'
import profileScreen from '../assets/screens/profile.jpg'

function About() {
  return (
    <section className="about" id="about">
      <div className="container about-inner">
        <div className="about-media">
          <div className="about-play-btn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="5,3 19,12 5,21" />
            </svg>
          </div>
          <div className="about-phone-grid">
            <div className="about-phone about-phone-secondary">
              <img src={profileScreen} alt="Sanz app cleaner profile screen" className="about-phone-screenshot" />
            </div>
            <div className="about-phone about-phone-main">
              <img src={splashScreen} alt="Sanz app welcome screen" className="about-phone-screenshot" />
            </div>
          </div>
        </div>

        <div className="about-content">
          <span className="section-tag">ABOUT APP</span>
          <h2 className="about-title">
            Stay organized
            <br />
            and increase
            <br />
            productivity
          </h2>
          <p className="about-text">
            Our cleaning marketplace allows you to stay on top of your home maintenance.
            Find trusted cleaners, schedule services, track progress, and manage payments
            all in one place. With real-time updates and verified reviews, maintaining a
            clean space has never been easier.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
