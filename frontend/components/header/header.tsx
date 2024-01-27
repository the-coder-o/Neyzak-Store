"use client";

import React, { useState } from "react";

import Link from "next/link";
import Image from "next/image";

import Container from "@/components/container/container";
import NavbarMessages from "@/components/navbar-messages";

import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";

import { Search } from "lucide-react";
import { IoClose } from "react-icons/io5";
import { IoMdLogIn } from "react-icons/io";
import { IoIosMenu } from "react-icons/io";
import { FaCaretDown } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";

import NeyzakLogo from "@/assets/logo/Logo.svg";
import { cn } from "@/lib/utils";

const items: MenuProps["items"] = [
  {
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        👟 shoes page
      </a>
    ),
    key: "0",
  },
  {
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        👗 women's clothing page
      </a>
    ),
    key: "1",
  },
  {
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        💍 women's accessories page
      </a>
    ),
    key: "2",
  },
  {
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        🪙 gold jewelry page
      </a>
    ),
    key: "3",
  },
  {
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        🛍️ men's briefcases
      </a>
    ),
    key: "4",
  },
];
const Header = () => {
  const [active, setActive] = useState<boolean>(false);

  const handleActive = () => {
    setActive(true);
  };

  const handleDisActive = () => {
    setActive(false);
  };

  return (
    <>
      <NavbarMessages />
      <Container>
        <header
          className={"mt-[16px] flex items-center justify-between relative"}
        >
          <div>
            <Link href={"/"}>
              <Image
                width={0}
                height={0}
                src={NeyzakLogo}
                alt={NeyzakLogo}
                className={"!w-[155px]"}
              />
            </Link>
          </div>
          <div className={"max-[820px]:hidden"}>
            <ul className={"flex items-center gap-[60px]"}>
              <li>
                <Link
                  href={"/"}
                  className={"text-[14px] text-black font-[500]"}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href={"/"}
                  className={"text-[14px] text-black font-[500]"}
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  href={"/"}
                  className={"text-[14px] text-black font-[500]"}
                >
                  Product
                </Link>
              </li>
              <li>
                <Dropdown menu={{ items }}>
                  <a
                    onClick={(e) => e.preventDefault()}
                    className={"flex items-center gap-2 cursor-pointer"}
                  >
                    <Space className={"text-[14px] text-black font-[500]"}>
                      Pages
                    </Space>
                    <FaCaretDown color={"black"} />
                  </a>
                </Dropdown>
              </li>
            </ul>
          </div>
          <div className={"flex items-center gap-5 max-[820px]:hidden"}>
            <Link href={"/"}>
              <Search size={20} />
            </Link>
            <Link href={"/"}>
              <IoMdLogIn color={"black"} size={22} />
            </Link>
            <Link href={"/"} className={"flex items-center gap-1"}>
              <MdOutlineShoppingBag color={"black"} size={22} />
              <span
                className={
                  "bg-black rounded-full text-white w-5 h-5 flex items-center justify-center font-bold text-xs"
                }
              >
                2
              </span>
            </Link>
          </div>
          <div onClick={handleActive} className={"hidden max-[820px]:block"}>
            <IoIosMenu size={30} color={"black"} />
          </div>
          <div
            onClick={handleDisActive}
            className={"hidden max-[820px]:block absolute right-0 z-50"}
          >
            <IoClose size={30} color={"black"} />
          </div>
        </header>
      </Container>
      <div
        className={cn(
          "bg-black/70 z-40 w-full h-[100vh] fixed top-0 left-0",
          !active ? "hidden" : "block",
        )}
      ></div>
    </>
  );
};

export default Header;
