import CustomButton from "./CustomButton";
import Image from "next/image";

const Hero = () => {
  const handleScroll = () => {};

  return (
    <div className="hero mb-20 " id="home">
      <div className="flex-1 pt-36 padding-x text-center xl:max-w-xl xl:text-left mt-16 xl:mt-0">
        <h1 className="h1 ">
          Introducing
          <br /> <span className="text-secondary">DeNosh</span> Cassava Flour
        </h1>
        <p className="description">
          Enjoy the nourishing goodness of Fufu, and Rediscover the authentic
          flavors of Nigeria with our premium Cassava Flour.
        </p>
        <CustomButton
          title="Become A Distributor"
          containerStyles="bg-primary hover:bg-primary-hover text-white rounded-xl mt-10 uppercase btn-lg btn"
        />
      </div>
      <div className="hero__image-container ">
        <div className="hero__image  ">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
        </div>
        {/* <div className="hero__image-overlay" /> */}
      </div>
    </div>
  );
};

export default Hero;
