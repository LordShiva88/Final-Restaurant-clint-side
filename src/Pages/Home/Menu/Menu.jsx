
import HeadingTitle from "../../../Components/HeadingTitle/HeadingTitle";
import useMenu from "../../../Hooks/useMenu";
import MenuCard from "../../../Components/MenuCard/MenuCard";


const Menu = () => {
  const {menus, loading} = useMenu()
  const popular = menus.filter(menu => menu.category === 'popular')

  
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="rounded-full h-20 w-20 bg-violet-800 animate-ping"></div>
      </div>
    );
  }
  
  return (
    <div>
      <HeadingTitle
      subTitle={'---Check it out---'}
      mainTitle={'FROM OUR MENU'}
      ></HeadingTitle>
      <MenuCard
      menus={popular}
      ></MenuCard>
    </div>
  );
};

export default Menu;