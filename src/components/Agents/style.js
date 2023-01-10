import styled from "styled-components";

export const Sect = styled.section`
  width: 100vw;
  max-width: 100%;
  max-height: 100%;

  padding: 25px 15px;

  background-color: #f8f8f8;
`;

export const Container = styled.section`
  width: 1200px;
  max-width: 100%;
  height: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  margin: 15px auto;

  img {
    width: 58%;
    object-fit: cover;
  }

  @media (max-width: 730px) {
    flex-direction: column;
    height: 600px;

    img {
      width: 85vw;
      padding-top: 5px;
    }
  }

  @media (max-width: 530px) {
    height: 500px;
  }
`;

export const Description = styled.div`
  width: 30%;
  min-width: 310px;
  max-width: 380px;
  height: 300px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-right: 20px;

  gap: 15px;
  .icon {
    width: 50px;
    min-width: 50px;
    height: 50px;
    min-height: 50px;
    background: #ffffff;
    box-shadow: 0px 0px 22px rgba(40, 163, 161, 0.25);
    margin-bottom: 20px;

    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 1230px) {
      height: 50px;
    }

    @media (max-width: 800px) {
      margin-bottom: 0;
    }
  }

  h3 {
    font-size: 1.2rem;
    line-height: 38px;

    color: #333333;
  }

  h2 {
    font-size: 2rem;
    line-height: 38px;

    color: #333333;
  }

  p {
    font-size: 1rem;
    line-height: 21px;

    color: #333333;
  }

  @media (max-width: 800px) {
    width: 25vw;
    max-width: 100%;
    height: 50vw;
    max-width: 100%;

    margin-right: 10px;
    min-width: 280px;
  }

  @media (max-width: 730px) {
    width: 90vw;
    max-width: 100%;
    height: 50vw;
    max-width: 100%;

    margin-right: 10px;
    min-width: 300px;

    padding-bottom: 15px;
  }

  @media (max-width: 530px) {
    width: 90vw;
    max-width: 100%;
    height: 100vw;
    max-height: 200px;

    margin-right: 10px;
    min-width: 300px;

    padding-bottom: 15px;
  }
`;

export const List = styled.div`
  width: 60%;
  min-width: 310px;
  max-width: 600px;
  height: 300px;
  max-height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 730px) {
    width: 90%;
  }

  @media (max-width: 530px) {
    width: 100%;
  }

  ul {
    width: 100%;
    height: 100%;
    padding: 10px;

    display: flex;
    flex-direction: row;
    justify-content: space-around;
    gap: 25px;

    @media (max-width: 800px) {
      gap: 10px;
    }

    @media (max-width: 730px) {
      gap: 20px;
    }

    @media (max-width: 530px) {
      gap: 10px;
    }
  }
`;

export const Agent = styled.li`
  width: 250px;
  max-width: 100%;
  height: 280px;
  max-height: 100%;

  background-color: #fff;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 10px;

  @media (max-width: 800px) {
    width: 200px;
    height: 270px;
  }

  @media (max-width: 730px) {
    width: 230px;
    height: 280px;
  }

  :hover {
    box-shadow: rgba(16, 160, 160, 0.4) 0px 7px 29px 0px;
  }

  img {
    width: 90%;
    height: 80%;
  }

  .info {
    display: flex;
    flex-direction: row;
    justify-content: center;

    gap: 10px;

    @media (max-width: 800px) {
      gap: 5px;
    }

    h4 {
      font-size: 13px;
      font-weight: 550;
      width: 120px;

      display: flex;
      justify-content: center;
      align-items: center;

      @media (max-width: 800px) {
        width: 80px;
        padding-left: 10px;
      }
    }

    a {
      font-size: 12px;
      font-weight: 600;

      text-decoration: none;
      gap: 3px;

      color: #28a3a1;

      display: flex;
      justify-content: center;
      align-items: center;

      @media (max-width: 800px) {
        width: 100%;
      }
    }
  }
`;
