import styled from "styled-components";

export const Sect = styled.section`
  width: 100vw;
  max-width: 100%;
  max-height: 100%;

  padding: 0 15px;
`;

export const Container = styled.section`
  width: 1200px;
  max-width: 100%;
  height: 400px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  margin: 0 auto;

  img {
    width: 58%;

    @media (max-width: 800px) {
      padding-top: 80px;
      width: 56%;
    }
  }

  @media (max-width: 750px) {
    flex-direction: column;
    height: 420px;

    img {
      width: 85vw;
      padding-top: 5px;
    }
  }
`;

export const Description = styled.div`
  width: 38%;
  min-width: 310px;
  max-width: 380px;
  height: 400px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-right: 20px;

  gap: 15px;
  .icon {
    width: 50px;
    height: 50px;
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

  @media (max-width: 750px) {
    width: 85vw;
    max-width: 100%;
    height: 250px;
    margin-right: 0;
    min-width: 300px;
  }
`;
