import sliderImage from "../../assets/imgs/slider-img-1.png";
import React, { useContext } from "react";
import { LanguageContext } from "../../lang/LanguageContext";

export default function SliderContent() {
  const { content } = useContext(LanguageContext);
  return (
    <div className="relative h-28 lg:h-[26rem]">
      <img
        src={sliderImage}
        className="absolute bottom-0 w-full object-cover"
        alt="Slider"
      />
      <button className="absolute bottom-0 right-0 rounded-md bg-theme-blue px-2 py-1 text-xs font-bold text-white md:w-2/12 lg:right-1 lg:rounded-2xl lg:px-3 lg:py-4 lg:text-lg rtl:w-3/12 rtl:md:w-2/12">
        {content.start_now}
      </button>
    </div>
  );
}
