import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

import Home from "./pages/Home";
import Calculator from "./pages/Calculator";
import Lottery from "./pages/Lottery";
import Chatroom from "./pages/Chatroom";

const menuItems = [
  { title: "Home", path: "/" },
  { title: "Calculator", path: "/calculator" },
  { title: "Lottery", path: "/lottery" },
  { title: "Chatroom", path: "/chatroom" },
];

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar menuItems={menuItems} />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/lottery" element={<Lottery />} />
        <Route path="/chatroom" element={<Chatroom />} />
        <Route path="*" element={<Navigate replace to="" />} />
      </Routes>
    </div>
  );
}

export default App;
