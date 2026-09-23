import './Legal.css'

function Legal() {
  return (
    <section className="legal" id="legal">
      <div className="container legal-inner">
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
    </section>
  )
}

export default Legal
