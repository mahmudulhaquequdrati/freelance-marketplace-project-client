import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import FeatureSingle from "./FeatureSingle";
import Link from "next/link";

export default function Feature() {
  const [features, setFeatures] = useState([]);
  useEffect(() => {
    fetch("/feature/data.json")
      .then((res) => res.json())
      .then((data) => setFeatures(data));
  }, []);

  return (
    <div className="my-20 container mx-auto px-4 feature-font">
      <div className=" flex justify-between flex-col md:flex-row mb-8 items-center">
        <div className="w-full md:w-10/12 lg:w-8/12">
          <h2 className="text-3xl font-bold mb-2 capitalize text-gray-700">
            Expolre popular<span className="text-blue-600"> services</span>
          </h2>
          <p className="w-full md:w-10/12 lg:w-8/12 text-gray-600 text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit
            aliquid sapiente placeat laudantium culpa voluptate repellendus
            accusantium odit repellat suscipit?
          </p>
        </div>

        <div className="mt-6 md:mt-0 lg:mt-0">
          <Link href='/gig_search'>
          <a className="border-2 border-blue-500  rounded-md py-3 px-6">
            Explore Now
          </a>
          </Link>
        </div>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {features.map((feature) => (
          <SwiperSlide key={feature.id} className="py-4">
            <FeatureSingle feature={feature} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
