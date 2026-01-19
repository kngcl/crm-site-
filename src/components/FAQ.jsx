import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: "What exactly do you mean by \"automation\"?",
    answer: "Automation means setting up systems that automatically capture leads, follow up by SMS/email, book appointments, send reminders, and track clients—so nothing falls through the cracks."
  },
  {
    question: "Will this work for my type of business?",
    answer: "If your business relies on inquiries, appointments, or follow-ups, this will work for you. We specialize in Canadian service businesses like healthcare clinics, home services, coaches, and wellness professionals."
  },
  {
    question: "Do I need to already have a website or CRM?",
    answer: "No. We can build everything from scratch or integrate with what you already have. We handle the setup end-to-end."
  },
  {
    question: "How soon will I see results?",
    answer: "Most clients start seeing improvements within the first 30 days after launch. Full optimization and consistent results typically happen within 60–90 days."
  },
  {
    question: "What kind of results can I realistically expect?",
    answer: "Clients typically see more booked appointments, fewer no-shows, and 5–10+ hours saved per week. Results depend on your lead volume and offer, which we review during your free consultation."
  },
  {
    question: "How much does it cost and are there hidden fees?",
    answer: "Pricing is transparent with a one-time setup fee and optional monthly support. There are no hidden fees—everything is discussed upfront before you commit."
  },
  {
    question: "Do I own the system after it's built?",
    answer: "Yes. You fully own your website, CRM setup, and client data. If you stop support, your system continues running."
  },
  {
    question: "Is the free consultation a sales call?",
    answer: "It's a strategy call. We review your goals, challenges, and systems. If we're a good fit, you'll receive a clear proposal—no pressure or obligation."
  },
  {
    question: "Do your services qualify for Canada Digital Adoption Program (CDAP) grants?",
    answer: "Many of our services qualify, and we help assess eligibility and guide you through the process during your consultation."
  }
]

const FAQItem = ({ faq, isOpen, toggleOpen }) => {
  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        className="w-full py-5 px-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
        onClick={toggleOpen}
      >
        <span className="text-lg font-medium text-gray-900 pr-8">
          {faq.question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-blue-600 flex-shrink-0 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 ${
          isOpen ? 'max-h-96 pb-5' : 'max-h-0'
        }`}
      >
        <p className="px-6 text-gray-600 leading-relaxed">
          {faq.answer}
        </p>
      </div>
    </div>
  )
}

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know before getting started
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              toggleOpen={() => toggleFAQ(index)}
            />
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-gray-600 mb-6 text-lg">
            Still have questions?
          </p>
          <a
            href="#contact"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
          >
            Book Your Free Consultation
          </a>
        </div>
      </div>
    </section>
  )
}

export default FAQ
