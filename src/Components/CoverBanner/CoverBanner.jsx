const CoverBanner = ({ img, coverTitle, coverDec }) => {
  return (
    <div
      className="hero md:min-h-[700px] h-auto"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${img})`,
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "600px",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="hero-overlay bg-opacity-80"></div>
      <div
        style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
        className="w-3/4 text-white"
      >
        <div className="p-20 text-center max-w-2xl mx-auto">
          <h1 className="text-5xl font-bold mb-5">{coverTitle}</h1>

            <p className="">{coverDec}</p>
        </div>
      </div>
    </div>
  );
};

export default CoverBanner;
