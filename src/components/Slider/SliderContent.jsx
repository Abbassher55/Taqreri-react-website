import sliderImage from "../../assets/imgs/slider-img-1.png";
import React, { useContext } from "react";
import { LanguageContext } from "../../lang/LanguageContext";

export default function SliderContent() {
  const { content } = useContext(LanguageContext);
  return (
    <div className="relative h-28 md:h-[26rem]">
      <img
        src={sliderImage}
        className="absolute bottom-0 w-full"
        alt="Slider"
      />
      <button className="absolute bottom-0 right-0 rounded-md bg-theme-blue p-2 text-xs font-bold text-white md:right-1 md:w-2/12 md:rounded-2xl md:px-3 md:py-4 md:text-lg">
        {content.start_now}
      </button>
    </div>
  );
}
