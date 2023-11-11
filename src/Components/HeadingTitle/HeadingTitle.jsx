

const HeadingTitle = ({subTitle, mainTitle}) => {
  return (
    <div className="flex justify-center mb-10">
      <div className="text-center">
      <h3 className="text-[#D99904] italic mb-4">{subTitle}</h3>
      <h1 className="border-y-4 w-96 p-5 text-4xl">{mainTitle}</h1>
      </div>
    </div>
  );
};

export default HeadingTitle;