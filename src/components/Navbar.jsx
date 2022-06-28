import React from "react";
import { SvgIcon, svgIcon } from "./SvgIcon";
import Avatar from "./Avatar";

const Navbar = () => {
  return (
    <div className="_navbar-container">
      <div className="_navbar-inner-container">
        {/* Logo */}
        <div className="_navbar-logo"></div>

        {/* Search Bar */}
        <div className="_navbar-search">
          <input placeholder="Search" />
          <div>
            <SvgIcon icon={svgIcon.SEARCH} />
          </div>
        </div>

        {/* ToolBar */}
        <div className="_navbar-toolbar">
          <SvgIcon icon={svgIcon.HOME} />
          <SvgIcon icon={svgIcon.MESSENGER} />
          <SvgIcon icon={svgIcon.NEW} />
          <SvgIcon icon={svgIcon.EXPLORE} />
          <SvgIcon icon={svgIcon.HEART} />
          <Avatar size="24px" src="https://picsum.photos/50/50" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
