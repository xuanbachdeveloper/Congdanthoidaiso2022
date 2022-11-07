import FeedbackCard from "./FeedbackCard";
import { xacthucthongtin } from "../constants";
import styles, { layout } from "../style";
import { Fade } from "react-reveal";

function Card() {
  return (
    <>
      <Fade>
        <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
          <Fade left>
            {" "}
            <h1 className={`${styles.heading2}`}>
              <a className="text-gradient">5 Bước </a>xác thực thông tin
            </h1>
          </Fade>
          {xacthucthongtin.map((card) => (
            <FeedbackCard key={card.id} {...card} />
          ))}
        </div>
      </Fade>
    </>
  );
}

export default Card;
