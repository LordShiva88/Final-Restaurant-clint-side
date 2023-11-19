import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import img1 from "../../../assets/home/slide1.jpg";
import img2 from "../../../assets/home/slide2.jpg";
import img3 from "../../../assets/home/slide3.jpg";
import img4 from "../../../assets/home/slide4.jpg";
import img5 from "../../../assets/home/slide5.jpg";
import HeadingTitle from "../../../Components/HeadingTitle/HeadingTitle";

const OnlineOrder = () => {
  return (
    <div className="mb-20">
      <HeadingTitle
        subTitle={"---From 11:00am to 10:00pm---"}
        mainTitle={"ORDER ONLINE"}
      ></HeadingTitle>

      <Swiper
        spaceBetween={10}
        autoplay={{ delay: 1000 }}
        breakpoints={{
          640: {
            width: 640,
            slidesPerView: 1,
          },
          768: {
            width: 768,
            slidesPerView: 2,
          },
        }}
      >
        <SwiperSlide>
          <img src={img1} alt="" className="w-full" />
          <h3 className="text-2xl font-semibold -mt-12 mb-4 text-center text-white uppercase">
            Salads
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="" className="w-full" />
          <h3 className="text-2xl font-semibold -mt-12 text-center text-white uppercase">
            Pizza
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="" className="w-full" />
          <h3 className="text-2xl font-semibold -mt-12 text-center text-white uppercase">
            Soup
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="" className="w-full" />
          <h3 className="text-2xl font-semibold -mt-12 text-center text-white uppercase">
            desserts
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} alt="" className="w-full" />
          <h3 className="text-2xl font-semibold -mt-12 text-center text-white uppercase">
            Salads
          </h3>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default OnlineOrder;
