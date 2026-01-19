import React from 'react'

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-1/2 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-primary-100 animate-fade-in">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary-500"></span>
            </span>
            <span className="text-sm font-semibold text-gray-700">Trusted by 100+ Canadian Businesses</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6 leading-tight animate-slide-up">
            We Help Canadian Businesses{' '}
            <span className="bg-gradient-to-r from-primary-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              Automate Client Growth
            </span>
          </h1>

          {/* Sub-headline */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed font-medium animate-slide-up animation-delay-200">
            CRM + Marketing Funnels + Conversion Websites — All Working Together
          </p>

          {/* Value Proposition */}
          <p className="text-lg text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed animate-slide-up animation-delay-400">
            Get more clients and keep them engaged — without spending hours on manual follow-up.
            We build automated client systems that work together to grow sales and save time.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-slide-up animation-delay-600">
            <button onClick={scrollToContact} className="group relative px-8 py-4 bg-gradient-to-r from-primary-600 to-blue-600 text-white font-bold rounded-xl shadow-2xl hover:shadow-primary-500/50 transition-all duration-300 hover:scale-105 overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                Book a Free Consultation
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })} className="px-8 py-4 bg-white/90 backdrop-blur-sm hover:bg-white text-gray-800 font-bold rounded-xl border-2 border-primary-200 hover:border-primary-400 transition-all duration-300 hover:scale-105 shadow-lg">
              Learn More
            </button>
          </div>

          {/* Key Benefits */}
          <div className="grid md:grid-cols-4 gap-6 mt-16 animate-slide-up animation-delay-800">
            {[
              { icon: '📈', title: '+45%', subtitle: 'More Bookings', desc: 'Convert more leads' },
              { icon: '⚡', title: '24/7', subtitle: 'Automation', desc: 'Never miss a lead' },
              { icon: '💼', title: '10hrs', subtitle: 'Saved Weekly', desc: 'Focus on growth' },
              { icon: '🚀', title: '3x', subtitle: 'Higher ROI', desc: 'Grow faster' }
            ].map((benefit, idx) => (
              <div key={idx} className="group relative bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-white/50">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">{benefit.icon}</div>
                <div className="text-3xl font-bold bg-gradient-to-r from-primary-600 to-blue-600 bg-clip-text text-transparent mb-1">
                  {benefit.title}
                </div>
                <div className="text-sm font-semibold text-gray-700 mb-1">{benefit.subtitle}</div>
                <p className="text-sm text-gray-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
