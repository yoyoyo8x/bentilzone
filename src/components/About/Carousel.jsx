import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "../About/Carousel.css";

// import required modules
import { Pagination } from "swiper";

export default function CarouselAbout() {
  const carouselDt = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=781&q=80",
      motto: "Order anything, anytime, anywhere.",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      motto: "The easiest way to get what you want.",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      motto: "Your personal assistant for ordering online.",
    },
  ];

  return (
    <div className="tw-w-full ">
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {carouselDt.map((item) => (
          <SwiperSlide>
            <img src={item.url} alt="" />
            <div className="veil-carousel">
              <span className="carousel-motto md:tw-text-3xl tw-text-xl tw-font-bold tw-tracking-widest tw-text-left">
                {item.motto}
              </span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
