import sliderImage from "../../assets/imgs/slider-img-1.png";

export default function SliderContent() {
  return (
    <div className="relative h-48 md:h-[26rem]">
      <img
        src={sliderImage}
        className="absolute bottom-0 w-full"
        alt="Slider"
      />
      <button className="absolute bottom-0 right-1 w-2/12 rounded-md bg-theme-blue px-3 py-4 text-lg font-bold text-white">
        Start now
      </button>
    </div>
  );
}
