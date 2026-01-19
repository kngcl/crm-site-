import React from 'react'

const Services = () => {
  const services = [
    {
      title: 'CRM Setup & Automation',
      icon: '⚙️',
      color: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-50 to-cyan-50',
      description: 'Professional CRM implementation tailored to your business',
      features: [
        'Client database setup',
        'Lead pipeline management',
        'SMS/Email automation sequences',
        'Appointment reminders',
        'Follow-up workflows'
      ],
      benefits: 'Never lose a lead. Automate your follow-ups and close more deals.'
    },
    {
      title: 'Funnel & Website Design',
      icon: '🌐',
      color: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-50 to-pink-50',
      description: 'High-converting websites integrated with your CRM',
      features: [
        '4-6 page responsive website',
        'Lead capture pages',
        'CRM form integration',
        'Booking & payment links',
        'Mobile-optimized design'
      ],
      benefits: 'Turn visitors into booked appointments automatically.'
    },
    {
      title: 'Monthly Support & Optimization',
      icon: '📊',
      color: 'from-emerald-500 to-teal-500',
      bgGradient: 'from-emerald-50 to-teal-50',
      description: 'Ongoing support to keep your systems running smoothly',
      features: [
        'System monitoring',
        'Performance optimization',
        'Content updates',
        'Technical support',
        'Monthly reporting'
      ],
      benefits: 'Focus on your business while we handle the tech.'
    }
  ]

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 mb-4 text-sm font-semibold text-primary-600 bg-primary-50 rounded-full">
            What We Offer
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Complete Automation{' '}
            <span className="bg-gradient-to-r from-primary-600 to-blue-600 bg-clip-text text-transparent">
              Solutions
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to automate client acquisition and retention
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
            >
              {/* Gradient Header */}
              <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>

              {/* Card Content */}
              <div className="p-8">
                {/* Icon with gradient background */}
                <div className={`inline-flex items-center justify-center w-16 h-16 mb-6 bg-gradient-to-br ${service.bgGradient} rounded-2xl text-4xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                  {service.icon}
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                <div className="mb-6">
                  <h4 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wide">
                    What's Included:
                  </h4>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start group/item">
                        <div className="flex-shrink-0 w-5 h-5 mt-0.5 mr-3">
                          <svg className="w-full h-full text-green-500 group-hover/item:scale-125 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits Badge */}
                <div className={`mt-6 p-4 bg-gradient-to-br ${service.bgGradient} rounded-xl border-l-4 border-gradient-to-b ${service.color}`}>
                  <p className="text-gray-800 font-semibold text-sm">
                    💡 {service.benefits}
                  </p>
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            Not sure which service is right for you?
          </p>
          <button
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-blue-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Let's Talk About Your Needs
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Services
