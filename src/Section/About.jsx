import AboutImage from "../assets/About/Image1.jpg"

const AboutSection = () => {
  return (
    <>
      <section className="bg-[#f2e9df] px-6 py-20 text-center" id="about">
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#187530]">
            About us
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
            veniam, quis nostrud exercitation
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          {/* Left Section with Content */}
          <div className="space-y-8 text-left">
            {/* Company */}
            <div className="group">
              <h3 className="text-xl font-bold text-[#187530] flex items-start gap-3 mb-3">
                <div className="flex-shrink-0 w-6 h-6 bg-[#187530] rounded-full flex items-center justify-center mt-0.5 group-hover:scale-110 transition-transform duration-200">
                  <svg 
                    className="w-4 h-4 text-white" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M5 13l4 4L19 7" 
                    />
                  </svg>
                </div>
                Our Company
              </h3>
              <p className="text-gray-700 leading-relaxed ml-9">
                Azalea Management Services LLP provides seamless property and community 
                management—from post-sales support to cooperative and NRI care—built on 
                trust, transparency, and tailored service.
              </p>
            </div>

            {/* Mission */}
            <div className="group">
              <h3 className="text-xl font-bold text-[#187530] flex items-start gap-3 mb-3">
                <div className="flex-shrink-0 w-6 h-6 bg-[#187530] rounded-full flex items-center justify-center mt-0.5 group-hover:scale-110 transition-transform duration-200">
                  <svg 
                    className="w-4 h-4 text-white" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M5 13l4 4L19 7" 
                    />
                  </svg>
                </div>
                Our Mission
              </h3>
              <p className="text-gray-700 leading-relaxed ml-9">
                To deliver reliable, transparent, and efficient real estate and community 
                services that empower clients and enhance property value and harmony.
              </p>
            </div>

            {/* Vision */}
            <div className="group">
              <h3 className="text-xl font-bold text-[#187530] flex items-start gap-3 mb-3">
                <div className="flex-shrink-0 w-6 h-6 bg-[#187530] rounded-full flex items-center justify-center mt-0.5 group-hover:scale-110 transition-transform duration-200">
                  <svg 
                    className="w-4 h-4 text-white" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M5 13l4 4L19 7" 
                    />
                  </svg>
                </div>
                Our Vision
              </h3>
              <p className="text-gray-700 leading-relaxed ml-9">
                To redefine real estate care by setting new benchmarks in innovation, 
                quality, and client satisfaction—one community at a time.
              </p>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="rounded-2xl overflow-hidden shadow-lg h-72 md:h-full">
            <img 
              src={AboutImage} 
              alt="About Azalea Management Services" 
              className="w-full h-full object-cover rounded-xl transition-all duration-300 hover:scale-105" 
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutSection
