import React, { useContext, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { integratedItems } from "../data";
import { Pagination, Autoplay } from "swiper/modules";
import { LanguageContext } from "../../lang/LanguageContext";
import IntegratedSliderContent from "./IntegratedSliderContent";

export default function IntegratedProductsSlider() {
  const { language } = useContext(LanguageContext);
  const [isRtl, setIsRtl] = useState(false);

  useEffect(() => {
    setIsRtl(language === "ar");
  }, [language]);

  return (
    <Swiper
      key={isRtl ? "rtl" : "ltr"}
      spaceBetween={30}
      grabCursor={true}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000 }}
      loop={true}
      modules={[Pagination, Autoplay]}
      className="mySwiper w-full py-14 lg:py-24"
      dir={isRtl ? "rtl" : "ltr"}
    >
      {integratedItems.map((integratedItem, index) => (
        <SwiperSlide key={index} className="p-3">
          <IntegratedSliderContent integratedCardData={integratedItem} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
