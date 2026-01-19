import React from 'react'

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-primary-50 via-white to-primary-50">
      <div className="section-container">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            We Help Canadian Service Businesses{' '}
            <span className="text-primary-600">Automate Client Growth</span>
          </h1>

          {/* Sub-headline */}
          <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
            CRM + Funnels + Websites — Built to Convert
          </p>

          {/* Value Proposition */}
          <p className="text-lg text-gray-600 mb-10 max-w-3xl mx-auto">
            Get more clients and keep them engaged — without spending hours on manual follow-up.
            We build automated client systems that work together to grow sales and save time.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button onClick={scrollToContact} className="btn-primary">
              Book a Free Consultation
            </button>
            <button onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })} className="btn-secondary">
              Learn More
            </button>
          </div>

          {/* Key Benefits */}
          <div className="grid md:grid-cols-4 gap-6 mt-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">More Bookings</div>
              <p className="text-gray-600">Convert more leads into paying clients</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">Automated Follow-ups</div>
              <p className="text-gray-600">Never miss a lead opportunity</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">Better Experience</div>
              <p className="text-gray-600">Keep clients engaged effortlessly</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">Higher Revenue</div>
              <p className="text-gray-600">Grow sales with less effort</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
