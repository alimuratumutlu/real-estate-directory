import React from "react";
import { theme } from "@chakra-ui/core";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/core";

const Header = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon="chevron-down">
        Actions
      </MenuButton>
      <MenuList>
        <MenuItem>Download</MenuItem>
        <MenuItem>Create a Copy</MenuItem>
        <MenuItem>Mark as Draft</MenuItem>
        <MenuItem>Delete</MenuItem>
        <MenuItem as="a" href="#">
          Attend a Workshop
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default Header;
