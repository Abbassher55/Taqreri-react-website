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
      <button className="absolute bottom-0 right-1 w-2/12 rounded-2xl bg-theme-blue px-3 py-4 text-lg font-bold text-white">
        {content.start_now}
      </button>
    </div>
  );
}
