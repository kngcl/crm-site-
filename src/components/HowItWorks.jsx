import React from 'react'

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Discovery Call',
      description: 'We learn about your business, goals, and current challenges. We\'ll identify exactly what automation and tools will work best for you.',
      icon: '📞',
      duration: '30-45 minutes'
    },
    {
      number: '02',
      title: 'Build & Customize',
      description: 'We set up your CRM, design your website, and create automated workflows tailored to your specific business needs.',
      icon: '🔨',
      duration: '2-4 weeks'
    },
    {
      number: '03',
      title: 'Go Live + Support',
      description: 'Your new systems go live! We provide training, ongoing support, and optimization to ensure everything runs smoothly.',
      icon: '🚀',
      duration: 'Ongoing'
    }
  ]

  return (
    <section id="how-it-works" className="relative py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
      </div>

      <div className="section-container relative z-10">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 mb-4 text-sm font-semibold text-purple-600 bg-purple-50 rounded-full">
            Our Process
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4">
            How It{' '}
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent">
              Works
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Simple, transparent process to get you up and running in weeks
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Animated Connection Lines */}
          <div className="hidden md:block absolute top-32 left-0 w-full h-0.5">
            <div className="w-full h-full bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-400 to-pink-400 animate-pulse"></div>
          </div>

          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border-2 border-purple-100 overflow-hidden">
                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Step Number Badge */}
                <div className="absolute -top-8 -left-8 w-20 h-20 bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded-2xl flex items-center justify-center text-3xl font-extrabold shadow-2xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 z-10">
                  {step.number}
                </div>

                {/* Icon with Animated Background */}
                <div className="relative inline-flex items-center justify-center w-24 h-24 mb-6 mt-8">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300"></div>
                  <div className="relative text-7xl transform group-hover:scale-125 transition-transform duration-300">
                    {step.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                  {step.title}
                </h3>

                {/* Duration Badge */}
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-200 px-4 py-2 rounded-full mb-4">
                  <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm font-bold text-purple-700">{step.duration}</span>
                </div>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed relative z-10">{step.description}</p>

                {/* Decorative Element */}
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-tl-full transform translate-x-16 translate-y-16 group-hover:scale-150 transition-transform duration-500"></div>
              </div>

              {/* Arrow Between Steps (Desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-32 -right-6 z-20">
                  <svg className="w-12 h-12 text-purple-400 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Enhanced CTA */}
        <div className="text-center mt-20">
          <div className="inline-block bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border-2 border-purple-100">
            <p className="text-lg font-semibold text-gray-700 mb-6">
              Ready to automate your business growth?
            </p>
            <button
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="group relative px-10 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white font-bold rounded-xl shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Schedule Your Discovery Call
                <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
