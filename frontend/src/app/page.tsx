"use client";
import { useState } from "react";
import { Image } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import MainMint from "./components/MainMint";
import "./app.css";

const Home = () => {
  const [accounts, setAccounts] = useState([]);

  return (
    <div className="overlay">
      <div className="App">
        <Navbar accounts={accounts} setAccounts={setAccounts} />
        <MainMint accounts={accounts} setAccounts={setAccounts} />
      </div>
      <div className="moving-background"></div>
      {/* Use the Image component to display your image */}
      {/* <Image src="./assets/background/ocean-bg.gif" alt="Background" /> */}
    </div>
  );
};

export default Home;
