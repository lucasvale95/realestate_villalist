import { Decription, MainPage, Container } from "./styles";
import { AiFillHome } from "react-icons/ai";

function Main() {
  return (
    <Container>
      <MainPage>
        <Decription>
          <div className="icon">
            <AiFillHome color="#28a3a1" size={25} />
          </div>
          <h2 className="title">
            Find the perfect place to Live with your family.
          </h2>
          <p className="subTitle">
            Lorem Ipsum is simply dummy text of printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy.
          </p>
          <div className="divInput">
            <input type="text" placeholder="Enter your destiny..." />
            <input className="none" type="text" placeholder="Select Type" />
            <input className="clean" type="text" placeholder="When to leave?" />
            <i>Search</i>
          </div>
          <div className="display">
            <p className="number">
              {" "}
              300+
              <span className="subNumber">Award Wingng</span>
            </p>
            <p className="number">
              {" "}
              80+
              <span className="subNumber">Property Ready</span>
            </p>
            <p className="number">
              {" "}
              480+
              <span className="subNumber">Happy Customers</span>
            </p>
          </div>
        </Decription>
        <img src="/apartament.jpg" alt="Welcome" />
      </MainPage>
    </Container>
  );
}

export default Main;
