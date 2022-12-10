import React from "react";
import fb from "../assets/Facebook.png";
import ig from "../assets/Instagram.png";
import wa from "../assets/Whatsapp.png";
import tw from "../assets/Twitter.png";
const SocialMedia = () => {
  return (
    <div className="flex flex-wrap gap-2 mt-5">
      <img
        src={fb}
        className="h-8 cursor-pointer hover:scale-110 duration-300"
        alt="fb"
      />
      <img
        src={ig}
        className="h-8 cursor-pointer hover:scale-110 duration-300"
        alt="ig"
      />
      <img
        src={wa}
        className="h-8 cursor-pointer hover:scale-110 duration-300"
        alt="ig"
      />
      <img
        src={tw}
        className="h-8 cursor-pointer hover:scale-110 duration-300"
        alt="tw"
      />
    </div>
  );
};

export default SocialMedia;