import { report } from "../assets";
import styles, { layout } from "../style";
import { Fade } from "react-reveal";

function Baocao() {
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={`${styles.heading2} cursor-pointer`}>
          <a>Khi phát hiện những thông tin sai lệch trên Facebook. Bạn hãy sử dụng </a>
          <a className="underline decoration-sky-500 hover:text-slate-300"> công cụ báo cáo</a>
        </h2>
        <h1 className={styles.heading1}>Tìm hiểu thêm về công cụ báo cáo tại: <a className=" hover:underline decoration-indigo-500 text-xl md:text-3xl" href="https://www.facebook.com/help/reportlinks">facebook.com/help/reportlinks</a></h1>
      </div>

      <div className={`flex-col ml-2 md:ml-10`}>
        <img className="" src={report} />
      </div>
    </section>
  );
}

export default Baocao;
