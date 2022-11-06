import styles from "../style";
import { laptop } from "../assets";

const Testimonials = () => (
  <section
    id="clients"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}
  >
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <img src={laptop} className="w-[100%] md:w-[55%]" />
      <div className="w-full md:mt-0 mt-9 md:ml-10">
        <h2 className={`${styles.heading2} cursor-pointer`}>
        Những <a className="text-gradient"> mẩu tin</a> như vậy chắc hẳn bạn đã gặp nhiều lần
        </h2>
        <h1 className={`${styles.heading1} cursor-pointer`}>Và chắc hẳn nó là tin giả rồi!</h1>
        <p className={`${styles.paragraph} cursor-pointer text-left max-w-[450px]`}>
          Vậy chúng ta cần phải làm sao để nhận biết chúng?
        </p>
        <p className="font-poppins font-normal text-dimWhite text-[15px] leading-[30.8px]">*Việt Tân là tổ chức khủng bố, chống phá nhà nước</p>
      </div>
    </div>
  </section>
);

export default Testimonials;
