import './Banner.css'

function Banner() {
  const text = 'BOOK TRUSTED LOCAL CLEANERS · SECURE PAYMENTS WITH PAYSTACK'
  const repeated = Array(6).fill(text).join('   •   ')

  return (
    <section className="banner">
      <div className="banner-track">
        <span className="banner-text">{repeated}</span>
        <span className="banner-text">{repeated}</span>
      </div>
    </section>
  )
}

export default Banner
