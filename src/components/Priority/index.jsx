import { Container, Description, Images, Sect } from "./style";
import { MdOutlinePriorityHigh } from "react-icons/md";

function Priority() {
  return (
    <>
      <Sect>
        <Container>
          <Description>
            <div className="icon">
              <MdOutlinePriorityHigh color="#28a3a1" size={25} />
            </div>
            <h3>Know About Us.</h3>
            <h2>Comfort Is Our Top Priority For You</h2>
            <p>
              Etiam consequat, metus at sodales bibendum, felis dui hendrerit
              purus, consectetur congue justo sapien vel leo. Etiam consequat,
              metus at sodales bibendum.
            </p>
            <button className="exploreNow">Explore Now</button>
          </Description>
          <Images>
            <div className="image1">
              <img src="/priority1.jpg" alt="ImageOne" />
            </div>
            <div className="image2">
              <img src="/priority2.svg" alt="ImageOne" />
            </div>
            <div className="image3">
              <img src="/priority3.png" alt="ImageOne" />
            </div>
            <div className="image4">
              <img src="/priority4.jpg" alt="ImageOne" />
            </div>
          </Images>
        </Container>
      </Sect>
    </>
  );
}

export default Priority;
