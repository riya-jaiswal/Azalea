import { memo, useState } from "react";

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      question: "What services does Azalea Management Services provide?",
      answer:
        "We offer comprehensive property and community management services including post-sales support, cooperative management, NRI property care, maintenance coordination, tenant relations, financial management, and community harmony initiatives.",
    },
    {
      question: "How do you handle NRI property management?",
      answer:
        "We provide dedicated NRI services including regular property inspections, tenant management, rent collection, maintenance oversight, legal compliance, and detailed monthly reports to keep you informed about your property investment from anywhere in the world.",
    },
    {
      question: "What is your fee structure for property management?",
      answer:
        "Our fees are competitive and transparent, typically ranging from 8-12% of monthly rental income depending on the services required. We also offer customized packages for cooperative management and one-time consultation services. Contact us for a detailed quote based on your specific needs.",
    },
    {
      question: "How quickly do you respond to maintenance requests?",
      answer:
        "Emergency maintenance issues are addressed within 24 hours, while routine maintenance requests are handled within 3-5 business days. We maintain a network of trusted vendors and contractors to ensure prompt, quality service delivery.",
    },
    {
      question: "Do you provide regular reports on property performance?",
      answer:
        "Yes, we provide comprehensive monthly reports including financial statements, maintenance updates, tenant communications, market analysis, and recommendations for property improvements. NRI clients receive additional documentation for tax and investment purposes.",
    },
    {
      question: "Can you help with legal compliance and documentation?",
      answer:
        "Absolutely. We ensure all properties comply with local regulations, handle necessary documentation, coordinate with legal professionals when needed, and keep all records updated. This includes rent agreements, society compliance, tax documentation, and regulatory filings.",
    },
    {
      question:
        "What makes Azalea Management Services different from other property managers?",
      answer:
        "Our commitment to transparency, personalized service, and community-focused approach sets us apart. We combine technology with human touch, provide detailed reporting, maintain 24/7 communication channels, and treat every property as if it were our own.",
    },
    {
      question: "How do I get started with your services?",
      answer:
        "Simply contact us for a free consultation. We'll assess your property, understand your requirements, provide a customized service plan, and can begin management services within a week of agreement signing.",
    },
    {
      question: "What is the typical turnaround time for service delivery?",
      answer:
        "Timelines vary by service scope and region. Typically, most inventory documentation and reporting are completed within 7–10 working days from onboarding.",
    },
    {
      question:
        "Can Azalea help with vendor onboarding or audits for CHS committees?",
      answer:
        "Yes. We assist CHS committees with vendor evaluation, onboarding documentation, and periodic audits—ensuring compliance, transparency, and operational control.",
    },
    {
      question: "Still have questions?",
      answer: (
        <>
          Contact us at{" "}
          <a
            href="mailto:contact@azaleaservices.co.in"
            className="text-[#187530] font-medium underline hover:text-green-800 transition-colors"
          >
            contact@azaleaservices.co.in
          </a>{" "}
          or tap the Request Consultation button for responsive, personalized
          support.
        </>
      ),
    },
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="bg-[#f2e9df] px-6 py-10" id="faq">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#187530] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Find answers to common questions about our property management
            services. Can't find what you're looking for? Feel free to contact
            us directly.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-[#187530] pr-4 cursor-pointer">
                  {faq.question}
                </h3>
                <div
                  className={`flex-shrink-0 w-8 h-8 rounded-full bg-[#187530] flex items-center justify-center transition-transform duration-300 ${
                    openFAQ === index ? "rotate-180" : ""
                  }`}
                >
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>

              <div
                className={`transition-all duration-300 ease-in-out ${
                  openFAQ === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                } overflow-hidden`}
              >
                <div className="px-6 pb-5">
                  <div className="pt-2 border-t border-gray-100">
                    <p className="text-gray-700 leading-relaxed mt-3">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
      </div>
    </section>
  );
};

export default memo(FAQSection);
