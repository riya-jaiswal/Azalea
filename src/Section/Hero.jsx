import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import hero1 from '../assets/Hero/BackGroundImage1.jpg';
import hero2 from '../assets/Hero/BackGroundImage2.jpg';
import hero3 from '../assets/Hero/BackGroundImage4.jpg';
function Hero(props) {
  const nav = useNavigate()
  const NavigateToService = () => {
    nav("/services")
  }
  return (<>

    {/* Hero Section with Auto Carousel and Green Text */}
    <section className="relative">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={4000}
        showArrows={false}
        stopOnHover={false}
        swipeable={true}
        emulateTouch={true}
      >
        {[hero1, hero2, hero3].map((img, idx) => (
          <div key={idx} className="relative h-[90vh] w-full">
            <img
              src={img}
              alt={`Hero Slide ${idx + 1}`}
              className="object-cover w-full h-[90vh]"
            />

            {/* Subtle dark overlay */}
            <div className="absolute inset-0 bg-black/10"></div>

            {/* Compact Text Card */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-2 sm:px-4">
              <div className="bg-white/25 backdrop-blur-sm rounded-xl shadow-lg p-4 sm:p-6 md:p-8 w-[95vw] sm:w-[90vw] md:w-auto lg:max-w-3xl lg:mx-auto border border-white/30">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#187530] mb-4 leading-tight">

                  {props.heading}
                </h1>
                <p className="text-gray-800 text-sm md:text-base lg:text-lg max-w-xl mx-auto mb-6 leading-relaxed">
                  {props.paragraph}
                </p>
                {props?.isHomepage && <button onClick={NavigateToService} className="bg-[#187530] text-white px-6 py-2 md:px-8 md:py-3 rounded-lg font-medium hover:bg-[#145a26] transition-all duration-300 shadow-md hover:shadow-lg">
                  Explore More
                </button>}
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  </>
  )
}

export default Hero
