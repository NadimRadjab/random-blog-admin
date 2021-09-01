import React from "react";
import { Link } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <div>
      <header className="">
        <Link href="/">
          <h1 className="">Random Blog</h1>
        </Link>
      </header>
    </div>
  );
};
export default Navbar;
