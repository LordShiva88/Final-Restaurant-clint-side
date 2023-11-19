import OrderCard from "../OrderCard/OrderCard";

const OrderTab = ({ items }) => {
  return (
    <div className="grid lg:grid-cols-3 gap-5 md:grid-cols-2">
      {items.map((item) => (
        <OrderCard items={item} key={item._id}></OrderCard>
      ))}
    </div>
  );
};

export default OrderTab;
