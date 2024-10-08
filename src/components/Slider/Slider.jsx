import React, { useContext, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Autoplay } from "swiper/modules";
import { LanguageContext } from "../../lang/LanguageContext";
import SliderContent from "./SliderContent";

export default function Slider() {
  const { language } = useContext(LanguageContext);
  const [isRtl, setIsRtl] = useState(false);

  useEffect(() => {
    setIsRtl(language === "ar");
  }, [language]);

  return (
    <Swiper
      key={isRtl ? "rtl" : "ltr"}
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000 }}
      loop={true}
      grabCursor={true}
      modules={[Pagination, Autoplay]}
      className="mySwiper w-full lg:h-[28rem]"
      dir={isRtl ? "rtl" : "ltr"}
    >
      <SwiperSlide>
        <SliderContent />
      </SwiperSlide>
      <SwiperSlide>
        <SliderContent />
      </SwiperSlide>
      <SwiperSlide>
        <SliderContent />
      </SwiperSlide>
      <SwiperSlide>
        <SliderContent />
      </SwiperSlide>
    </Swiper>
  );
}
