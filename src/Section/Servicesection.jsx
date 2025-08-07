import service1 from '../assets/Service/Image 1.jpeg';
import service2 from '../assets/Service/image 2.jpeg';
import service3 from '../assets/Hero section/image 1.jpeg';
import service4 from '../assets/Service/Image 1.jpeg';
import service5 from '../assets/Service/image 2.jpeg';
import service6 from '../assets/Service/image 3.jpeg';



const Servicesection = () => {
  return (
    <section>
      {/* hero */}



      {/* Services Section */}
      <section className="bg-[#F2E9DC] px-6 py-10 md:py-20 text-center" id="services">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-green-900 mb-2">Our Services</h2>
          <p className="text-gray-700 mb-12">
            Elevating and Empowering Your Business with Customized, Innovative, and Strategic Solutions Designed for Success
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
          {[
            {
              img: service1,
              title: "Post-Sales Management",
              desc: "Seamless handover, documentation, buyer coordination, and compliance support post project sales."
            },
            {
              img: service2,
              title: "One-Year Project Support",
              desc: "Initial facility setup, utilities, staffing, and community-building for newly launched properties."
            },
            {
              img: service3,
              title: "NRI Property Management",
              desc: "Remote monitoring, rent collection, tenant handling, and full legal-compliance for overseas investors."
            },
            {
              img: service4,
              title: "Cooperative Housing Solutions",
              desc: "Society registration, finance management, facility maintenance, dispute resolution, and governance."
            },
            {
              img: service5,
              title: "Second Home & Retreat Management",
              desc: "Turnkey bungalow project management including interiors, landscaping, maintenance, and concierge."
            },
            {
              img: service6,
              title: "Legal & Regulatory Support",
              desc: "Support with occupancy certificates, property tax filings, and representation in legal matters."
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-4 rounded-2xl shadow-md">
              <img src={item.img} alt={item.title} className="rounded-xl mb-4 h-48 w-full object-cover" />
              <h3 className="font-bold text-xl text-green-900 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-700">{item.desc}</p>
            </div>
          ))}
        </div>

     
      </section>
    </section>
  );
};

export default Servicesection;
