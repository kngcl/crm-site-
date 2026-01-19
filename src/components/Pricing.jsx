import React from 'react'

const Pricing = () => {
  const pricingTiers = [
    {
      name: 'CRM + Automation Starter',
      price: '$1,200',
      priceDetail: 'one-time',
      description: 'Perfect for businesses ready to start automating',
      features: [
        'Basic CRM setup',
        'Contact management system',
        'Email automation workflows',
        'SMS notification setup',
        'Basic form integration',
        '1 month support included'
      ],
      highlight: false,
      cta: 'Get Started'
    },
    {
      name: 'Growth Package',
      price: '$3,500',
      priceDetail: 'one-time',
      description: 'Complete solution for serious growth',
      features: [
        'Everything in Starter',
        'Custom 4-6 page website',
        'High-converting lead capture pages',
        'Advanced automation funnels',
        'Booking & payment integration',
        'GoHighLevel or custom CRM',
        'Mobile-responsive design',
        '3 months support included'
      ],
      highlight: true,
      badge: 'Most Popular',
      cta: 'Start Growing'
    },
    {
      name: 'Premium + Support',
      price: '$400',
      priceDetail: 'per month',
      description: 'Ongoing optimization and support',
      features: [
        'All Growth Package features',
        'Monthly system optimization',
        'Performance reporting',
        'Content updates',
        'Priority technical support',
        'Strategy consultations',
        'New feature requests',
        'Unlimited support tickets'
      ],
      highlight: false,
      cta: 'Go Premium'
    }
  ]

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Choose the package that fits your business needs
          </p>
          <div className="inline-block bg-primary-50 border border-primary-200 rounded-lg px-6 py-3">
            <p className="text-primary-700 font-semibold">
              💡 Canadian businesses may qualify for Canada Digital Adoption Program grants to help fund these services
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <div
              key={index}
              className={`rounded-xl p-8 relative ${
                tier.highlight
                  ? 'bg-gradient-to-br from-primary-600 to-primary-700 text-white shadow-2xl scale-105 border-4 border-primary-400'
                  : 'bg-white border-2 border-gray-200 shadow-lg hover:shadow-xl transition-shadow'
              }`}
            >
              {/* Badge */}
              {tier.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-bold shadow-md">
                  {tier.badge}
                </div>
              )}

              {/* Plan Name */}
              <h3 className={`text-2xl font-bold mb-2 ${tier.highlight ? 'text-white' : 'text-gray-900'}`}>
                {tier.name}
              </h3>

              {/* Price */}
              <div className="mb-4">
                <div className={`text-4xl font-bold ${tier.highlight ? 'text-white' : 'text-primary-600'}`}>
                  {tier.price}
                </div>
                <div className={`text-sm ${tier.highlight ? 'text-primary-100' : 'text-gray-600'}`}>
                  {tier.priceDetail}
                </div>
              </div>

              {/* Description */}
              <p className={`mb-6 ${tier.highlight ? 'text-primary-50' : 'text-gray-600'}`}>
                {tier.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg
                      className={`w-5 h-5 mr-3 mt-0.5 flex-shrink-0 ${
                        tier.highlight ? 'text-primary-200' : 'text-primary-600'
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className={tier.highlight ? 'text-white' : 'text-gray-700'}>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                  tier.highlight
                    ? 'bg-white text-primary-600 hover:bg-gray-50 shadow-lg hover:shadow-xl'
                    : 'bg-primary-600 text-white hover:bg-primary-700'
                }`}
              >
                {tier.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            All packages include personalized setup and training. Custom packages available for larger businesses.
          </p>
          <button
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="text-primary-600 hover:text-primary-700 font-semibold underline"
          >
            Need a custom solution? Let's talk
          </button>
        </div>
      </div>
    </section>
  )
}

export default Pricing
