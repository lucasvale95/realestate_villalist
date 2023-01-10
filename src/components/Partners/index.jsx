import { Container, Description, Sect } from "./style";
import { FaHandHoldingHeart } from "react-icons/fa";

function Partners() {
  return (
    <>
      <Sect>
        <Container>
          <Description>
            <div className="icon">
              <FaHandHoldingHeart color="#28a3a1" size={25} />
            </div>
            <h2>We're going to became partners for the long run</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              vitae lobortis tellus.
            </p>
          </Description>
          <img src="/partners.svg" alt="Partners" />
        </Container>
      </Sect>
    </>
  );
}

export default Partners;
