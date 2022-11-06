import styles, { layout } from "../style";
import Bounce from "react-reveal/Bounce"
const Tingia = () => (
  <section id="product" className={layout.sectionReverse}>
    {/* <div className={layout.sectionImgReverse}>
      <img src={bill} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
    </div> */}

    <div className={`${layout.sectionInfo}`}>
      <h2 className={`${styles.heading2} text-center flex justify-center`}>
      <a className="underline decoration-indigo-500 hover:text-slate-300 inline-block cursor-pointer">
Tin giả là gì?</a>
      </h2>
      <p
        className={`${styles.paragraph}  mt-5 text-center flex justify-center items-center`}
      ><Bounce bottom>
        Tin giả (tiếng Anh: fake news), còn được gọi là tin rác hoặc tin tức giả mạo, là một loại hình báo chí hoặc tuyên truyền bao gồm các thông tin cố ý hoặc trò lừa bịp lan truyền qua phương tiện truyền thông tin tức truyền thống (in và phát sóng) hoặc phương tiện truyền thông xã hội trực tuyến. Thông tin sai lệch thường được các phóng viên trả tiền cho các trang đăng tin để được đăng các tin tức này, một thực tế phi đạo đức được gọi là báo chí trả tiền. Tin tức kỹ thuật số đã mang lại và tăng việc sử dụng tin tức giả, hoặc báo chí màu vàng (yellow journalism). Tin tức sau đó thường được nhắc lại là thông tin sai trên phương tiện truyền thông xã hội nhưng đôi khi cũng tìm được đường đến những phương tiện truyền thông chính thống.

Tin giả được viết và xuất bản thường là với mục đích đánh lừa nhằm gây thiệt hại cho một cơ quan, thực thể hoặc người, và/hoặc đạt được về mặt tài chính hoặc chính trị, nó thường sử dụng lối viết giật gân, không trung thực hoặc dùng các tiêu đề bịa đặt để tăng lượng độc giả. Tương tự, các câu chuyện và tiêu đề bẫy để nhấn chuột vào kiếm doanh thu quảng cáo từ hoạt động này.
      </Bounce></p>
    </div>
  </section>
);

export default Tingia;
