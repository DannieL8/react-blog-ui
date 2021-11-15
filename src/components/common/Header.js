import React from "react";
import { NavLink } from "react-router-dom";
import { Menu, MenuButton, Button } from "@chakra-ui/react";

const Header = () => {
  const activeStyle = { color: "#EBF8FF" };

  return (
    <nav
      style={{
        backgroundColor: "#4299E1",
        padding: 10,
        marginBottom: 30,
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
      }}
    >
      <Menu>
        <NavLink
          style={{ marginRight: 25 }}
          to="/"
          activeStyle={activeStyle}
          exact
        >
          <MenuButton>Home</MenuButton>
        </NavLink>

        <NavLink
          style={{ marginRight: 25 }}
          to="/posts"
          activeStyle={activeStyle}
        >
          <MenuButton>Posts</MenuButton>
        </NavLink>

        <NavLink
          style={{ marginRight: 25 }}
          to="/authors"
          activeStyle={activeStyle}
        >
          <MenuButton> Authors </MenuButton>
        </NavLink>

        <NavLink to="/manage-posts" activeStyle={activeStyle}>
          <MenuButton> Manage Posts </MenuButton>
        </NavLink>
      </Menu>
    </nav>
  );
};

export default Header;
