import styled from "styled-components";

export const Sect = styled.section`
  width: 100vw;
  max-width: 100%;
  max-height: 100%;

  padding: 25px 15px;
`;

export const Container = styled.section`
  width: 1200px;
  max-width: 100%;
  height: 600px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  margin: 15px auto;

  img {
    width: 58%;

    @media (max-width: 800px) {
      padding-top: 80px;
      width: 56%;
    }
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
    height: 700px;
  }
`;

export const Description = styled.div`
  width: 38%;
  min-width: 310px;
  max-width: 380px;
  height: 700px;

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

  .exploreNow {
    width: 130px;
    min-width: 130px;
    height: 50px;
    min-height: 50px;

    background: #28a3a1;
    border: none;

    margin-top: 20px;
    font-size: 1rem;
    line-height: 160%;
    color: #ffffff;
  }

  @media (max-width: 730px) {
    width: 70vw;
    max-width: 100%;
    height: 50vw;
    max-width: 100%;

    margin-right: 10px;
    min-width: 300px;

    padding-bottom: 15px;
  }

  @media (max-width: 530px) {
    width: 70vw;
    max-width: 100%;
    height: 100vw;
    max-width: 100%;

    margin-right: 10px;
    min-width: 300px;

    padding-bottom: 15px;
  }
`;

export const Images = styled.div`
  width: 45vw;
  max-width: 100%;
  height: 600px;

  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;

  position: relative;

  gap: 5%;

  @media (max-width: 1400px) {
    width: 50vw;
  }

  @media (max-width: 1280px) {
    width: 55vw;
  }

  @media (max-width: 730px) {
    width: 70vw;
    max-width: 100%;
    min-height: 200px;
  }

  .image1 {
    position: absolute;
    left: 0;
    top: 0;

    width: 45%;
    max-width: 100%;
    height: 45%;

    @media (max-width: 1050px) {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      padding: 0;

      @media (max-width: 800px) {
        width: 100%;
        height: 90%;
        object-fit: cover;
      }
    }

    @media (max-width: 800px) {
      width: 90%;
      height: 40%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    @media (max-width: 730px) {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .image2 {
    position: absolute;
    right: 0;
    top: 0;

    width: 52%;
    max-width: 100%;
    height: 60%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      padding: 0;
    }

    @media (max-width: 800px) {
      display: none;
    }
  }

  .image3 {
    position: absolute;
    bottom: 0;
    left: 0;

    width: 45%;
    max-width: 100%;
    height: 53%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      padding: 0;
    }

    @media (max-width: 800px) {
      width: 90%;
      height: 60%;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    @media (max-width: 730px) {
      img {
        display: none;
      }
    }
  }

  .image4 {
    position: absolute;
    bottom: 0;
    right: 0;

    width: 52%;
    max-width: 100%;
    height: 38%;

    img {
      width: 100%;
      height: 100%;
      padding: 0;

      object-fit: cover;
    }

    @media (max-width: 800px) {
      display: none;
    }
  }

  @media (max-width: 800px) {
    height: 600px;
  }

  @media (max-width: 730px) {
    height: 200px;
  }

  @media (max-width: 420px) {
    width: 80vw;
    min-width: 310px;
    height: 50vw;
  }
`;
