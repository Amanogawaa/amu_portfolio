import "./App.css";
import Sigma from "@/assets/1.png";
import Image2 from "@/assets/2.png";
import { useState } from "react";

function App() {
  const [isHovered, setIsHovered] = useState(false);
  // make the image change to the other image when hovered and change back when not hovered, make the transition smooth by adding a transition effect to the images in the CSS file
  return (
    <div>
      <h1>Welcome to 
      <h1>Welcome to React with TypeScript!</h1>
      <p>This is a simple React application using TypeScript.</p>
      <img
        src={Image2}
        alt="Image 2"
        className={` ${isHovered ? "opacity-0 transition-opacity duration-300" : "opacity-100 transition-opacity duration-300"}`}
        onMouseEnter={() => {
          setIsHovered(true);
          console.log("Mouse entered the image");
        }}
        onMouseLeave={() => {
          setIsHovered(false);
        }}
      />
      <img
        src={Sigma}
        alt="Image 1"
        className={`${isHovered ? "opacity-100 transition-opacity duration-300" : "opacity-0 transition-opacity duration-300"}`}
      />
    </div>
  );
}

export default App;
