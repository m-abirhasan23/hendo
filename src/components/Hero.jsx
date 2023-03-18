import React, { useState } from "react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import sliderData from "../data/sliderData";

export default function Hero() {
  const [currentYear] = useState(new Date().getFullYear());

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class="${className}">${index + 1}</span>`;
    },
  };

  return (
    <Swiper
      pagination={pagination}
      modules={[Pagination]}
      className="mySwiper"
    >
      {sliderData.map((data) => (
        <SwiperSlide key={data.title}>
          <img src={data.src} alt={data.title} />
          <small>{currentYear} new collections</small>
          <h1 className="title">{data.title}</h1>
          <p>{data.subtitle}</p>
          <button>
            <a href="">Shop collections</a>
          </button>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
