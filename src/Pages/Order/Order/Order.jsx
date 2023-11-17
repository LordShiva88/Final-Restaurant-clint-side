import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import CoverBanner from "../../../Components/CoverBanner/CoverBanner";
import banner from "../../../assets/shop/banner2.jpg";
import { useState } from "react";

import "./order.css";
import useMenu from "../../../Hooks/useMenu";
import Container from "../../../Components/Container/Container";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";
import "react-tabs/style/react-tabs.css";
import { Helmet } from "react-helmet";

const Order = () => {
  const tabs = ["salad", "pizza", "dessert", "soup", "drinks"];
  const { category } = useParams();
  const initialIndex = tabs.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const { menus } = useMenu();
  const drinks = menus.filter((item) => item.category === "drinks");
  const dessert = menus.filter((item) => item.category === "dessert");
  const soup = menus.filter((item) => item.category === "soup");
  const salad = menus.filter((item) => item.category === "salad");
  const pizza = menus.filter((item) => item.category === "pizza");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss || Order</title>
      </Helmet>
      <CoverBanner
        img={banner}
        coverTitle={"OUR SHOP"}
        coverDec={"Would you like to try a dish?"}
      ></CoverBanner>
      <Container>
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList className="flex justify-center mt-10 gap-5">
            {tabs.map((tab, index) => (
              <Tab
                key={index}
                className={`${
                  category === tab
                    ? "bg-yellow-500 text-white btn"
                    : "bg-white text-gray-800 btn"
                }`}
              >
                {tab}
              </Tab>
            ))}
          </TabList>
          <div className="my-20">
            <TabPanel>
              <OrderTab items={salad}></OrderTab>
            </TabPanel>
            <TabPanel>
              <OrderTab items={pizza}></OrderTab>
            </TabPanel>
            <TabPanel>
              <OrderTab items={dessert}></OrderTab>
            </TabPanel>
            <TabPanel>
              <OrderTab items={soup}></OrderTab>
            </TabPanel>
            <TabPanel>
              <OrderTab items={drinks}></OrderTab>
            </TabPanel>
          </div>
        </Tabs>
      </Container>
    </div>
  );
};

export default Order;
