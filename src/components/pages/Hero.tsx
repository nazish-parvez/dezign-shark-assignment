import { RxArrowTopRight } from "react-icons/rx";
import person1 from "../../assets/person1.webp";
import sub1 from "../../assets/subperson1.webp";
import sub2 from "../../assets/subperson2.webp";
import sub3 from "../../assets/subperson3.webp";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const Hero = () => {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    if (contentRef.current) {
      // Animate whole div
      gsap.fromTo(
        contentRef.current,
        { x: -100, opacity: 0 }, // starting state
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
        }
      );

      // Animate children staggered
      gsap.fromTo(
        contentRef.current.children,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2, // each child comes after 0.2s
          ease: "power3.out",
          delay: 0.3,
        }
      );
    }
  }, []);

  useEffect(() => {
    if (imgRef.current) {
      // Initial pop animation when mounted
      gsap.fromTo(
        imgRef.current,
        { scale: 0.5, opacity: 0, y: 20 },
        { scale: 1, opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      );
    }
  }, []);

  return (
    <section className="relative font-spaceGrotesk">
      <div className="max-w-7xl mx-auto px-4 pt-8 lg:pt-32 lg:pb-30 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side */}
        <div ref={contentRef}>
          {/* Tag */}
          <span className="bg-yellow-400 text-black font-medium pl-3 py-1 text-sm lg:text-lg">
            SEO & Marketi
          </span>
          <span className="text-sm lg:text-lg">ng Agency</span>

          {/* Heading */}
          <h1 className="mt-4 text-4xl lg:text-6xl font-bold leading-tight">
            Empowering <br />
            Growth Unlock <br />
            SEO Solutions
          </h1>

          {/* Description */}
          <p className="mt-4 text-gray-600 text-sm">
            At Saor, we are dedicated to helping businesses navigate the complex
            digital landscape with ease. We specialize in providing a full
            spectrum of SEO.
          </p>

          {/* CTA */}
          <div className="mt-6">
            <button className="bg-black text-white px-4 lg:px-6 py-3 font-semibold text-xs lg:text-sm flex items-center gap-2 hover:bg-gray-800 transition">
              Get Started Now <RxArrowTopRight />
            </button>
          </div>

          {/* Avatars + text */}
          <div className="flex items-center gap-3 mt-7">
            <div className="flex -space-x-2">
              <img
                src={sub1}
                alt="User"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <img
                src={sub2}
                alt="User"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <img
                src={sub3}
                alt="User"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center text-lg font-bold border-2 border-white">
                +
              </div>
            </div>
            <span className="font-medium">Get Started Now</span>
          </div>
        </div>

        {/* Right Side: Image Placeholder */}
        <div ref={imgRef} className="relative">
          <div className="h-[400px] rounded-lg flex items-center justify-center">
            <span>
              <img src={person1} alt="" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
