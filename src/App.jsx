import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Video from "./pages/Videos/Video";
const App = () => {
  const [sidebarr, setSidebarr] = useState(true);

  return (
    <div>
      <Navbar setSidebarr={setSidebarr} />
      <Routes>
        <Route path="/" element={<Home sidebar={sidebarr} />} />
        <Route path="/video/:categoryId/:videoId" element={<Video />} />
      </Routes>
    </div>
  );
};

export default App;
