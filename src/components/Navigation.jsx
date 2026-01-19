import React, { useState } from 'react'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="section-container">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-primary-600">
            CRM Automation Pro
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-primary-600 transition">
              Services
            </button>
            <button onClick={() => scrollToSection('how-it-works')} className="text-gray-700 hover:text-primary-600 transition">
              How It Works
            </button>
            <button onClick={() => scrollToSection('pricing')} className="text-gray-700 hover:text-primary-600 transition">
              Pricing
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="text-gray-700 hover:text-primary-600 transition">
              Testimonials
            </button>
            <button onClick={() => scrollToSection('contact')} className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-3">
            <button onClick={() => scrollToSection('services')} className="block w-full text-left text-gray-700 hover:text-primary-600 transition py-2">
              Services
            </button>
            <button onClick={() => scrollToSection('how-it-works')} className="block w-full text-left text-gray-700 hover:text-primary-600 transition py-2">
              How It Works
            </button>
            <button onClick={() => scrollToSection('pricing')} className="block w-full text-left text-gray-700 hover:text-primary-600 transition py-2">
              Pricing
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="block w-full text-left text-gray-700 hover:text-primary-600 transition py-2">
              Testimonials
            </button>
            <button onClick={() => scrollToSection('contact')} className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition w-full">
              Get Started
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
