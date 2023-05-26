import React from "react";
import { useAuthValue } from "../components/Context/AuthProvider";
import { AiFillEdit } from "react-icons/ai";
import Avatar from "../components/Main/img/avatar.png";
import "../css/Profile.css";
import { updateProfile, updateEmail } from "firebase/auth";
import { useState, useEffect } from "react";

const Profile = () => {
  const { currentUser } = useAuthValue();
  console.log(currentUser);

  const [newName, setNewName] = useState(currentUser.displayName);
  const [newEmail, setNewEmail] = useState("");
  const [newImg, setNewImg] = useState(currentUser.photoURL);

  const handleSubmit = async (e) => {
    e.preventDefault();
    updateProfile(currentUser, {
      displayName: newName,
    });
    updateEmail(currentUser, newEmail);
    window.location.reload();
  };

  // useEffect(() => {},[currentUser.displayName,currentUser.email]);

  return (
    <div className="body tw-pt-20 tw-px-6 md:tw-px-40 lg:tw-flex tw-gap-20 tw-justify-center">
      <div className="profile-container tw-flex tw-flex-col tw-items-center tw-gap-3">
        <img
          src={currentUser.photoURL || Avatar}
          alt=""
          className="tw-w-10 tw-min-w-[200px] tw-h-10 tw-min-h-[200px] tw-drop-shadow-2xl tw-rounded-full tw-cursor-pointer tw-object-contain tw-mb-5 tw-relative"
        />
        <button className="edit-img">
          <AiFillEdit />
          Edit
        </button>
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
