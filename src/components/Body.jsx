import "./body.css";
import { ThemeContext } from "../contexts/ThemeContext";
import { useContext } from "react";

const Body = () => {
   const { theme } = useContext(ThemeContext);

   return (
      
      <div style={{theme}} className="bodyDiv">
      <h1> welcome to my page</h1>
            </div>
   );
};

export default Body;