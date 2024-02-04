"use client"
import { useState, useRef } from 'react';
import styles from './Hero.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';

import { Autoplay, EffectFade, Pagination } from "swiper";
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/effect-fade";



export default function Hero() {
  const swiperRef = useRef(null);
  const [swiper, setSwiper] = useState(null);
  const [numberOfSlides, setNumberOfSlides] = useState(0);
  const [activeSlideIndex, setActiveSlideIndex] = useState(1);

  const handleSwiper = (swiper) => {
    setSwiper(swiper);
    setNumberOfSlides(swiper.slides.length);
  };
  const handleSlideChange = () => {
    setActiveSlideIndex(swiper.realIndex + 1);
  };
  return <>
    <div className={styles.heroSec}>
      <div className={styles.gradient}></div>
        <div className={styles.pagination}>
          <div className={styles.paginationBTN}>
            <div className={styles.navLeftBTN} onClick={() => swiperRef.current.swiper.slidePrev()}>
              <svg xmlns="http://www.w3.org/2000/svg" width="25.983" height="25.262" viewBox="0 0 25.983 25.262">
                <path id="Left" d="M10.217,15.229H29.983v3.248H10.217l8.711,8.711-2.3,2.3L4,16.853,16.631,4.222l2.3,2.3Z" transform="translate(-4 -4.222)" fill="#fff"/>
              </svg>
            </div>
            <div className={styles.navRightBTN} onClick={() => swiperRef.current.swiper.slideNext()}>
              <svg xmlns="http://www.w3.org/2000/svg" width="25.983" height="25.262" viewBox="0 0 25.983 25.262">
                <path id="Right" d="M23.766,15.229,15.055,6.518l2.3-2.3L29.983,16.853,17.352,29.484l-2.3-2.3,8.711-8.711H4V15.229Z" transform="translate(-4 -4.222)" fill="#fff"/>
              </svg>
            </div>
          </div>
          <div className={styles.paginationNUM}>
            <span className={styles.activeNUM}>{activeSlideIndex}</span>
            <span className={styles.slash}>/</span>
            <span className={styles.totalNUM}>{numberOfSlides}</span>
          </div>
        </div>
      <div>
      <Swiper
          ref={swiperRef}
          onSwiper={handleSwiper}
          onSlideChange={handleSlideChange}
          spaceBetween={100}
          slidesPerView={1}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          effect={"fade"}
          loop={true}
          modules={[Autoplay, EffectFade, Pagination]}
          className={styles.swiperSLD}
        >
           <SwiperSlide >
            <div className={styles.slide1}></div>
           </SwiperSlide>
           <SwiperSlide >
            <div className={styles.slide2}></div>
           </SwiperSlide>
           <SwiperSlide >
            <div className={styles.slide3}></div>
           </SwiperSlide>
      </Swiper>
      </div>
    </div>
  </>
}
