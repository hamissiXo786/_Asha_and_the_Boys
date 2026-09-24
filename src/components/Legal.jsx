import './Legal.css'

function Legal() {
  return (
    <section className="legal" id="legal">
      <div className="container">
        <div className="legal-block legal-block-privacy" id="privacy-policy">
          <span className="section-tag dark-tag">PRIVACY</span>
          <h2 className="legal-title">Privacy Policy</h2>
          <p className="legal-intro">
            This policy explains what personal information Sanz collects when
            you use the app, why we collect it, and who we share it with. Sanz
            operates in South Africa and handles your information in line
            with the Protection of Personal Information Act (POPIA).
          </p>

          <div className="legal-subsection">
            <h3>1. Information We Collect</h3>
            <ul className="legal-list">
              <li>Account details you give us when you sign up: name, email address, and phone number.</li>
              <li>Your location, so we can show you nearby providers, or show providers nearby job requests.</li>
              <li>Booking details: service type, job address, date and time, and any notes you add.</li>
              <li>Messages you send through in-app messaging with a provider or seeker.</li>
              <li>For providers: identity and background-check information submitted during verification.</li>
              <li>We do not collect or store your card or banking details — those go directly to Paystack.</li>
            </ul>
          </div>

          <div className="legal-subsection">
            <h3>2. How We Use It</h3>
            <ul className="legal-list">
              <li>To create and manage your account and bookings.</li>
              <li>To connect seekers with matching providers nearby.</li>
              <li>To process payments through Paystack and send you receipts.</li>
              <li>To verify provider identity and keep the platform safe.</li>
              <li>To send booking confirmations, updates, and respond to support requests.</li>
            </ul>
          </div>

          <div className="legal-subsection">
            <h3>3. Who We Share It With</h3>
            <ul className="legal-list">
              <li>The other party in a booking — for example, your name, contact details, and job address are shared with the provider you book, and vice versa.</li>
              <li>Paystack, solely to process payments.</li>
              <li>Law enforcement or regulators, only where required by law.</li>
              <li>We do not sell your personal information to third parties.</li>
            </ul>
          </div>

          <div className="legal-subsection">
            <h3>4. Data Security</h3>
            <ul className="legal-list">
              <li>Payment card data is handled entirely within Paystack's own secure systems — Sanz never receives or stores your card number.</li>
              <li>We take reasonable technical and organizational measures to protect the account and booking information we do hold.</li>
            </ul>
          </div>

          <div className="legal-subsection">
            <h3>5. Your Rights</h3>
            <ul className="legal-list">
              <li>Under POPIA, you can ask to access, correct, or delete your personal information at any time.</li>
              <li>Contact <a href="mailto:support@sanzcleaning.co.za">support@sanzcleaning.co.za</a> to make a request or ask a question about your data.</li>
            </ul>
          </div>

          <div className="legal-subsection">
            <h3>6. Data Retention</h3>
            <ul className="legal-list">
              <li>We keep account and booking information for as long as your account is active, and afterward only as long as needed for legal, tax, or dispute-resolution purposes.</li>
            </ul>
          </div>

          <div className="legal-subsection">
            <h3>7. Children</h3>
            <ul className="legal-list">
              <li>Sanz is not intended for anyone under 18, and we don't knowingly collect information from minors.</li>
            </ul>
          </div>

          <div className="legal-subsection">
            <h3>8. Changes to This Policy</h3>
            <ul className="legal-list">
              <li>We'll update this page if our practices change. Continuing to use Sanz after an update means you accept the revised policy.</li>
            </ul>
          </div>
        </div>

        <div className="legal-inner legal-grid">
        <div className="legal-block" id="refund-policy">
          <span className="section-tag dark-tag">REFUNDS &amp; CANCELLATIONS</span>
          <h2 className="legal-title">Refund &amp; Cancellation Policy</h2>
          <ul className="legal-list">
            <li>
              <strong>Before a provider accepts your request:</strong> you can
              cancel freely from the app at no charge — no payment has been
              collected at this stage.
            </li>
            <li>
              <strong>After a request is accepted or paid for:</strong>{' '}
              cancellations are handled manually — contact us at{' '}
              <a href="mailto:support@sanzcleaning.co.za">support@sanzcleaning.co.za</a>{' '}
              and we'll review and process a refund via Paystack where
              appropriate.
            </li>
            <li>
              <strong>Completed jobs:</strong> if you're unhappy with
              completed work, contact us within 48 hours and we'll work with
              you and the provider to resolve it.
            </li>
          </ul>
        </div>

        <div className="legal-block" id="terms">
          <span className="section-tag dark-tag">LEGAL</span>
          <h2 className="legal-title">Terms of Service</h2>
          <ul className="legal-list">
            <li>
              Sanz is a marketplace platform. Service providers listed on Sanz
              are independent contractors, not Sanz employees — Sanz is not
              the entity performing the cleaning, gardening, car wash,
              upholstery, or moving services booked through the app.
            </li>
            <li>
              Payments are processed by Paystack; Sanz does not store your
              card details.
            </li>
            <li>
              By booking through Sanz you agree to the Refund &amp;
              Cancellation Policy above.
            </li>
            <li>
              For disputes, contact{' '}
              <a href="mailto:support@sanzcleaning.co.za">support@sanzcleaning.co.za</a>.
            </li>
          </ul>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Legal
