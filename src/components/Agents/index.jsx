import { Agent, Container, Description, List, Sect } from "./style";
import { HiUserGroup } from "react-icons/hi";
import { BsFillTelephoneFill } from "react-icons/bs";

function Agents() {
  return (
    <>
      <Sect>
        <Container>
          <Description>
            <div className="icon">
              <HiUserGroup color="#28a3a1" size={25} />
            </div>
            <h2>Our Exclusive Agents</h2>
            <p>
              Etiam consequat, metus at sodales bibendum, felis dui hendrerit
              purus, consectetur congue justo sapien vel leo. Etiam consequat,
              metus at sodales bibendum.
            </p>
          </Description>
          <List>
            <ul>
              <Agent>
                <img src="/agent3.png" alt="Agent" />
                <div className="info">
                  <h4>Andren Willium</h4>
                  <a href="#">
                    {" "}
                    <BsFillTelephoneFill color="#28a3a1" size={14} /> +222 555
                    8888{" "}
                  </a>
                </div>
              </Agent>
              <Agent>
                <img src="/agent2.png" alt="Agent" />
                <div className="info">
                  <h4>Andren Willium</h4>
                  <a href="#">
                    {" "}
                    <BsFillTelephoneFill color="#28a3a1" size={14} /> +222 555
                    8888{" "}
                  </a>
                </div>
              </Agent>
            </ul>
          </List>
        </Container>
      </Sect>
    </>
  );
}

export default Agents;
