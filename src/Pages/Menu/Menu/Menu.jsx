import Container from "../../../Components/Container/Container";
import CoverBanner from "../../../Components/CoverBanner/CoverBanner";
import HeadingTitle from "../../../Components/HeadingTitle/HeadingTitle";
import MenuCard from "../../../Components/MenuCard/MenuCard";
import useMenu from "../../../Hooks/useMenu";
import banner from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import MenuCategory from "../MenuCategory/MenuCategory";
const Menu = () => {
  const { menus } = useMenu();
  const offered = menus.filter((item) => item.category === "offered");
  const dessert = menus.filter((item) => item.category === "dessert");
  const soup = menus.filter((item) => item.category === "soup");
  const salad = menus.filter((item) => item.category === "salad");
  const pizza = menus.filter((item) => item.category === "pizza");

  return (
    <div className="">
      <CoverBanner
        img={banner}
        coverTitle={"OUR MENU"}
        coverDec={"Would you like to try a dish?"}
      ></CoverBanner>
      <div className="space-y-20 mb-20">
        {/* todays Offered Section */}
        <HeadingTitle
          mainTitle={"TODAY'S OFFER"}
          subTitle={"---Don't miss---"}
        ></HeadingTitle>
        <Container>
          <MenuCard menus={offered}></MenuCard>
        </Container>
        {/* Dessert Section */}
        <MenuCategory
          img={dessertImg}
          items={dessert}
          title={"dessert"}
          dec={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        ></MenuCategory>
        {/* Pizza Section */}
        <MenuCategory
          img={pizzaImg}
          items={pizza}
          title={"pizza"}
          dec={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        ></MenuCategory>
        {/* Salad Section */}
        <MenuCategory
          img={saladImg}
          items={salad}
          title={"salad"}
          dec={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        ></MenuCategory>
        <button className="btn btn-outline border-0 border-b-4 text-white border-white">
          READ MORE
        </button>

        {/* SOUPS Section */}
        <MenuCategory
          img={soupImg}
          items={soup}
          title={"soup"}
          dec={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        ></MenuCategory>
      </div>
    </div>
  );
};

export default Menu;
