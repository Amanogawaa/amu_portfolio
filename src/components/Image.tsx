import Sigma from "@/assets/1.png";
import Image2 from "@/assets/2.png";

const Image = () => {
  /* 
    make the image change to the other image when hovered and change back when not hovered, make the transition smooth by adding a transition effect to the images in the CSS file

    make the image size responsive and maintain its aspect ratio by using the object-fit property in the CSS file
    */

  return (
    <div className="w-full h-screen flex justify-center group relative border border-black">
      <img
        className="absolute object-contain inset-0 opacity-100 group-hover:opacity-0 transition-opacity duration-300"
        src={Image2}
        alt="Hover Image"
      />

      <img
        className="absolute object-contain inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        src={Sigma}
        alt="Default Image"
      />
    </div>
  );
};

export default Image;
