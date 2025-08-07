import ContactImage from "../assets/Hero/BackGroundImage5.jpeg";

const Contactsection = (props) => {
  return (
    <section
      className="bg-[#f2e9df] text-green-900 px-6 py-10 md:py-20"
      id="contact"
    >
      <div className="max-w-4xl mx-auto text-center pb-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#187530]">
          Contact Us
        </h2>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
          Reach out to us for inquiries, partnerships, or service requests. Our
          team is ready to assist you with personalized support and guidance.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid  md:grid-cols-2 gap-10 items-start">
        {/* Left Form */}
        <form className="flex flex-col order-2 md:order-1 space-y-4 md:px-16">
          <input
            type="text"
            placeholder="Enter Your Name"
            className="bg-green-900 text-white placeholder-white px-4 py-3 rounded-md focus:outline-none"
          />
          <input
            type="text"
            placeholder="Enter Your Number"
            className="bg-green-900 text-white placeholder-white px-4 py-3 rounded-md focus:outline-none"
          />
          <input
            type="email"
            placeholder="Enter Your Email"
            className="bg-green-900 text-white placeholder-white px-4 py-3 rounded-md focus:outline-none"
          />
          <textarea
            rows="4"
            placeholder="Enter Your Message"
            className="bg-green-900 text-white placeholder-white px-4 py-3 rounded-md resize-none focus:outline-none"
          />
          <div>
            <button
              type="submit"
              className="bg-green-900 text-white p-2.5 px-8 text-base cursor-pointer  duration-300 transition-all hover:bg-[#c89d47]  font-semibold rounded-full"
            >
              Submit
            </button>
          </div>
        </form>

        {/* Right Image */}
        <div className="rounded-xl order-1 md:order-2 ">
          <img
            src={ContactImage}
            alt="Contact Illustration"
            className="h-90 w-full rounded-lg object-cover hover:scale-105 transition-all duration-300"
          />
        </div>
      </div>

      {/* Google Map */}
      {props?.shouldMapShow && (
        <div className="max-w-7xl mx-auto mt-16">
          <h3 className="text-2xl font-bold mb-6 text-center">Our Location</h3>
          <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.1223222678086!2d72.96354517371955!3d19.18985894839109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b97c3d41fdcd%3A0x5be452039c10bcd9!2sAzalea%20Management%20Services%20LLP!5e0!3m2!1sen!2sin!4v1754566078085!5m2!1sen!2sin"
          
width="100%"
height="100%"
allowFullScreen=""
loading="lazy"
referrerPolicy="no-referrer-when-downgrade"
className="border-0 w-full h-full"
            ></iframe>

           
          </div>
        </div>
      )}
    </section>
  );
};

export default Contactsection;
