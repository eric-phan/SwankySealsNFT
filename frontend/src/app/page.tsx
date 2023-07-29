"use client";
import { useState } from "react";
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
    </div>
  );
};
// npm run dev to start server

export default Home;
