import AwesomeSlider from "react-awesome-slider";
import styles from "react-awesome-slider/src/styles.scss";

const Testimonials = () => {
  return (
    <div>
      <AwesomeSlider cssModule={styles}>
        <div>
          <div data-src="/path/to/image-0.png" />
          <div data-src="/path/to/image-1.png" />
          <div data-src="/path/to/image-2.jpg" />
        </div>
        <div>
          <div data-src="/path/to/image-0.png" />
          <div data-src="/path/to/image-1.png" />
          <div data-src="/path/to/image-2.jpg" />
        </div>
        <div>
          <div data-src="/path/to/image-0.png" />
          <div data-src="/path/to/image-1.png" />
          <div data-src="/path/to/image-2.jpg" />
        </div>
        <div>
          <div data-src="/path/to/image-0.png" />
          <div data-src="/path/to/image-1.png" />
          <div data-src="/path/to/image-2.jpg" />
        </div>
      </AwesomeSlider>
    </div>
  );
};

export default Testimonials;
