import groupImg from "../../assets/group.webp"

const Mission = () => {
  return (
    <section className="px-12 md:px-16 lg:px-30 py-12 bg-white font-spaceGrotesk">
      {/* Top small title */}
      <div className="text-center mb-4">
        <span className="inline-flex items-center gap-2 text-gray-700 font-medium">
          <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
          Our Mission & Vision
          <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
        </span>
      </div>

      {/* Main Heading */}
      <h2 className="text-center text-2xl md:text-4xl font-bold text-gray-900 mb-6">
        Present creative and innovative <br /> SEO solutions
      </h2>

      {/* Content */}
      <div className="relative flex flex-col lg:flex-row items-center justify-center gap-8">
        {/* Yellow badge */}
        <div className="absolute -left-7 top-12 lg:-left-16 lg:top-12 z-10">
          <div className="w-20 h-20 md:w-32 md:h-32 bg-yellow-400 rounded-full flex flex-col items-center justify-center font-semibold">
            <span className="text-sm lg:text-2xl">24</span>
            <span className="text-[10px] lg:text-xs text-center leading-tight">
              YEARS <br /> EXPERIENCE
            </span>
          </div>
        </div>

        {/* Image */}
        <img
          src={groupImg}
          alt="Team working"
          className="w-full h-40 lg:h-auto lg:w-[150rem] rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

export default Mission;
