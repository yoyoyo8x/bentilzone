import React from "react";
import "./Main.css";
import { motion } from "framer-motion";
// import { Categories } from "./utils/data";
import { useState, useEffect } from "react";
import RowContainer from "./RowContainer";
// import { menuList } from "./utils/data";
import { IoFastFood } from "react-icons/io5";
import { IoSearchSharp } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
import { useSearchParams } from "react-router-dom";
import { getallCategory } from "../../services/category";
import { getallItem } from "../../services/item";

function MenuContainer({ flag }) {
  const [filter, setFilter] = useState("Chicken");
  const [isFilter, setIsFilter] = useState(false);
  const [result, setResult] = useState("");
  const [filterData, setFilterData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("query"));



  const [Categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    const { data } = await getallCategory();
    setCategories(data.datas);
  };
  
  const [menuList, setMenuList] = useState([]);
  useEffect(() => {
    getItems();
  }, []);

  const getItems = async () => {
    const { data } = await getallItem();
    setMenuList(data.data);
  };

  // Find item
  const handleSearch = () => {
    setQuery(result);
    
    // filter item
    setIsFilter(true);
    const newFilter = menuList?.filter((item) => {
      return (
        item.title.toLowerCase().includes(result.toLowerCase()) ||
        item.price.includes(result)
      );
    });
    console.log(newFilter);


    if (result === "") {
      setFilterData([]);
      setIsFilter(false);
      setSearchParams();
    } else {
      setSearchParams({
        keywords: result,
      });
      setFilterData(newFilter);
      setIsFilter(true);
    }
  };


  useEffect(() => {
    handleSearch();
  }, [result]);

  const clearSearch = () => {
    setFilterData([]);
    setResult("");
    setIsFilter(false);
  };

  return (
    <section className="Middle">
      <div className="middleContainer tw-flex-col">
        <div className="search-container tw-w-full tw-flex tw-justify-between">
          <p
            className="middleTitle tw-text-headingColor 
          before:tw-absolute before:tw-rounded-lg before:tw-w-16 before:tw-h-1 before:-tw-bottom-2 md:before:tw-left-0 
          before:tw-bg-gradient-to-tr tw-from-orange-400 tw-to-orange-600"
          >
            Our Hot Dishes
          </p>

          {/* Search Item */}
          <div className="tw-flex tw-relative">
            <input
              className="tw-px-4 tw-py-1 tw-text-[18px] tw-placeholder-slate-500 focus:tw-outline-none focus:tw-shadow-sm focus:tw-shadow-slate-800 tw-rounded-[2rem]"
              type="text"
              name=""
              id=""
              placeholder="Search..."
              value={result}
              onChange={(e) => setResult(e.target.value)}
            />
            <div className="tw-cursor-pointer tw-text-[24px] tw-absolute tw-right-2 tw-bottom-[6px]">
              {result === "" ? (
                <IoSearchSharp />
              ) : (
                <IoCloseSharp onClick={clearSearch} />
              )}
            </div>
          </div>
        </div>


        {/* Filter Item */}
        {isFilter ? (
          <div className=" tw-w-full">
            <RowContainer data={filterData} />
          </div>
        ) : (
          <div>
            <div
              className={`middleCat ${
                flag
                  ? "tw-overflow-x-scroll tw-scrollbar-none"
                  : "tw-overflow-x-hidden tw-flex-wrap tw-justify-center"
              } xl:tw-justify-center lg:tw-justify-start`}
            >
              {Categories &&
                Categories.map((category) => (
                  <motion.div
                    whileTap={{ scale: 0.75 }}
                    key={category.id}
                    className={`tw-group cateFilter
                            ${
                              filter === category.urlParamName
                                ? " tw-bg-cartNumBg"
                                : " tw-bg-card"
                            } tw-drop-shadow-xl hover:tw-bg-cartNumBg`}
                    onClick={() => setFilter(category.urlParamName)}
                  >
                    <div
                      className={`cateIcon tw-shadow-lg
                            ${
                              filter === category.urlParamName
                                ? "tw-bg-white"
                                : "tw-bg-cartNumBg"
                            } group-hover:tw-bg-white`}
                    >
                      <IoFastFood
                        className={`${
                          filter === category.urlParamName
                            ? "tw-text-textColor"
                            : "tw-text-white"
                        } tw-text-lg group-hover:tw-text-textColor`}
                      />
                    </div>
                    <p
                      className={`tw-text-sm 
                            ${
                              filter === category.urlParamName
                                ? "tw-text-white"
                                : "tw-text-textColor"
                            }                       
                            group-hover:tw-text-white`}
                    >
                      {category.name}
                    </p>
                  </motion.div>
                ))}
            </div>
            <div className="tw-w-full">
              <RowContainer
                flag={false}
                data={menuList?.filter((n) => n.category == filter)}
              />
            </div>{" "}
          </div>
        )}
      </div>
    </section>
  );
}
export default MenuContainer;
