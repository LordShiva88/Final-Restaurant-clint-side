import bistroCover from "../../../assets/home/chef-service.jpg";
const BistroBoss = () => {
  return (
    <div
      className="hero h-[572px]"
      style={{
        backgroundImage: `url(${bistroCover})`,
        backgroundPosition: "fixed",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className=" bg-white text-black p-20">
          <h1 className="mb-5 text-5xl font-bold">Bistro Boss</h1>
          <p className="mb-5 max-w-[700px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus, libero accusamus laborum deserunt ratione dolor
            officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
            nihil iusto ducimus incidunt quibusdam nemo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BistroBoss;
