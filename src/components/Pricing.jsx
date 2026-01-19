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
    <section id="pricing" className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-0 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      </div>

      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 mb-4 text-sm font-semibold text-primary-600 bg-primary-50 rounded-full">
            Investment That Pays Off
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Simple, Transparent{' '}
            <span className="bg-gradient-to-r from-primary-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              Pricing
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Choose the package that fits your business needs
          </p>
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl px-6 py-4 shadow-lg">
            <div className="flex-shrink-0 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-green-800 font-semibold text-sm md:text-base">
              Canadian businesses may qualify for <span className="font-bold">Canada Digital Adoption Program</span> grants to help fund these services
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <div
              key={index}
              className={`relative rounded-3xl overflow-hidden transition-all duration-500 ${
                tier.highlight
                  ? 'transform scale-105 md:scale-110 z-10'
                  : 'hover:-translate-y-2'
              }`}
            >
              {/* Badge */}
              {tier.badge && (
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="relative">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 px-6 py-2 rounded-full text-sm font-bold shadow-xl flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      {tier.badge}
                    </div>
                  </div>
                </div>
              )}

              {/* Card */}
              <div className={`h-full p-8 ${
                tier.highlight
                  ? 'bg-gradient-to-br from-primary-600 via-blue-600 to-purple-600 text-white shadow-2xl'
                  : 'bg-white shadow-xl hover:shadow-2xl border-2 border-gray-100'
              }`}>
                {/* Plan Name */}
                <h3 className={`text-2xl font-bold mb-3 ${tier.highlight ? 'text-white' : 'text-gray-900'} ${tier.badge ? 'mt-4' : ''}`}>
                  {tier.name}
                </h3>

                {/* Price */}
                <div className="mb-6">
                  <div className={`text-5xl font-extrabold mb-1 ${tier.highlight ? 'text-white' : 'text-transparent bg-gradient-to-r from-primary-600 to-blue-600 bg-clip-text'}`}>
                    {tier.price}
                  </div>
                  <div className={`text-sm font-medium ${tier.highlight ? 'text-primary-100' : 'text-gray-500'}`}>
                    {tier.priceDetail}
                  </div>
                </div>

                {/* Description */}
                <p className={`mb-8 text-base ${tier.highlight ? 'text-blue-50' : 'text-gray-600'}`}>
                  {tier.description}
                </p>

                {/* Divider */}
                <div className={`h-px mb-6 ${tier.highlight ? 'bg-white/20' : 'bg-gray-200'}`}></div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start group">
                      <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-0.5 ${
                        tier.highlight ? 'bg-white/20' : 'bg-primary-50'
                      } group-hover:scale-110 transition-transform`}>
                        <svg
                          className={`w-4 h-4 ${tier.highlight ? 'text-white' : 'text-primary-600'}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className={`text-sm ${tier.highlight ? 'text-white' : 'text-gray-700'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                  className={`w-full py-4 px-6 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 ${
                    tier.highlight
                      ? 'bg-white text-primary-600 hover:bg-gray-50 shadow-xl hover:shadow-2xl'
                      : 'bg-gradient-to-r from-primary-600 to-blue-600 text-white hover:from-primary-700 hover:to-blue-700 shadow-lg hover:shadow-xl'
                  }`}
                >
                  {tier.cta}
                </button>
              </div>

              {/* Glow Effect for Highlighted Card */}
              {tier.highlight && (
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary-400 to-purple-400 blur-2xl opacity-40"></div>
              )}
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
