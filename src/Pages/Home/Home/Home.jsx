import CallUs from "../../../Components/CallUs/CallUs";
import Banner from "../Banner/Banner";
import BistroBoss from "../BristroBoss/BistroBoss";
import Chef from "../Chef/Chef";
import Features from "../Features/Features";
import Menu from "../Menu/Menu";
import OnlineOrder from "../OnlineOrder/OnlineOrder";
import Review from "../Review/Review";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="container mx-auto space-y-20">
        <OnlineOrder></OnlineOrder>
        <BistroBoss></BistroBoss>
        <Menu></Menu>
        <CallUs></CallUs>
        <Chef></Chef>
        <Features></Features>
        <Review></Review>
      </div>
    </div>
  );
};

export default Home;
