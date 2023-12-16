// Imports
import Image from "next/image";
import { RiVerifiedBadgeFill } from "react-icons/ri";

const Featured = () => {
  return (
    <section
      className="flex items-center w-full pt-[60px] xl:pt-[120px] pb-[50px] h-full padding-x bg-white"
      id="featured"
    >
      {/* Image and Text Wrapper */}
      <div className="container mx-auto  flex flex-col justify-between items-center xl:flex-row xl:justify-between">
        {/* Image */}
        <div className="flex-1 mb-8 xl:mb-0 ">
          <Image src="/product1.png" alt="" width={650} height={448} />
        </div>
        {/* Text */}
        <div className="flex flex-col  padding-y gap-y-5 ">
          <h1 className="h2 text-primary pt-5 text-center">
            Product <span className="text-secondary">Features</span>
          </h1>

          <div className="flex items-center gap-x-3  shadow-lg p-2 rounded-full">
            <RiVerifiedBadgeFill className="text-3xl text-primary" />
            <p className="description uppercase font-semibold">No Chemicals</p>
          </div>
          <div className="flex items-center gap-x-3  shadow-lg p-2 rounded-full">
            <RiVerifiedBadgeFill className="text-3xl text-primary" />
            <p className="description uppercase font-semibold">
              No Perservatives
            </p>
          </div>
          <div className="flex items-center gap-x-3  shadow-lg p-2 rounded-full">
            <RiVerifiedBadgeFill className="text-3xl text-primary" />
            <p className="description uppercase font-semibold">100% Natural</p>
          </div>
          <div className="flex items-center gap-x-3  shadow-lg p-2 rounded-full">
            <RiVerifiedBadgeFill className="text-3xl text-primary" />
            <p className="description uppercase font-semibold">Cyanide Free</p>
          </div>
          <div className="flex items-center gap-x-3  shadow-lg p-2 rounded-full">
            <RiVerifiedBadgeFill className="text-3xl text-primary" />
            <p className="description uppercase font-semibold">Low Sugar</p>
          </div>
          <div className="flex items-center gap-x-3  shadow-lg p-2 rounded-full">
            <RiVerifiedBadgeFill className="text-3xl text-primary" />
            <p className="description uppercase font-semibold">
              Zero Cholesterol
            </p>
          </div>
          <div className="flex items-center gap-x-3  shadow-lg p-2 rounded-full">
            <RiVerifiedBadgeFill className="text-3xl text-primary " />
            <p className="description uppercase font-semibold">Odourless</p>
          </div>
          <div className="flex items-center gap-x-3 mb-10  shadow-lg p-2 rounded-full">
            <RiVerifiedBadgeFill className="text-3xl text-primary " />
            <p className="description uppercase font-semibold">
              Nafdaq Registered
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
