import Image from "next/image";
import { ReviewSlider } from "@/components";

const Reviews = () => {
  return (
    <section
      className=" w-full h-full pt-[60px] xl:pt-[120px] xl:pb-[60px] flex items-center bg-white"
      id="reviews"
    >
      <div className="container mx-auto padding-x padding-y ">
        <ReviewSlider />
      </div>
    </section>
  );
};

export default Reviews;
