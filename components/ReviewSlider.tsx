"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { FaQuoteLeft } from "react-icons/fa";
import Image from "next/image";

//Review Data
const reviewData = [
  {
    message:
      "Denosh Cassava Flour makes fufu preparation a breeze! I appreciate the convenience without compromising on taste.",
    avatar: "/customer2.jpg",
    name: "Jane Doe",
  },
  {
    message:
      "A must have for anyone looking to savor the true taste of traditional dishes.",
    avatar: "/customer1.jpg",
    name: "John Doe",
  },
  {
    message:
      "Took me on a trip down memory lane with every mouthful. Authenticity simplified",
    avatar: "/customer3.jpg",
    name: "Mary Doe",
  },
];

const ReviewSlider = () => {
  return (
    <div>
      <Swiper
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="h-[450px] xl:h-[400px] "
      >
        {reviewData.map((person, index) => {
          const { message, avatar, name } = person;
          return (
            <SwiperSlide key={index}>
              <div className="flex flex-col justify-center items-center text-center">
                <FaQuoteLeft className="text-7xl text-secondary mb-6" />
                <div className="text-2xl xl:text-4xl max-w-[874px] mb-12 font-medium text-primary">
                  {message}
                </div>
                <Image
                  src={avatar}
                  width={70}
                  height={70}
                  alt=""
                  className="mb-4 rounded-full"
                />
                <div className="text-lg font-medium">{name}</div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default ReviewSlider;
