import styles from "../style";
import { Fade } from "react-reveal";

const FeedbackCard = ({ color, content, title, }) => (
  <Fade delay={200} bottom>
  <div className="cursor-pointer flex justify-between flex-col px-8 py-10 rounded-[20px]  max-w-[250px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
    <h2 className={`${styles.heading2} underline decoration-${color}`}>{title}</h2>
    <p className="font-poppins font-normal text-[17px] leading-[32px] text-white ">
      {content}
    </p>
  </div></Fade>
);


export default FeedbackCard;
