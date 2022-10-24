import styled from "styled-components";

export const Foot = styled.footer`
  width: 100vw;
  max-width: 100%;
  height: 600px;
  max-height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  margin: 0;

  .image {
    width: 700px;
    margin: 0 auto;

    img {
      width: 700px;
      height: 200px;

      object-fit: cover;
      object-position: center;

      @media (max-width: 730px) {
        max-width: 100vw;
        width: auto;
        height: auto;
      }
    }
    @media (max-width: 730px) {
      width: 100vw;
      padding: 0 15px;
    }
  }
`;

export const Section = styled.section`
  width: 1200px;
  max-width: 100%;
  height: 230px;
  max-height: 100%;

  margin-top: 30px;

  padding: 0 15px;
  padding-left: 20px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 730px) {
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 20px;
  }
`;

export const Description = styled.div`
  width: 270px;
  max-width: 100%;

  height: 230px;

  gap: 15px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  p {
    font-size: 0.8rem;
    line-height: 186.5%;
  }

  .social-media {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    gap: 10px;

    .padding-icon {
      width: 40px;
      max-width: 100%;
      height: 40px;
      max-height: 100%;

      background: rgba(40, 163, 161, 0.1);

      display: flex;
      align-items: center;
      justify-content: center;

      border-radius: 4px;
    }
  }

  @media (max-width: 730px) {
    align-items: center;
    width: 250px;

    p {
      text-align: justify;
    }
  }
`;

export const Links = styled.div`
  width: 150px;
  max-width: 100%;

  height: 230px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  position: relative;

  h2 {
    color: #333333;
    font-size: 1.2rem;
    line-height: 186.5%;
  }
  span {
    margin-bottom: 10px;
  }

  span::after {
    content: "";
    position: absolute;
    left: 0;

    width: 40px;
    background-color: #28a3a1;
    height: 3px;
  }

  p {
    font-size: 0.8rem;
    line-height: 270%;
    color: #333333;

    position: relative;

    ::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 4px;
      width: 100%;
      height: 2px;
      background-color: #28a3a1;

      transform: scaleX(0);
      transition: transform 1s ease-in-out;
      transform-origin: 100%;
    }

    :hover::after {
      transform: scaleX(1);
      transform-origin: 0%;
      cursor: pointer;
    }

    :hover {
      cursor: pointer;
    }
  }

  @media (max-width: 800px) {
    display: none;
  }
`;

export const Contats = styled.div`
  width: 150px;
  max-width: 100%;

  height: 230px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  position: relative;

  h2 {
    color: #333333;
    font-size: 1.2rem;
    line-height: 186.5%;
  }
  span {
    margin-bottom: 10px;
  }

  span::after {
    content: "";
    position: absolute;
    left: 0;

    width: 40px;
    background-color: #28a3a1;
    height: 3px;
  }

  a {
    font-size: 0.8rem;
    color: #333333;

    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;

    text-decoration: none;

    margin-bottom: 20px;

    svg {
      margin-right: 7px;
    }

    ::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -5px;
      width: 100%;
      height: 2px;
      background-color: #28a3a1;

      transform: scaleX(0);
      transition: transform 1s ease-in-out;
      transform-origin: 100%;
    }

    :hover::after {
      transform: scaleX(1);
      transform-origin: 0%;
      cursor: pointer;
    }

    :hover {
      cursor: pointer;
    }
  }

  @media (max-width: 730px) {
    h2 {
      margin: 0 auto;
    }

    span::after {
      left: 50px;
    }
  }
`;

export const Newslatter = styled.div`
  width: 230px;
  max-width: 100%;

  height: 230px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  position: relative;

  h2 {
    color: #333333;
    font-size: 1.2rem;
    line-height: 186.5%;
  }
  span {
    margin-bottom: 40px;
  }

  span::after {
    content: "";
    position: absolute;
    left: 0;

    width: 40px;
    background-color: #28a3a1;
    height: 3px;
  }

  p {
    font-size: 0.8rem;
    line-height: 270%;
    color: #777;
  }

  div {
    width: 100%;
    height: 45px;
    border: 1px solid #28a3a1;
    position: relative;

    margin-bottom: 20px;

    input {
      box-shadow: 0 0 0 0;
      border: 0 none;
      outline: 0;

      width: 70%;
      height: 100%;

      padding-left: 20px;
    }

    input:focus,
    select:focus {
      box-shadow: 0 0 0 0;
      border: 0 none;
      outline: 0;
    }

    i {
      position: absolute;
      top: 3px;
      right: 3px;
      width: 40px;
      height: 90%;
      background-color: #28a3a1;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    i:hover {
      cursor: pointer;
    }
  }

  @media (max-width: 730px) {
    h2 {
      margin: 0 auto;
    }

    span {
      margin-bottom: 20px;
    }

    div {
      margin: 0 auto;
      margin-left: 10px;
    }

    span::after {
      left: 95px;
    }

    p {
      margin: 0 auto;
    }
  }
`;
