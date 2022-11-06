import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMouse } from "@fortawesome/free-solid-svg-icons";
import styles from "../style";
import { robot } from "../assets";
import { Fade } from "react-reveal";
const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <Fade  left>
        <div
          className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 md:-mt-20`}
        >
          <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
            <FontAwesomeIcon
              icon={faMouse}
              alt="discount"
              className=" text-dimPurple w-[22px] h-[22px]"
            />
            <p className={`${styles.paragraph} ml-2`}>
              <span className="text-white">Chần Chừ Gì</span> Mà Còn Không{" "}
              <span className="text-white">Cuộn Xuống :0</span>
            </p>
          </div>

          <div className="flex flex-row justify-between items-center w-full">
            <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
              Kĩ năng <br className="sm:block hidden" />{" "}
              <span className="text-gradient">
                Bảo mật 
              </span>{" "}và <span className="text-gradient">
                xác thực
              </span> thông tin
            </h1>
            <div className="ss:flex hidden md:mr-4 mr-0"></div>
          </div>

          <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full"></h1>
        </div>
      </Fade>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <Fade right>
          <img
            src={robot}
            alt="billing"
            className="w-[100%] h-[100%] relative z-[5] mt-20 md:mt-0"
          />
        </Fade>
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}></div>
    </section>
  );
};

export default Hero;
