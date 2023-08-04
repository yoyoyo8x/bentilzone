import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import AboutUs from "./pages/about_pages/AboutUs";
import Commit from "./pages/about_pages/Commitment";
import WhyChooseUs from "./pages/about_pages/WhyChooseUs";
import PrivateRoute from "./config/PrivateRoute";
import GroupOrder from "./components/Service/GroupOrder";
import ShareBill from "./components/Service/ShareBill";
import { StateProvider } from "./components/Context/StateProvider";
import reducer from "./components/Context/reducer";
import { initialState } from "./components/Context/initialState";
import { useState, useEffect, useRef } from "react";
import { AuthProvider } from "./components/Context/AuthProvider";
import { auth } from "./config/fire";
import { onAuthStateChanged } from "firebase/auth";
import Ajax from "./components/AjaxLoader/AjaxLoader";
import Checkout from "./pages/Checkout";
import audio from "./audio.mp3";
import { VscMute } from "react-icons/vsc";
import { VscUnmute } from "react-icons/vsc";
import ProfileAcount from "./pages/ProfileAcount";



function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const [isPlaying, setIsPlaying] = useState(true);
  const [song, isSong] = useState(new Audio(audio));

  song.loop = true;
  song.volume = 0.7;

  useEffect(() => {
    const promise = song.play();
    if (promise !== undefined) {
      promise
        .then(() => {
          // Autoplay started
        })
        .catch((error) => {
          // Autoplay was prevented.
        });
    }
  }, []);

  const toggleAudio = () => {
    if (isPlaying) {
      song.pause();
    } else {
      song.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setIsLoading(false);
    });
  }, []);

  if (isLoading == true) {
    return <Ajax />;
  }

  return (
    <AuthProvider value={{ currentUser }}>
      <StateProvider initialState={initialState} reducer={reducer}>
        <div className="app tw-w-full tw-bg-primary">
          <Header />
          <Routes>
            <Route
              exact
              path="/*"
              element={<Home />}
              activeClassName="active"
            />
            <Route path="/about" element={<About />} activeClassName="active">
              <Route index element={<Navigate to="aboutus" />} />
              <Route path="aboutus" element={<AboutUs />} />
              <Route path="whychooseus" element={<WhyChooseUs />} />
              <Route path="commitment" element={<Commit />} />
            </Route>
            <Route path="/menu" element={<Menu />} activeClassName="active" />
            <Route
              path="/checkout"
              element={<Checkout />}
              activeClassName="active"
            />
            <Route
              path="/service"
              element={<Service />}
              activeClassName="active"
            >
              <Route index element={<Navigate to="grouporder" />} />
              <Route path="grouporder" element={<GroupOrder />} />
              <Route path="sharebill" element={<ShareBill />} />
            </Route>
            <Route
              path="/contact"
              element={<Contact />}
              activeClassName="active"
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/profile"
              element={<PrivateRoute Component={Profile} />}
            />
            <Route
              path="/profile/accounts"
              element={<ProfileAcount/>}
            />
          </Routes>
          <Footer />
        </div>
        {/* <audio id="myaudio" controls="true" autoPlay loop="loop">
          <source src={audio} type="audio/mp3" />
        </audio> */}
        <button className="audio-btn" onClick={toggleAudio}>
          {" "}
          {isPlaying ? (
            <div className="audio-icon">
              <VscUnmute />
            </div>
          ) : (
            <div className="audio-icon">
              <VscMute />
            </div>
          )}
        </button>
      </StateProvider>
    </AuthProvider>
  );
}

export default App;
