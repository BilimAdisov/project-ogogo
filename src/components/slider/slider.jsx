// import React, { useRef, useState } from "react";?
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import './slider.scss'

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { HiChevronRight } from "react-icons/hi";

export function Slider() {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={false}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide className="slid-1">
          <h3>Успей забронировать!</h3>
          <h2>Ledger Nano S Plus</h2>
          <h4>Уже в наличии!</h4>
          <div className="button">
            <button className="btn">Узнать подробнее</button>
            <div className="strelka"> 
              <HiChevronRight className="right"/>
            </div> 
          </div>
        </SwiperSlide>
        <SwiperSlide className="slid-2">
          <h3>Уже в надичии</h3>
          <h2>Dji Osmo Mobile 6</h2>
          <div className="button">
            <button className="btn">Узнать подробнее</button>
            <div className="strelka"> 
              <HiChevronRight className="right"/>
            </div> 
          </div>
        </SwiperSlide>
        <SwiperSlide className="slid-3">
          <h3>Принимаем заказы</h3>
          <h2>На продукцию Dyson</h2>
          <div className="button">
            <button className="btn">Узнать подробнее</button>
            <div className="strelka"> 
              <HiChevronRight className="right"/>
            </div> 
          </div>
        </SwiperSlide>
        <SwiperSlide className="slid-4">
        <div className="button">
            <button className="btn">Узнать подробнее</button>
            <div className="strelka"> 
              <HiChevronRight className="right"/>
            </div> 
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Slider