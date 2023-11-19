import HeadingTitle from "../../../Components/HeadingTitle/HeadingTitle";
import featuresBanner from "../../../assets/home/featured.jpg";
const Features = () => {
  return (
    <div
      className="hero min-h-[840px]"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${featuresBanner})`,
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "600px",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="hero-overlay bg-opacity-80"></div>
      <div className="hero-Fcontent text-neutral-content">
        <div>
          <HeadingTitle
            mainTitle={"FROM OUR MENU"}
            subTitle={"---Check it out---"}
          ></HeadingTitle>
          <div className="flex gap-10 items-center md:flex-row flex-col">
            <div className="flex-1">
              <img src={featuresBanner} alt="" />
            </div>
            <div className="flex-1 space-y-4">
              <h2 className="text-2xl">
                March 20, 2023 <br />
                WHERE CAN I GET SOME?
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                voluptate facere, deserunt dolores maiores quod nobis quas
                quasi. Eaque repellat recusandae ad laudantium tempore
                consequatur consequuntur omnis ullam maxime tenetur.
              </p>
              <button className="btn btn-outline border-0 border-b-4 text-white border-white">
                READ MORE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
