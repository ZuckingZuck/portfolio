import React from "react";
import { NavLink } from "react-router-dom";
import { GithubOutlined } from "@ant-design/icons"

const Navbar = () => {
  return (
    <div className="mb-4">
      <header className="py-4 px-20 flex justify-between gap-10 text-gray-300 items-center">
        <div className="text-4xl">LOGO</div>
        <div className="flex space-x-40">
          <NavLink className="hover:text-white hover:shadow" to="/">Ana Sayfa</NavLink>
          <NavLink className="hover:text-white" to="projects">Projelerim</NavLink>
          <NavLink className="hover:text-white" to="/about">Hakkımda</NavLink>
          <NavLink className="hover:text-white" to="/blog">Blog</NavLink>
        </div>
        <div>
          <NavLink target="_blank" to="https://www.github.com/ZuckingZuck"className="text-white">
            <GithubOutlined className="text-2xl" />
          </NavLink>
        </div>
        
      </header>
    </div>
  );
};

export default Navbar;
