import styles, { layout } from "../style";
import Bounce from 'react-reveal/Bounce';

const Tinrac = () => (
  <section id="product" className={layout.sectionReverse}>
    {/* <div className={layout.sectionImgReverse}>
      <img src={bill} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
    </div> */}

    <div className={`${layout.sectionInfo}`}>
      <h2 className={`${styles.heading2} text-center flex justify-center`}>
      <a className="underline decoration-pink-500 hover:text-slate-300 inline-block cursor-pointer">
Thư rác là gì?</a>
      </h2>
      <p
        className={`${styles.paragraph}  mt-5 text-center flex justify-center items-center`}
      >
        <Bounce bottom>
        Thư rác (spam) là thư điện tử (email) được gửi tự động hàng loạt mà
        không có sự đồng ý từ phía người nhận. Thư rác thường mang nội dung lừa
        đảo, quảng cáo. Để gửi thư rác, người gửi cần phải có một số lượng lớn
        địa chỉ email của người dự tính sẽ nhận thư. Thường từ những danh sách DATA được kẻ xấu thu thập và bán lại cho những người có nhu cầu vào mục đích không minh bạch.
      </Bounce></p>
    </div>
  </section>
);

export default Tinrac;
