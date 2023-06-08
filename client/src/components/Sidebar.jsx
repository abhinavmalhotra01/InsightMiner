
import { List, ListItem, Spacer } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <List
      color="white"
      fontSize="1.2em"
      spacing={4}
    >
      <ListItem>
        <Spacer />
        <br />
      </ListItem>
      <ListItem>
        <NavLink to="/study">Distribution</NavLink>
      </ListItem>
      <ListItem>
        <NavLink to="/analysis">Analysis</NavLink>
      </ListItem>
    </List>
  );
}
