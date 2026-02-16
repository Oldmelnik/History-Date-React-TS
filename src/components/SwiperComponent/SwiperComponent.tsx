import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./style.module.scss";
import "swiper/scss";
import arrow from "../../assets/arrow.svg";

import { Pagination, Navigation } from "swiper/modules";
import { useContext, useState } from "react";
import { DataContext } from "../../context";
import { INITIAL_INTERVALS } from "../../fixtures/fixtures";

export default function SwiperComponent() {
  const { current } = useContext(DataContext);
  const [controlledSwiper, setControlledSwiper] = useState<any>();
  const data = INITIAL_INTERVALS[current].data;

  return (
    <>
      <Swiper
        pagination={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        className={styles.swiper}
        breakpoints={{
          320: {
            slidesPerView: "auto",
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 100,
          },
        }}
        loop={true}
        onSwiper={setControlledSwiper}
      >
        {data?.map((d, i) => (
          <SwiperSlide key={i}>
            <p>{d.year}</p>
            <p>{d.text}</p>
          </SwiperSlide>
        ))}
      </Swiper>
      {data.length > 3 && (
        <>
          <div
            className="swiper-button-next"
            onClick={() => controlledSwiper?.slidePrev(250)}
          >
            <img src={arrow} alt="" />
          </div>
          <div
            className="swiper-button-prev"
            onClick={() => controlledSwiper?.slideNext(250)}
          >
            <img src={arrow} alt="" />
          </div>
        </>
      )}
    </>
  );
}
