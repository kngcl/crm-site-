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
    <section id="testimonials" className="relative py-20 bg-gradient-to-b from-white via-blue-50 to-purple-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute bottom-20 right-0 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      </div>

      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 mb-4 text-sm font-semibold text-blue-600 bg-blue-50 rounded-full">
            Client Success Stories
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4">
            Results Our Clients{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Are Seeing
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real Canadian businesses, real measurable results
          </p>
        </div>

        {/* Stats Grid - Enhanced */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl blur-lg opacity-25 group-hover:opacity-40 transition-opacity"></div>
              <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 text-center hover:scale-110 transition-all duration-300 border-2 border-white">
                <div className="text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                  {stat.value}
                </div>
                <div className="text-gray-700 font-semibold text-sm uppercase tracking-wide">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid - Enhanced */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group relative">
              <div className="relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-gray-100 overflow-hidden">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                {/* Quote Icon */}
                <div className="absolute top-6 right-6 text-6xl text-blue-100 opacity-50">
                  "
                </div>

                {/* Rating Stars */}
                <div className="flex mb-6 relative z-10">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 text-yellow-400 fill-current transform hover:scale-125 transition-transform" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-700 mb-8 leading-relaxed text-base relative z-10">
                  "{testimonial.quote}"
                </p>

                {/* Client Info */}
                <div className="flex items-center pt-6 border-t-2 border-gradient-to-r from-blue-200 to-purple-200 relative z-10">
                  <div className="text-5xl mr-4 transform group-hover:scale-110 transition-transform">
                    {testimonial.image}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-lg">{testimonial.name}</div>
                    <div className="text-sm text-gray-600 font-medium">{testimonial.business}</div>
                    <div className="inline-flex items-center gap-1 text-sm font-semibold text-primary-600 mt-1">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      {testimonial.location}
                    </div>
                  </div>
                </div>

                {/* Decorative Element */}
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-tl-full transform translate-x-12 translate-y-12"></div>
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
