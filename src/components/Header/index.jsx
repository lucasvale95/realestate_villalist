import {
  AddProperty,
  Container,
  Head,
  Logo,
  Nav,
  NavLink,
  User,
} from "./styles";

import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

function Header() {
  const [status, setStatus] = useState(false);

  function toggle() {
    setStatus((previous) => !previous);
  }

  return (
    <Head className={status ? "open" : "closed"}>
      <Container>
        <AiOutlineMenu className="menuToggle" onClick={() => toggle()} />
        <Nav className="navigation">
          <NavLink>HOME</NavLink>
          <NavLink>LISTINGS</NavLink>
          <NavLink>AGENTS</NavLink>
          <NavLink>BLOG</NavLink>
        </Nav>
        <div className="logo">
          <Logo />
        </div>
        <AddProperty className="addProperty">
          <span className="icon" />
          <span>Add Property</span>
        </AddProperty>
        <User />
      </Container>
    </Head>
  );
}

export default Header;
