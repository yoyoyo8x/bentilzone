import React from "react";
import HomeContainer from "./HomeContainer";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { motion } from "framer-motion";
import "./Main.css";
import RowContainer from "./RowContainer";
import { useState, useEffect } from "react";
// import { menuList } from "./utils/data";
import MenuContainer from "./MenuContainer";
import { useStateValue } from "../Context/StateProvider";
import CartContainer from "../Header/CartContainer";
import PopupDelete from "../Header/Popupdelete";
import { getallItem } from "../../services/item";


function MainContainer() {
  const [{ cartShow }, dispatch] = useStateValue();
  const [dialog,setDialog] = useState({
    isLoading: false
  });
// current state và dispatch function
  const [scrollValue, setScrollValue] = useState(0);
  useEffect(() => {}, [scrollValue, cartShow]);



// Getitem
  const [menuList, setMenuList] = useState([]);
  useEffect(() => {
    getItems();
  }, []);

  const getItems = async () => {
    const { data } = await getallItem();
    setMenuList(data.data);
  };
  const data = menuList.filter(item => item.category === 'Fruits')




  return (
    <main id="Main" className="md:tw-px-16 tw-w-full">
      <div className="MainContainer">
        <HomeContainer />
        <section className="Middle">
          <div className="middleContainer">
            <p
              className="middleTitle tw-text-headingColor 
                    before:tw-absolute before:tw-rounded-lg before:tw-w-32 before:tw-h-1 before:-tw-bottom-2 before:tw-left-0 
                    before:tw-bg-gradient-to-tr tw-from-orange-400 tw-to-orange-600"
            >
              Our fresh & healthy fruits
            </p>
            <div className="middleElement tw-hidden">
              <motion.div
                whileTap={{ scale: 0.75 }}
                className="middleButton tw-bg-orange-300 hover:tw-bg-orange-500 hover:tw-shadow-lg"
                onClick={() => setScrollValue(scrollValue - 200)}
              >
                <MdChevronLeft className="tw-text-lg tw-text-white" />
              </motion.div>
              <motion.div
                whileTap={{ scale: 0.75 }}
                className="middleButton tw-bg-orange-300 hover:tw-bg-orange-500 hover:tw-shadow-lg"
                onClick={() => setScrollValue(scrollValue + 200)}
              >
                <MdChevronRight className="tw-text-lg tw-text-white" />
              </motion.div>
            </div>
          </div>
          <RowContainer
            scrollValue={scrollValue}
            flag={true}
            data={data}
          />
        </section>
        <MenuContainer flag={true} />
        {cartShow && <CartContainer />}
        {dialog.isLoading &&  <PopupDelete/>}
      </div>
    </main>
  );
}
export default MainContainer;
