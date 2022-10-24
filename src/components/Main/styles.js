import styled from "styled-components";

export const Container = styled.main`
  width: 100vw;
  max-width: 100%;
  height: 750px;

  background: #f8f8f8;

  @media (max-width: 350px) {
    height: 800px;
  }
`;

export const MainPage = styled.div`
  width: 1200px;
  max-width: 100%;
  height: 750px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  margin: 0 auto;
  img {
    width: 600px;
    height: 700px;
    margin-left: -200px;
  }

  @media (max-width: 1230px) {
    img {
      width: 500px;
      margin-left: -200px;
    }
  }

  @media (max-width: 1000px) {
    img {
      width: 50%;
      margin-left: -270px;
    }
  }

  @media (max-width: 860px) {
    img {
      width: 40%;
      height: 70%;
      margin-top: 80px;
    }
  }

  @media (max-width: 740px) {
    img {
      display: none;
    }
  }

  @media (max-width: 350px) {
    height: 800px;
  }
`;

export const Decription = styled.main`
  width: 800px;
  max-width: 100%;
  height: 700px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  @media (max-width: 1230px) {
    width: 700px;
  }

  @media (max-width: 740px) {
    width: 95vw;
  }

  @media (max-width: 350px) {
    height: 800px;
  }

  .icon {
    width: 50px;
    height: 50px;
    background: #ffffff;
    box-shadow: 0px 0px 22px rgba(40, 163, 161, 0.25);

    margin-bottom: 30px;
    margin-top: 40px;

    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 1230px) {
      height: 50px;
    }
  }

  .title {
    width: 570px;
    max-width: 100%;

    font-size: 2.6rem;
    line-height: 150%;
    text-transform: uppercase;
    color: #28a3a1;

    margin-bottom: 25px;

    @media (max-width: 1230px) {
      width: 400px;
      line-height: 120%;
    }
  }

  .subTitle {
    width: 570px;
    max-width: 100%;
    font-size: 1rem;
    line-height: 174%;
    color: #666666;

    margin-bottom: 20px;

    @media (max-width: 1230px) {
      width: 400px;
    }
  }

  .divInput {
    width: 800px;
    max-width: 100%;
    height: 90px;

    position: relative;

    padding: 15px;
    margin-top: 20px;
    margin-bottom: 20px;

    background: #ffffff;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1);

    @media (max-width: 1230px) {
      width: 680px;
    }

    @media (max-width: 620px) {
      .none {
        display: none;
      }
    }

    @media (max-width: 350px) {
      .clean {
        display: none;
      }
    }

    input {
      width: 210px;
      max-width: 100%;
      height: 60px;
      border: 1px solid #eeeeee;

      padding-left: 25px;

      @media (max-width: 1230px) {
        width: 170px;
      }

      @media (max-width: 740px) {
        width: 26.5%;
      }

      @media (max-width: 620px) {
        width: 39%;
      }

      @media (max-width: 620px) {
        padding-left: 10px;
      }

      @media (max-width: 350px) {
        width: 76%;
        padding-left: 20px;
      }
    }

    i {
      position: absolute;
      top: 15px;
      right: 15px;
      width: 130px;
      height: 60px;
      color: white;
      background-color: #28a3a1;
      display: flex;
      align-items: center;
      justify-content: center;

      @media (max-width: 740px) {
        width: 18.5%;
      }

      @media (max-width: 620px) {
        width: 19%;
      }
    }

    i:hover {
      cursor: pointer;
    }
  }

  .display {
    display: flex;
    flex-direction: row;
    gap: 60px;

    margin-top: 25px;
    padding: 0 15px;

    @media (max-width: 1230px) {
      width: 400px;
    }

    @media (max-width: 740px) {
      display: flex;
      justify-content: space-between;
      gap: 0px;
      width: 400px;

      .subNumber {
        width: 80px;
      }
    }

    @media (max-width: 440px) {
      width: 95vw;
    }
  }

  .number {
    font-size: 2rem;
    line-height: 138%;
    text-align: center;
    text-transform: uppercase;
    color: #333333;
  }

  .subNumber {
    font-size: 1.2rem;
    line-height: 138%;
    font-weight: 100;

    text-align: center;
    display: block;

    text-transform: capitalize;

    color: #333333;
  }
`;
