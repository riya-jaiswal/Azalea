import AboutImage from "../assets/About/Image1.jpg";
import Hero from "./Hero";

const AboutSection = () => {
  return (
    <>
      {/* Hero */}

      {/* About Company */}
      <section className="bg-[#f2e9df] px-6 py-10 md:py-20 text-center" id="about">
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#187530] mb-4">
            About Us
          </h2>
          <p className="text-gray-700 mt-4 leading-relaxed">
            Azalea Management Services LLP offers complete real estate and
            community living solutions—from post-sales property management to
            NRI care and cooperative society administration.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          {/* Text Section */}
          <div className="space-y-10 text-left">
            {[
              {
                title: "Our Company",
                content:
                  "Azalea provides seamless property and community management—built on trust, transparency, and tailored service—for developers, NRIs, and housing societies.",
              },
              {
                title: "Our Mission",
                content:
                  "To deliver reliable, transparent, and efficient real estate and community services that empower clients and enhance property value and harmony.",
              },
              {
                title: "Our Vision",
                content:
                  "To redefine real estate care by setting new benchmarks in innovation, quality, and client satisfaction—one community at a time.",
              },
            ].map((item, i) => (
              <div className="group" key={i}>
                <h3 className="text-xl font-bold text-[#187530] flex items-start gap-3 mb-3">
                  <span className="w-6 h-6 bg-[#187530] rounded-full flex items-center justify-center text-white">
                    ✓
                  </span>
                  {item.title}
                </h3>
                <p className="text-gray-700 ml-9 leading-relaxed">
                  {item.content}
                </p>
              </div>
            ))}
          </div>

          {/* Image Section */}
          <div className="rounded-2xl overflow-hidden shadow-lg h-72 md:h-full">
            <img
              src={AboutImage}
              alt="About Azalea"
              className="w-full h-full object-cover rounded-xl transition duration-300 hover:scale-105"
            />
          </div>
        </div>
      </section>

   
    </>
  );
};

export default AboutSection;
