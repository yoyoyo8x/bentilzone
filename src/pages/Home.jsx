import React from "react";
import MainContainer from "../components/Main/MainContainer";

const Home = () => {
  return (
    <>
      <div className="body">
        <MainContainer />
      </div>
      <div id="google-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.588035353429!2d106.69702801458897!3d10.76619899232849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f15485e6187%3A0xd0c74ec498b1209!2sQuince%20Saigon!5e0!3m2!1sen!2s!4v1670342110107!5m2!1sen!2s"
          title="GoogleMap"
          width="100%"
          height="400px"
          style={{ border: 0, marginBottom: "30px" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default Home;
