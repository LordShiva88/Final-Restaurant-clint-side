const MenuCard = ({ menus }) => {
  console.log(menus);
  return (
    <div className="grid md:grid-cols-2">
      {menus.map((menu) => (
        <div key={menu._id}>
          <div className="flex gap-4">
            <div className="w-32">
              <img src={menu.image} alt="" className="" />
            </div>

            <div>
              <h2>{menu.name} ................</h2>
              <p>{menu.recipe}</p>
            </div>
            <p>${menu.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuCard;
