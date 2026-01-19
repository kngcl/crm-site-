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
    <section id="how-it-works" className="py-20 bg-gradient-to-br from-gray-50 to-primary-50">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Simple, transparent process to get you up and running
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connection Lines (hidden on mobile) */}
          <div className="hidden md:block absolute top-1/4 left-0 w-full h-1 bg-gradient-to-r from-primary-300 via-primary-400 to-primary-300 opacity-30" style={{ top: '120px' }} />

          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="card bg-white relative z-10">
                {/* Step Number Badge */}
                <div className="absolute -top-6 -left-6 w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="text-6xl mb-4 mt-4">{step.icon}</div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>

                {/* Duration Badge */}
                <div className="inline-block bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                  {step.duration}
                </div>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-700 mb-6">
            Ready to automate your business growth?
          </p>
          <button
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary"
          >
            Schedule Your Discovery Call
          </button>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
