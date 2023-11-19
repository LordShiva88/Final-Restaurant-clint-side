import { useEffect, useState } from "react";
import HeadingTitle from "../../../Components/HeadingTitle/HeadingTitle";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import { FaQuoteRight } from "react-icons/fa";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Review = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/review")
      .then((res) => res.json())
      .then((data) => {
        setTestimonials(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center m-20">
        <div className="rounded-full h-20 w-20 bg-violet-800 animate-ping"></div>
      </div>
    );
  }

  return (
    <div>
      <HeadingTitle
        subTitle={"---What Our Clients Say---"}
        mainTitle={"TESTIMONIALS"}
      ></HeadingTitle>

      <AwesomeSlider className="my-20 h-96" style={{ background: "white" }}>
        {testimonials.map((test) => (
          <div className="text-center max-w-xl space-y-3" key={test._id}>
            <div className="flex justify-center">
              <Rating
                style={{ maxWidth: 180 }}
                value={`${test.rating}`}
                readOnly
              />
            </div>
            <div className="flex justify-center">
              <FaQuoteRight className="text-[#D99904] text-5xl"></FaQuoteRight>
            </div>
            <p className="text-gray-300">{test.details}</p>
            <h2 className="text-[#D99904]  font-bold text-2xl">{test.name}</h2>
          </div>
        ))}
      </AwesomeSlider>
    </div>
  );
};

export default Review;
