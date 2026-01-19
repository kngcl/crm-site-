import React from 'react'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Mitchell',
      business: 'Mitchell Dental Clinic',
      location: 'Toronto, ON',
      quote: 'Since implementing the CRM automation, we\'ve seen a 45% increase in booked appointments. The automated follow-ups ensure we never miss a potential patient.',
      rating: 5,
      image: '👩‍⚕️'
    },
    {
      name: 'David Chen',
      business: 'Chen & Associates Plumbing',
      location: 'Vancouver, BC',
      quote: 'The website and booking system transformed how we do business. Customers can now book directly online, and the automated reminders reduced our no-shows by 60%.',
      rating: 5,
      image: '👨‍🔧'
    },
    {
      name: 'Jessica Thompson',
      business: 'Wellness Coach & Trainer',
      location: 'Calgary, AB',
      quote: 'I used to spend hours every week on follow-ups and scheduling. Now everything is automated and I can focus on what I love — helping my clients achieve their goals.',
      rating: 5,
      image: '🏋️‍♀️'
    }
  ]

  const stats = [
    { value: '45%', label: 'More Booked Calls' },
    { value: '60%', label: 'Reduced No-Shows' },
    { value: '10hrs', label: 'Saved Per Week' },
    { value: '95%', label: 'Client Satisfaction' }
  ]

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-primary-50 to-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Results Our Clients Are Seeing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real businesses, real results
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center hover:scale-105 transition-transform">
              <div className="text-4xl font-bold text-primary-600 mb-2">{stat.value}</div>
              <div className="text-gray-700 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card bg-white">
              {/* Rating Stars */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 mb-6 italic leading-relaxed">
                "{testimonial.quote}"
              </p>

              {/* Client Info */}
              <div className="flex items-center pt-4 border-t border-gray-200">
                <div className="text-4xl mr-4">{testimonial.image}</div>
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.business}</div>
                  <div className="text-sm text-primary-600">{testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            Trusted by service businesses across Canada
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-gray-500">
            <div className="flex items-center">
              <svg className="w-6 h-6 mr-2 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Healthcare
            </div>
            <div className="flex items-center">
              <svg className="w-6 h-6 mr-2 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Home Services
            </div>
            <div className="flex items-center">
              <svg className="w-6 h-6 mr-2 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Coaching
            </div>
            <div className="flex items-center">
              <svg className="w-6 h-6 mr-2 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Wellness
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
