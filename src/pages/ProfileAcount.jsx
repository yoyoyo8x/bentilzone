import React, { useEffect, useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import avatar from "../images/avatar.png"
import { motion } from "framer-motion";
import { MdFastfood, MdCloudUpload, MdDelete, MdFoodBank, MdAttachMoney } from 'react-icons/md'
import { getallCategory } from "../services/category";
import Loader from "./Loader";
import { addItem } from "../services/item";





const ProfileMember = () => {
  const [fields, setFields] = useState(false);
  const [alertStatus, setAlerStatus] = useState("danger");
  const [title, setTitle] = useState("");
  const [isLoading, setIsloading] = useState(false);
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState(null);
  const [msg, setMsg] = useState(null);
  const [calories, setCalories] = useState("");



  const [imageAsset, setImageAsset] = useState("");
  const uploadImage = (e) => {
    const file = e.target.files[0];
    TransformFile(file)
    setIsloading(true);
  }
  const TransformFile = (file) => {
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setImageAsset(reader.result);
        setIsloading(false);
        setFields(true);
        setMsg("Upload success");
        setAlerStatus("success");
        setTimeout(() => {
          setFields(false);
          setIsloading(false);
        }, 3000)
      }
    } else {
      setImageAsset("")
      setFields(true);
      setMsg("Error when upload");
      setAlerStatus("danger");
      setTimeout(() => {
        setFields(false);
        setIsloading(false);
      }, 3000)
    }
  }


  const deleteImage = () => {
    setImageAsset(null);
    setIsloading(false);
    setFields(true);
    setMsg("Delete success");
    setAlerStatus("success")
    setTimeout(() => {
      setFields(false);
    }, 3000);
  }

  const saveDetails = async (e) => {
    e.preventDefault()
    try {
      if ((!title || !calories || !imageAsset || !price || !category)) {
        setFields(true);
        setMsg("Empty");
        setAlerStatus("danger");
        setTimeout(() => {
          setFields(false);
          setIsloading(false);
        }, 3000)
      } else {
        const data = {
          id: `${Date.now()}`,
          title: title,
          image: imageAsset,
          category: category,
          calories: calories,
          qty: 1,
          price: price,
          categoryId: cateId._id
        }
        const { dataItem } = await addItem(data)
        console.log(dataItem)
        setIsloading(false)
        setFields(true);
        setMsg("Data Upload success");
        clearData();
        setAlerStatus("success")
        setTimeout(() => {
          setFields(false);
        }, 3000);
      }
    } catch (error) {
      console.error("Đã xảy ra lỗi khi tải sản phẩm:", error);
    }
  }
  const clearData = () => {
    setTitle("")
    setImageAsset(null)
    setCalories("")
    setPrice("")
    setCategory("")
  }

  const [formData, setFormData] = useState([])
  useEffect(() => {
    const dataUser = localStorage.getItem('user')
    if (dataUser) {
      setFormData(JSON.parse(dataUser))
    }
  }, [])
  console.log(formData)

  const [Categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    const { data } = await getallCategory();
    setCategories(data.datas);
  };

  const cateId = Categories.find(({ name }) => name === category)
  // console.log(cateId._id)
  console.log(typeof (imageAsset))



  return (
    <div>
      <div className="body tw-pt-20 tw-px-6 md:tw-px-40 lg:tw-flex tw-gap-20 tw-justify-center">
        <div className="profile-container tw-flex tw-flex-col tw-items-center tw-gap-3">
          <img
            src={avatar}
            alt=""
            className="tw-w-10 tw-min-w-[200px] tw-h-10 tw-min-h-[200px] tw-drop-shadow-2xl tw-rounded-full tw-cursor-pointer tw-mb-5 tw-relative"
          />
          <label className="edit-img">
            <AiFillEdit />
            <input
              type="file"
              accept="image/*"
            // onChange={(e) => setPhoto(e.target.files[0])}
            />
            Edit
          </label>
          {/* <button onClick={()=>setPhotoURL(null)}>Remove</button> */}
          <div className="tw-text-xl tw-w-[300px] tw-text-center tw-font-medium">
            {formData.displayName ||
              formData.email}
          </div>
          <div className="tw-text-xl">{formData.role}</div>
        </div>{" "}
        <div className="edit">
          <div className="tw-text-3xl tw-font-bold tw-mb-5 tw-text-center lg:tw-text-left">
            Edit Account
          </div>
          <form action="submit" className="edit-form"
          // onSubmit={handleSubmit}
          >
            <div className="tw-text-xl tw-mb-2 tw-font-medium">Your Name:</div>
            <input
              type="text"
              placeholder="Please enter your new name."
            // onChange={(e) => setNewName(e.target.value)}
            />
            <div className="tw-text-xl tw-mb-2 tw-font-medium">Your Email:</div>
            <input
              type="email"
              placeholder="Please enter your new email."
            // onChange={(e) => setNewEmail(e.target.value)}
            />
            <div className="tw-text-red-500 tw-mb-3">
              *You will be logged out of your account after changing your email.{" "}
            </div>
            <button type="submit" className="submit-btn">
              Save Profile
            </button>
          </form>
        </div>


      </div>


      {formData.role === 'admin' ? (
        <div className="tw-w-full tw-min-h-[500px] tw-flex tw-items-center tw-flex-col tw-justify-center">
          <div className="tw-text-3xl tw-font-bold tw-mb-5 tw-text-center lg:tw-text-left">Update Item</div>
          <div className="tw-w-[90%] md:tw-w-[75%] tw-border tw-border-gray-200 tw-rounded-lg 
          tw-p-4 tw-flex-col tw-items-center tw-justify-center tw-gap-4">
            {
              fields && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className={`tw-w-full tw-p-2 tw-rounded-1g tw-text-center tw-text-1g tw-font-semibold 
               ${alertStatus === 'danger' ?
                      'tw-bg-red-400 tw-text-red-800' :
                      'tw-bg-emerald-400 tw-text-emerald-800'}`}
                >
                  {msg}
                </motion.p>
              )}
            <div className="tw-w-full tw-py-2 tw-border-b tw-border-gray-300 tw-flex tw-items-center tw-gap-2">
              <MdFastfood className="tw-text-x1 tw-text-gray-700" />
              <input
                type="text"
                required value={title}
                placeholder="Give me a title..."
                className="tw-w-full tw-h-full tw-text-lg tw-bg-transparent tw-outline-none tw-border-none placeholder:tw-text-gray-500 tw-text-textColor"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="tw-w-full">
              <select
                onChange={(e) => setCategory(e.target.value)}
                className="tw-outline-none tw-w-full tw-text-base tw-border-b-2 tw-border-gray-200 tw-p-2 tw-rounded-md tw-cursor-pointer"
              >
                <option value="other" className="tw-bg-white">Select Category
                </option>
                {Categories && Categories.map(item => (
                  <option
                    key={item.id}
                    className="tw-text-base tw-border-0 tw-outline-none tw-capitalize tw-bg-white tw-text-headingColor"
                    value={item.urlParamName}
                  >{item.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="group tw-flex tw-justify-center tw-items-center tw-flex-col tw-border-2 tw-border-dotted tw-border-gray-300 tw-w-full tw-h-225 md:tw-h-420 tw-cursor-pointer tw-rounded-lg">
              {isLoading ? <Loader /> : <>
                {!imageAsset ? <>
                  <label className="tw-w-full tw-h-full tw-flex tw-flex-col tw-items-center tw-justify-center tw-cursor-pointer">
                    <div className="tw-w-full tw-h-full tw-flex tw-flex-col tw-items-center tw-justify-center tw-cursor-pointer">
                      <MdCloudUpload className="tw-text-gray-500 tw-text-3xl hover:tw-text-gray-700" />
                      <p className="tw-text-gray-500 hover:tw-text-gray-700">Click here to upload</p>
                    </div>
                    <input type="file" name="uploadimage" accept="image/*"
                      onChange={uploadImage}
                      className="tw-w-0 tw-h-0" />
                  </label>
                </> : <>
                  <div className="tw-relative tw-h-full">
                    <img
                      src={imageAsset} alt="uploaded image"
                      className="tw-w-full tw-h-full tw-object-cover"
                    />
                    <button
                      type="button"
                      className=" tw-absolute tw-bottom-3 tw-right-3 tw-p-3 tw-rounded-full tw-bg-red-500 tw-text-x1 tw-cursor-pointer tw-outline-none hover:tw-shadow-md tw-duration-500 tw-transition-all tw-ease-in-out"
                      onClick={deleteImage}
                    ><MdDelete className="tw-text-white" /></button>
                  </div>
                </>}
              </>}
            </div>

            <div className="tw-w-full tw-flex tw-flex-col md:tw-flex-row tw-items-center tw-gap-3">
              <div className="tw-w-full tw-py-2 tw-border-b tw-border-gray-300 tw-flex tw-items-center tw-gap-2">
                <MdFoodBank className="tw-text-gray-700 tw-text-2xl" />
                <input
                  type="text"
                  required
                  placeholder="Calories"
                  value={calories}
                  className="tw-w-full tw-h-full tw-text-lg tw-bg-transparent tw-outline-none tw-border-none placeholder:tw-text-gray-400 tw-text-textColor"
                  onChange={(e) => setCalories(e.target.value)}
                />
              </div>
              <div className="tw-w-full tw-py-2 tw-border-b tw-border-gray-300 tw-flex tw-items-center tw-gap-2">
                <MdAttachMoney className="tw-text-gray-700 tw-text-2xl" />
                <input
                  type="text"
                  required
                  placeholder="Price"
                  value={price}
                  className="tw-w-full tw-h-full tw-text-lg tw-bg-transparent tw-outline-none tw-border-none placeholder:tw-text-gray-400 tw-text-textColor"
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
            </div>
            <div className="tw-flex tw-items-center tw-w-full">
              <button type="button" className="tw-ml-0 md:tw-ml-auto tw-w-full md:tw-w-auto tw-border-none tw-outline-none tw-bg-emerald-500 tw-px-12 tw-py-2 tw-rounded-lg tw-text-white tw-font-semibold"
                onClick={saveDetails}
              >Save</button>
            </div>
          </div>
        </div>
      ) : (null)}
    </div>

  )
}
export default ProfileMember