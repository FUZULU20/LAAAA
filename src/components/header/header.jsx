import React from "react";

import { AppBar, Typography, Toolbar } from "@material-ui/core";
import "./header.css";

const Header = () => {
  return (
    <AppBar>
      <Toolbar>
        <Typography>{`Flight Booking App`}</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
