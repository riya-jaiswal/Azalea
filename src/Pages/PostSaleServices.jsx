import React from "react";
import Mainlayout from "../Section/Mainlayout";
import Hero from "../Section/Hero";
import Contactsection from "../Section/Contactsection";
import { memo } from "react";
import FaqSection from "../Section/FaqSection";
import { useDispatch } from "react-redux";

const PostSalesServicesPage = () => {
    const disp=useDispatch()
     const toggleOpen = () => {
    disp({ type: "open" });
  };
  return (
    <Mainlayout>
      {/* Hero Section - Enhanced with engaging visuals */}
      <Hero
        isHomepage={false}
        heading="Post-Sales Services Support for Developers"
        paragraph="Comprehensive post-sales support solutions for real estate developers. Streamline customer onboarding, collections, loan assistance, and possession strategies to ensure seamless experiences and long-term client satisfaction."
        backgroundImage="url('/path-to-attractive-developer-support-image.jpg')" // Add a relevant background image for visual appeal (replace with actual path)
        ctaButtonText="Get Started Today"
        ctaButtonLink="/contact"
      />

      {/* Service Overview Section - Attractive with animations */}
      <section className="bg-[#f2e9df] text-green-900 px-6 py-10 md:py-20 animate-fadeIn">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#187530] mb-6 tracking-wide">
            Complete Post-Sales Support Solutions
          </h2>
          <p className="text-gray-600 mt-2 text-base max-w-2xl mx-auto italic">
            Our specialized post-sales services help real estate developers
            manage customer lifecycles efficiently, from onboarding to
            possession, ensuring transparency, loyalty, and revenue
            optimization[4].
          </p>
        </div>
      </section>

      {/* Key Features Section - With icons and hover effects */}
      <section className="bg-white text-green-900 px-6 py-10 md:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#187530] mb-6">
              Key Post-Sales Features
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "👥",
                title: "Customer Onboarding",
                description:
                  "Smooth integration of new clients with personalized guidance and setup[4][5]",
              },
              {
                icon: "💰",
                title: "Collections & Revenue Management",
                description:
                  "Efficient payment tracking and revenue optimization strategies[4]",
              },
              {
                icon: "📞",
                title: "Grievance & Escalation Handling",
                description:
                  "Prompt resolution of customer issues to maintain satisfaction",
              },
              {
                icon: "🏦",
                title: "Home Loan Assistance",
                description:
                  "Expert support for financing and loan processing",
              },
              {
                icon: "🏡",
                title: "Possession Strategy & Delivery",
                description:
                  "Seamless handover and residence delivery execution",
              },
              {
                icon: "🤝",
                title: "Loyalty Management",
                description:
                  "Programs to foster long-term client relationships and repeat business",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-[#f2e9df] p-6 rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <div className="text-4xl mb-3">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-[#187530]">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - Numbered with animations */}
      <section className="bg-[#f2e9df] text-green-900 px-6 py-10 md:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#187530] mb-6">
              Our Post-Sales Management Process
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Initial Onboarding",
                description:
                  "Welcome new customers with personalized setup and guidance",
              },
              {
                step: "02",
                title: "Ongoing Support",
                description:
                  "Handle payments, loans, and grievances efficiently",
              },
              {
                step: "03",
                title: "Monitoring & Updates",
                description:
                  "Regular check-ins and loyalty program implementation",
              },
              {
                step: "04",
                title: "Possession & Closure",
                description: "Execute seamless delivery and final handover",
              },
            ].map((step, index) => (
              <div
                key={index}
                className="text-center bg-white p-6 rounded-lg hover:shadow-md transition-all duration-300 animate-slideUp"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="bg-green-900 text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#187530]">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section - With checkmarks and hover effects */}
      <section className="bg-white text-green-900 px-6 py-10 md:py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#187530] mb-6">
              Why Choose Our Post-Sales Support?
            </h2>
            <p className="text-gray-600 mt-2 text-base max-w-2xl mx-auto">
              Deliver exceptional customer experiences that build loyalty and
              drive repeat business for your development projects.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Enhanced customer satisfaction and retention",
              "Efficient revenue management and collections",
              "Streamlined grievance handling and escalations",
              "Expert home loan and financing assistance",
              "Seamless possession and delivery processes",
              "Robust loyalty programs for long-term relationships",
              "Proactive maintenance and support strategies",
              "Improved brand reputation through positive experiences",
            ].map((benefit, index) => (
              <div
                key={index}
                className="flex items-center bg-[#f2e9df] p-4 rounded-lg hover:bg-green-100 transition-colors duration-300"
              >
                <div className="bg-green-900 text-white rounded-full w-6 h-6 flex items-center justify-center mr-4 flex-shrink-0 text-sm">
                  ✓
                </div>
                <span className="text-gray-600 font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section - Grid with shadows */}
      <section className="bg-[#f2e9df] text-green-900 px-6 py-10 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#187530] mb-6">
            Advanced Digital Tools for Post-Sales
          </h2>
          <p className="text-gray-600 mt-2 text-base max-w-2xl mx-auto mb-12">
            Leverage cutting-edge technology to streamline post-sales processes
            for developers worldwide[1].
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "CRM software for customer management",
              "Automated collection systems",
              "Real-time grievance tracking platforms",
              "Digital loan assistance tools",
              "Cloud-based possession management",
              "Loyalty program analytics dashboards",
            ].map((tech, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-green-900 font-semibold text-center">
                  {tech}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Consultation Section - Prominent CTA */}
      <section className="bg-green-900 text-white px-6 py-10 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Get a Free Consultation
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Ready to optimize your post-sales processes? Schedule a free
            consultation with our experts and learn how we can support your
            development projects for maximum efficiency and client satisfaction.
          </p>
          <a
           onClick={toggleOpen}
            className="bg-white cursor-pointer hover:bg-[#c89d47]  text-green-900 px-8 py-4 rounded-full font-bold text-lg hover:text-white transition-all duration-300"
          >
            Book Your Consultation Now
          </a>
        </div>
      </section>

      {/* FAQ Section */}
      <FaqSection />

      {/* Contact Section */}
      <Contactsection shouldMapShow={true} />
    </Mainlayout>
  );
};

export default memo(PostSalesServicesPage);
