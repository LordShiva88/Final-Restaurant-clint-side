const OrderCard = ({ items }) => {
  return (
    <div className="card lg:w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={items.image} alt="Shoes" className="rounded-t-xl" />
      </figure>
      <p className="absolute top-2 right-3 bg-black text-white px-2 rounded-full font-bold">$ {items.price}</p>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{items.name}</h2>
        <p>{items.recipe}</p>
        <div className="card-actions">
          <button className="border-b-4 border-0 border-[#D99904] rounded-lg hover:bg-black transition-all text-[#D99904] font-bold btn">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
