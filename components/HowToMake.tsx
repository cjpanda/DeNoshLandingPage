import Image from "next/image";
import { FaArrowCircleRight } from "react-icons/fa";

const HowToMake = () => {
  return (
    <section
      className="flex items-center w-full pt-[60px] xl:pt-[120px] pb-[60px] h-full  padding-x"
      id="howtomake"
    >
      <div className="container mx-auto">
        {/* Text and Image Conatiner  */}
        <div className="flex flex-col xl:flex-row justify-center items-center xl:justify-start h-full gap-20">
          {/* Text */}
          <div className="flex flex-1 flex-col gap-y-5 w-full ">
            <h2 className="h2 text-primary text-center xl:text-left">
              How To Make <span className="text-secondary">DeNosh</span> Cassava
              Flour
            </h2>
            <div className="flex items-center gap-x-3 shadow-lg p-2 rounded-full">
              <FaArrowCircleRight className="text-3xl text-primary" />
              <p className="description font-semibold">
                Boil 35cl of Water for at least 100 degrees Celsius.
              </p>
            </div>
            <div className="flex items-center gap-x-3 shadow-lg p-2 rounded-full">
              <FaArrowCircleRight className="text-3xl text-primary" />
              <p className="description font-semibold">
                Pout the water in a bowl or plate.
              </p>
            </div>
            <div className="flex items-center gap-x-3 shadow-lg p-2 rounded-full">
              <FaArrowCircleRight className="text-3xl text-primary" />
              <p className="description font-semibold">
                Put your DeNosh flour, 166g or milk cup{" "}
              </p>
            </div>
            <div className="flex items-center gap-x-3 shadow-lg p-2 rounded-full">
              <FaArrowCircleRight className="text-3xl text-primary" />
              <p className="description font-semibold">
                Stir gradually to your desired texture.
              </p>
            </div>
            <div className="flex items-center gap-x-3 shadow-lg p-2 rounded-full">
              <FaArrowCircleRight className="text-3xl text-primary" />
              <p className="description font-semibold">
                Color change means that the fufu is ready.
              </p>
            </div>
            <div className="flex items-center gap-x-3 shadow-lg p-2 rounded-full">
              <FaArrowCircleRight className="text-3xl text-primary" />
              <p className="description font-semibold">
                Serve and Enjoy with your favorite soup.
              </p>
            </div>
          </div>
          {/* Image */}
          <div className="pt-10 rounded-[20px] padding-y">
            <Image
              src="/testimonials.jpg"
              alt=""
              width={600}
              height={448}
              className="object-contain rounded-[50px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToMake;
