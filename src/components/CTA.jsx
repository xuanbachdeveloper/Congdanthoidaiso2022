import styles from "../style";
import Button from "./Button";

const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Hai kĩ năng trên chắc hẳn vẫn chưa đủ cho bạn trở thành một công dân số hoàn chỉnh!</h2>
      <p className={`${styles.paragraph} max-w-[490px] mt-5`}>
        Cùng tham gia khóa học "Tư duy thời đại số" hoàn toàn miễn phí do Meta (FaceBook) và HocMai tổ chức nhé!
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button />
    </div>
  </section>
);

export default CTA;
