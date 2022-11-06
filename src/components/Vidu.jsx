import { iphone } from "../assets";
import styles, { layout } from "../style";
import { Fade } from "react-reveal";


const Vidu = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2
        className={`${styles.heading2} font-bold
	 max-w-[470px] mt-5`}
      >
        Có lẽ bạn đã từng <br className="sm:block hidden" /> nhận được <p className="text-gradient">những tin
        nhắn</p> như vậy.
      </h2>
      <Fade bottom delay={50}>
      <p
        className={`${styles.paragraph} text-2xl
	  mt-5 underline decoration-sky-600 hover:decoration-blue-400`}
      >Vậy làm sao họ lại có thể biết chúng ta mà nhắn tin?
      </p></Fade>
      <Fade bottom delay={100}><p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Không nhấp vào bất kì đường link hay làm theo điều gì trong tin nhắn
        có dấu hiệu là tin rác
      </p></Fade>
    </div>

    <div className={layout.sectionImg}>
      
    <Fade bottom delay={100}><img src={iphone} alt="billing" className=" md:w-[80%] w-[100%] h-[95%] mt-10" /></Fade>
    </div>
  </section>
);

export default Vidu;
