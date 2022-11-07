import { features } from "../constants";
import styles, { layout } from "../style";
import { Fade } from "react-reveal";


const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

function ThongTin() {
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={`${styles.heading2} cursor-pointer`}>
          <a className="underline decoration-sky-500 hover:text-slate-300	inline-block">
            <Fade left big>
              Một số việc
            </Fade>
          </a>{" "}
          có thể{" "}
          <a className="underline decoration-pink-500 hover:text-slate-300 inline-block">
            <Fade top big>
              khiến
            </Fade>
          </a>{" "}
          <br className="sm:block hidden" /> <a>bạn bị lộ </a>
          <a className="underline decoration-indigo-500 hover:text-slate-300 inline-block">
            <Fade bottom big>
              thông tin cá nhân:
            </Fade>
          </a>
        </h2>
        <Fade delay={50} duration={1400}>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            {/* <ul>
          <li>Nhập thông tin vào những trang web không chính thống</li>
          <li>Từ những trang tạo CV không uy tín.</li>
          <li>Các đường link khảo sát</li>
          <li></li>
          <li> </li>
        </ul> */}
          </p>
        </Fade>
      </div>

      <div className={`flex-col`}>
        {features.map((feature, index) => (
          <Fade bottom>
            <FeatureCard key={feature.id} {...feature} index={index} />
          </Fade>
        ))}
      </div>
    </section>
  );
}

export default ThongTin;
