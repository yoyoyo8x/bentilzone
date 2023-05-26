import React from "react";
import { useAuthValue } from "../components/Context/AuthProvider";
import { AiFillEdit } from "react-icons/ai";
import Avatar from "../components/Main/img/avatar.png";
import "../css/Profile.css";
import { updateProfile, updateEmail } from "firebase/auth";
import { useState } from "react";
import { upload } from "../config/fire";

const Profile = () => {
  const { currentUser } = useAuthValue();
  console.log(currentUser);

  const [newName, setNewName] = useState(currentUser.displayName);
  const [newEmail, setNewEmail] = useState("");
  const [photoURL, setPhotoURL] = useState(currentUser.photoURL);
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(false);
  console.log(photo);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (photo !== null) {
      upload(photo, currentUser, setLoading);
    }
    updateProfile(currentUser, {
      displayName: newName,
    });
    updateEmail(currentUser, newEmail);
    setTimeout(() => window.location.reload(), 3000);
  };

  // useEffect(() => {
  //   setTimeout(() => window.location.reload(),2000)
  // },[]);

  return (
    <div className="body tw-pt-20 tw-px-6 md:tw-px-40 lg:tw-flex tw-gap-20 tw-justify-center">
      <div className="profile-container tw-flex tw-flex-col tw-items-center tw-gap-3">
        <img
          src={photoURL || Avatar}
          alt=""
          className="tw-w-10 tw-min-w-[200px] tw-h-10 tw-min-h-[200px] tw-drop-shadow-2xl tw-rounded-full tw-cursor-pointer tw-mb-5 tw-relative"
        />
        <label className="edit-img">
          <AiFillEdit />
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setPhoto(e.target.files[0])}
          />
          Edit
        </label>
        {/* <button onClick={()=>setPhotoURL(null)}>Remove</button> */}
        <div className="tw-text-xl tw-w-[300px] tw-text-center tw-font-medium">
          {currentUser.displayName ||
            currentUser.email.replace(/(@[a-z0-9.-]+\.[a-z]{2,})/g, "")}
        </div>
        <div className="tw-text-xl">{currentUser.email}</div>
      </div>{" "}
      <div className="edit">
        <div className="tw-text-3xl tw-font-bold tw-mb-5 tw-text-center lg:tw-text-left">
          Edit Account
        </div>
        <form action="submit" className="edit-form" onSubmit={handleSubmit}>
          <div className="tw-text-xl tw-mb-2 tw-font-medium">Your Name:</div>
          <input
            type="text"
            placeholder="Please enter your new name."
            onChange={(e) => setNewName(e.target.value)}
          />
          <div className="tw-text-xl tw-mb-2 tw-font-medium">Your Email:</div>
          <input
            type="email"
            placeholder="Please enter your new email."
            onChange={(e) => setNewEmail(e.target.value)}
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
  );
};

export default Profile;
