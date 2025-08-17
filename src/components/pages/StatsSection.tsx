import { FaStarOfLife } from "react-icons/fa";

const StatsSection = () => {
  const stats = [
    { value: "3K+", label: "Successful Project" },
    { value: "20K", label: "Experienced Team" },
    { value: "43K+", label: "Happy Customers" },
    { value: "36K+", label: "Client 5 Star Review" },
  ];

  const services = [
    "SEO Strategy Development",
    "Search Engine Optimization",
    "Research & Analysis",
  ];

  return (
    <section className="bg-white py-16 font-spaceGrotesk">
      {/* Stats Row */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10 text-center md:text-left relative">
        {stats.map((item, index) => (
          <div key={index} className="relative flex flex-col items-center md:items-start">
            <h2 className="text-4xl font-bold text-gray-900">{item.value}</h2>
            <p className="text-gray-600 mt-2">{item.label}</p>

            {/* Divider (hide on last item) */}
            {index < stats.length - 1 && (
              <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-12 border-r border-gray-400">
                <span className="absolute -right-[7px] top-1/2 -translate-y-1/2 w-3 h-3 bg-yellow-400 rounded-full"></span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Slanted Banner */}
      <div className="relative mt-20">
        {/* Yellow Background Strip */}
        <div className="absolute inset-0 bg-yellow-400 h-[80%] top-1/2 -translate-y-1/2"></div>

        {/* White Skew Box */}
        <div className="relative -skew-y-3 bg-[#F4F2EB] py-8 shadow-lg">
          <div className="-skew-y-0 flex flex-col sm:flex-row justify-center items-center gap-8 px-6">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 text-xl font-semibold text-gray-900"
              >
                <FaStarOfLife className="text-yellow-400 text-lg" />
                <span>{service}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
