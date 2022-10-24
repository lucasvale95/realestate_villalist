import {
  Contats,
  Description,
  Foot,
  Links,
  Newslatter,
  Section,
} from "./styles";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterSquare,
  AiOutlineArrowRight,
} from "react-icons/ai";

import { BsPinterest, BsFillTelephoneFill } from "react-icons/bs";
import { ImLocation2 } from "react-icons/im";
import { GrMail } from "react-icons/gr";

function Footer() {
  return (
    <>
      <Foot>
        <div className="image">
          <img src="./Newslatter.svg" alt="Newslatter" />
        </div>
        <Section>
          <Description>
            <img src="./Logo.jpg" alt="Logo" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              arcu eros, mattis non nibh eu, aliquet feugiat metus. Etiam mattis
              risus vel tellus venenatis.
            </p>
            <div className="social-media">
              <div className="padding-icon">
                <AiFillFacebook color="#28a3a1" size={18} />
              </div>

              <div className="padding-icon">
                <AiFillInstagram color="#28a3a1" size={18} />
              </div>

              <div className="padding-icon">
                <AiFillLinkedin color="#28a3a1" size={18} />
              </div>

              <div className="padding-icon">
                <AiFillTwitterSquare color="#28a3a1" size={18} />
              </div>

              <div className="padding-icon">
                <BsPinterest color="#28a3a1" size={18} />
              </div>
            </div>
          </Description>

          <Links>
            <h2>Quick Links</h2>
            <span></span>
            <p>About us</p>
            <p>Blog & News</p>
            <p>Terms and Conditions</p>
            <p>Privacy & Policy</p>
            <p>Contact us</p>
          </Links>

          <Contats>
            <h2>Contacts</h2>
            <span></span>
            <a href="#">
              <ImLocation2 color="#28a3a1" size={50} /> Carter Forges Suite 858
              South Carolyne
            </a>
            <a href="#">
              <BsFillTelephoneFill color="#28a3a1" size={18} /> +222 555 8888
            </a>
            <a href="#">
              <BsFillTelephoneFill color="#28a3a1" size={18} /> +222 444 3333
            </a>
            <a href="#">
              <GrMail color="#28a3a1" size={20} /> graphicraz.com@gmail.com
            </a>
          </Contats>
          <Newslatter>
            <h2>Newsletter</h2>
            <span></span>

            <div>
              <input type="text" placeholder="Enter e-mail address" />
              <i>
                <AiOutlineArrowRight color="white" size={25} />
              </i>
            </div>

            <p>We naver span you!</p>
          </Newslatter>
        </Section>
      </Foot>
    </>
  );
}

export default Footer;
