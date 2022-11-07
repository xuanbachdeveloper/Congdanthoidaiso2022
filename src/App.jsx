import styles from "./style";
import { useEffect } from "react";
import {
  Tinrac,
  ThongTin,
  Vidu,
  CTA,
  Footer,
  Navbar,
  Testimonials,
  Hero,
  Tingia,
  Baocao
} from "./components";
import Card from "./components/Card";

function App() {
  useEffect(() => {
    window.history.scrollRestoration = 'manual'
  }, []);
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Vidu />
          <Tinrac />
          <ThongTin />
          <Testimonials />
          <Tingia />
          <Card />
          <Baocao />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
