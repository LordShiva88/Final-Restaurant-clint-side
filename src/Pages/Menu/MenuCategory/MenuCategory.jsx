import Container from "../../../Components/Container/Container";
import CoverBanner from "../../../Components/CoverBanner/CoverBanner";
import MenuCard from "../../../Components/MenuCard/MenuCard";

const MenuCategory = ({ items, img, title, dec }) => {
  return (
    <div className="space-y-10">
      <CoverBanner img={img} coverTitle={title} coverDec={dec}></CoverBanner>
      <Container>
        <MenuCard menus={items} title={title}></MenuCard>
      </Container>
    </div>
  );
};

export default MenuCategory;
