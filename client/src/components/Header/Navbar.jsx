import React from "react";
import { NavLink } from "react-router-dom";
import {
  GithubOutlined,
  MenuOutlined,
  InstagramOutlined,
} from "@ant-design/icons";

const Navbar = () => {
  const handleClick = () => {
    const menu = document.getElementById("menu");
    menu.style.display = menu.style.display === "none" ? "block" : "none";
  };
  return (
    <div className="bg-gray-900 border-b-2 md:border-b-0 block mb-4">
      <header className="py-4 px-5 text-gray-300">
        <div className=" md:px-20 flex justify-between gap-10 items-center">
          <div className="text-4xl">LOGO</div>
          <div className="block md:hidden">
            <div className="hover:cursor-pointer" onClick={handleClick}>
              <MenuOutlined className="text-2xl block w-full" />
            </div>
          </div>
          <div className="hidden md:flex flex-col md:flex-row md:space-x-40">
            <NavLink className="hover:text-white" to="/">
              Home
            </NavLink>
            <NavLink className="hover:text-white" to="projects">
              Projects
            </NavLink>
            <NavLink className="hover:text-white" to="/about">
              About Me
            </NavLink>
            <NavLink className="hover:text-white" to="/blog">
              Blog
            </NavLink>
          </div>

          <div className="hidden md:inline-block">
            <NavLink
              target="_blank"
              to="https://www.github.com/ZuckingZuck"
              className="text-white"
            >
              <GithubOutlined className="text-2xl" />
            </NavLink>
          </div>
        </div>
        <div id="menu" className="hidden w-full">
          <div className="flex justify-between">
            <div className="flex flex-col md:hidden">
              <NavLink className="hover:text-white" to="/">
                Home
              </NavLink>
              <NavLink className="hover:text-white" to="projects">
                Projects
              </NavLink>
              <NavLink className="hover:text-white" to="/about">
                About Me
              </NavLink>
              <NavLink className="hover:text-white" to="/blog">
                Blog
              </NavLink>
            </div>
            <div className="mt-2 flex flex-col">
              <NavLink target="_blank" to="https://www.github.com/ZuckingZuck">
                <GithubOutlined className="text-2xl hover:cursor-pointer hover:text-blue-300" />
              </NavLink>
              <InstagramOutlined className="text-2xl mt-2 hover:cursor-pointer hover:text-blue-300" />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
