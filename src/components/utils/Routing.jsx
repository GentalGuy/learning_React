import { Route, Routes } from "react-router-dom";
import Home from "../Home";
import About from "../About";
import Projects from "../Projects";
import Contact from "../Contact";
import { useState } from "react";
import ContactDetails from "../ContactDetails";

const Routing = () => {
  const [users, setUsers] = useState([]);

  const handleFormSubmitData = (data) => {
    setUsers([...users, data]);
  };
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/About" element={<About></About>}></Route>
      <Route path="/Projects" element={<Projects></Projects>}></Route>
      <Route
        path="/Contact"
        element={
          <Contact handleFormSubmitData={handleFormSubmitData}></Contact>
        }
      ></Route>
      <Route
        path="/Contact/ContactDetails"
        element={<ContactDetails users={users}></ContactDetails>}
      ></Route>
      <Route></Route>
    </Routes>
  );
};

export default Routing;
