import React from 'react'

const Services = () => {
  const services = [
    {
      title: 'CRM Setup & Automation',
      icon: '⚙️',
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
    <section id="services" className="py-20 bg-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide complete solutions to automate your client acquisition and retention
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="card group hover:scale-105 transition-transform duration-300">
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">What You Get:</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <p className="text-primary-700 font-semibold">
                  {service.benefits}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
