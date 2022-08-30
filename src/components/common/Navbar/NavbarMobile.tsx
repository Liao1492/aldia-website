import React, { useState } from "react";
import { Burger } from "@mantine/core";
const NavbarMobile = () => {
  const [pressed, setPressed] = useState(false);
  return (
    <div className="navbar-menu">
      <div className="burger-nav">
        <Burger opened={pressed} onClick={() => setPressed((o) => !o)} />
      </div>
    </div>
  );
};

export default NavbarMobile;
