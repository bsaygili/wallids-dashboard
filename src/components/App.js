import "../styles/App.css";
import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import InfoCards from "./InfoCards";
import SecurityActvity from "./SecurityActvity";

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <InfoCards />
      <SecurityActvity />
    </div>
  );
}

export default App;
