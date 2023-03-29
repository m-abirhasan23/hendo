import React, { useState } from "react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
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
   
      modules={[Autoplay]}
      loop={true}
      className="mySwiper"
     autoplay={{delay:15000,disableOnInteraction:false}}
    >
      {sliderData.map((data) => (
        <SwiperSlide key={data.title}>
          <img src={data.src} alt={data.title} className="slider-img"/>

          <div className="slider-info">
          <small>{currentYear} new collections</small>
          <h1 className="title">{data.title}</h1>
          <p>{data.subtitle}</p>
         
            <button className="btn-primary">Shop collections</button>
          
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
