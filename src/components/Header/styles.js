import styled from "styled-components";
import { Link } from "react-router-dom";

export const Head = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100vw;
  max-width: 100%;
  height: 100px;
  max-height: 100%;
  background: #fff;
  gap: 15px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);

  &&.open {
    .navigation {
      opacity: 1;
      visibility: visible;
      left: 0;
      top: 100px;
      display: flex;
      gap: 15px;

      padding-top: 20px;
      padding-left: 40px;
      flex-direction: column;
      align-items: flex-start;
      background: #fff;
      padding-bottom: 10px;

      z-index: 15;

      width: 140px;

      border-right: 1px solid rgba(0, 0, 0, 0.05);
      border-bottom: 1px solid rgba(0, 0, 0, 0.05);

      @media (max-width: 400px) {
        padding-left: 20px;
      }
    }
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 1200px;
  padding-left: 15px;
  padding-right: 15px;
  max-width: 100%;
  height: 100%;

  .menuToggle {
    position: relative;
    display: none;
  }

  @media (max-width: 800px) {
    .menuToggle {
      position: relative;
      display: block;
      font-size: 2em;
      margin-right: 100px;

      cursor: pointer;
      transform: translateX(30px);
      z-index: 10;
    }

    .navigation {
      position: absolute;
      display: none;
      opacity: 0;
      visibility: hidden;
      left: 100%;
    }
  }

  @media (max-width: 600px) {
    .menuToggle {
      margin-right: 30px;
    }

    .addProperty {
      margin-right: 10px;
    }
  }

  @media (max-width: 500px) {
    .addProperty {
      display: none;
    }

    .menuToggle {
      margin-right: 15px;
    }
  }

  @media (max-width: 400px) {
    .menuToggle {
      font-size: 1.5rem;
      margin-right: 20px;
      margin-left: -20px;
    }
  }

  .logo {
    width: 45%;
    max-width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 800px) {
      width: 50%;
    }

    @media (max-width: 600px) {
      width: 50%;
    }
  }
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 30%;
  max-width: 100%;

  @media (max-width: 400px) {
    padding-left: 20px;
  }
`;

export const NavLink = styled(Link)`
  font-size: 1 rem;
  color: #666666;
  position: relative;

  letter-spacing: 2px;

  padding: 5px;

  text-decoration: none;

  ::after {
    content: "";
    width: 100%;
    height: 3px;
    position: absolute;
    bottom: 0;
    left: 0;

    background-color: #28a3a1;

    transform: scaleX(0);
    transition: transform 0.5s ease-in-out;
    transform-origin: 100%;
  }

  :hover::after {
    color: #28a3a1;
    cursor: pointer;

    transform: scaleX(1);
    transform-origin: 0%;
  }
`;

export const Logo = styled.div`
  background-image: url("/Logo.jpg");
  background-repeat: no-repeat;
  width: 135px;
  max-width: 100%;
  height: 55px;

  padding-right: 20px;

  :hover {
    cursor: pointer;
  }

  @media (max-width: 800px) {
    padding-right: 0px;
  }
`;

export const AddProperty = styled.div`
  width: 15%;
  min-width: 140px;
  height: 50px;
  max-height: 100%;
  font-size: 1rem;
  border: 1px solid #28a3a1;
  display: flex;
  justify-content: center;
  align-items: center;

  .icon {
    background-image: url("Icon.jpg");
    background-repeat: no-repeat;
    width: 15px;
    height: 15px;
    margin-right: 10px;
  }
`;

export const User = styled.div`
  width: 50px;
  height: 50px;
  max-width: 100%;
  max-height: 100%;

  background-image: url("User.svg");
  background-repeat: no-repeat;
`;
