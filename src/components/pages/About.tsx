import { RxArrowTopRight } from "react-icons/rx";
import person2 from "../../assets/person2.webp";
import person3 from "../../assets/person3.webp";

const About = () => {
  return (
    <section className="bg-[#F4F2EB] py-12 lg:py-20">
      {/* Top Tag */}
      <div className="flex items-center gap-2 justify-center text-sm lg:text-lg font-normal font-spaceGrotesk">
        <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
        Welcome to SEO Agency
        <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
      </div>

      {/* Heading */}
      <h2 className="mt-3 text-3xl lg:text-6xl text-center font-bold leading-tight font-spaceGrotesk">
        Comprehensive SEO & <br /> Digital Marketing Solutions.
      </h2>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center font-spaceGrotesk mt-8 lg:mt-14">
        
        {/* Left Side - Text */}
        <div>
          <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
            Our SEO services ensure your website ranks higher on search engines
            like Google, helping your business attract more organic traffic.
            From keyword research and on-page optimization to link building and
            technical SEO, we use proven strategies to improve your visibility
            and authority online.
          </p>
          <p className="mt-4 text-gray-600 leading-relaxed text-sm lg:text-base">
            We believe in making informed decisions. By using analytics and
            performance data, we fine-tune strategies to deliver the best
            possible results.
          </p>

          {/* Progress Bars */}
          <div className="mt-8">
            <div className="mb-5">
              <div className="flex justify-between text-sm font-bold text-gray-800">
                <span>SEO Analysis</span>
                <span>80%</span>
              </div>
              <div className="w-full bg-white rounded-full h-2 mt-2">
                <div
                  className="bg-yellow-400 h-2 rounded-full"
                  style={{ width: "80%" }}
                ></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm font-bold text-gray-800">
                <span>Marketing Strategy</span>
                <span>90%</span>
              </div>
              <div className="w-full bg-white rounded-full h-2 mt-2">
                <div
                  className="bg-black h-2 rounded-full"
                  style={{ width: "90%" }}
                ></div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <button className="mt-8 bg-black text-white px-5 lg:px-6 py-3 font-semibold text-xs lg:text-sm flex items-center gap-2 hover:bg-gray-800 transition">
            More About Us <RxArrowTopRight />
          </button>
        </div>

        {/* Right Side - Images */}
        <div className="grid grid-cols-2 gap-4 items-center">
          {/* Tall Left Image */}
          <img
            src={person2}
            alt="Team Member"
            className="w-full h-[400px] object-cover rounded-lg"
          />

          {/* Right Column */}
          <div className="flex flex-col items-center gap-4">
            {/* Yellow Circle */}
            <div className="relative w-32 h-32 rounded-full bg-yellow-400 flex items-center justify-center text-black">
              <span className="text-2xl">▶</span>
              {/* This is where circular text SVG can be placed */}
            </div>

            {/* Bottom Image */}
            <img
              src={person3}
              alt="Team Work"
              className="w-full h-[180px] object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
