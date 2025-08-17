// src/components/Service.tsx
import { FiArrowUpRight, FiArrowRight } from "react-icons/fi";
import seo from "../../assets/seo.webp";

const services = [
  {
    title: "Search Engine Optimization",
    desc: "Our SEO services ensure your website ranks higher on search engines like Google, helping your business.",
    icon: <FiArrowRight size={20} />,
    highlight: true,
  },
  { title: "Pay-Per-Click (PPC) Advertising", icon: <FiArrowUpRight size={18} /> },
  { title: "Content Marketing", icon: <FiArrowUpRight size={18} /> },
  { title: "Email Marketing", icon: <FiArrowUpRight size={18} /> },
  { title: "Social Media Marketing", icon: <FiArrowUpRight size={18} /> },
  { title: "Conversion Rate Optimization", icon: <FiArrowUpRight size={18} /> },
];

export default function Service() {
  return (
    <section className="bg-[#F4F2EB] py-16 px-6 md:px-12 font-spaceGrotesk">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_auto] gap-10 items-start">
        {/* Left Column */}
        <div>
          <p className="text-sm lg:text-lg font-normal font-spaceGrotesk text-gray-800 flex items-center gap-2">
            <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
            Our Services
          </p>
          <h2 className="text-4xl font-bold mt-3 leading-tight">
            Boost your SEO ranking with excellent effective services
          </h2>

          <hr className="border-gray-400 my-6" />

          <div className="space-y-0">
            {services.map((service, idx) => (
              <div
                key={idx}
                className={`flex justify-between items-center border-b border-gray-400 group ${
                  service.highlight
                    ? "bg-white p-6 border-none rounded-sm shadow-sm hover:shadow-md"
                    : "py-5"
                }`}
              >
                <div>
                  <h3 className="font-semibold text-lg">{service.title}</h3>
                  {service.desc && (
                    <p className="text-gray-500 text-sm mt-1">{service.desc}</p>
                  )}
                </div>
                <div className="text-yellow-500 flex-shrink-0 transition-transform group-hover:translate-x-1">
                  {service.icon}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col items-center md:items-end">
          <button className="border rounded-full px-5 py-2 text-sm flex items-center gap-2 mb-6 hover:bg-gray-100 transition font-kanit">
            View All Work <FiArrowUpRight />
          </button>
          <img
            src={seo}
            alt="SEO Services"
            className="rounded shadow-lg max-w-[500px] w-full lg:h-[580px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}
