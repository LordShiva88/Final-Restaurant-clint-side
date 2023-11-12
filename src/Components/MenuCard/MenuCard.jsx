const MenuCard = ({ menus }) => {
  return (
    <div className="grid md:grid-cols-2 gap-5">
      {menus.map((menu) => (
        <div key={menu._id}>
          <div className="flex gap-2 justify-between">
            <div className="">
              <img style={{borderRadius:'0px 200px 200px 200px', }} src={menu.image} alt="" className="max-w-[130px]" />
            </div>

            <div>
              <h2 className="text-xl">{menu.name} ................</h2>
              <p>{menu.recipe}</p>
            </div>
            <p className="text-[#D99904]">${menu.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuCard;
