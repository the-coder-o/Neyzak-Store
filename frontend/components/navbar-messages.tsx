"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

import { IoClose } from "react-icons/io5";

const NavbarMessages = () => {
  const [showed, setShowed] = useState<boolean>(false);

  const handleShowed = () => {
    setShowed(true);
  };

  return (
    <div className={cn("bg-black py-[8px]", showed && "hidden")}>
      <div className={"flex items-center justify-center relative"}>
        <span
          className={
            "text-white text-[17px] text-center flex items-center justify-center max-md:text-sm"
          }
        >
          70% discount - Free shipping worldwide
        </span>
        <div
          onClick={handleShowed}
          className={"absolute right-[16px] cursor-pointer"}
        >
          <IoClose color={"white"} size={20} />
        </div>
      </div>
    </div>
  );
};

export default NavbarMessages;
