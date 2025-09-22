
import {HeroSection} from "@/components/layout/main/hero";
import AboutUs from "@/components/layout/main/about-us";
import Stats from "@/components/layout/main/stats";
import QnA from "@/components/layout/main/qna";
import Footer from "@/components/layout/footer/footer";
import Tech from "@/components/layout/main/tech";
import SmoothScroll from "@/components/ui/smooth-scroll";
export default function Page() {
  return (
    <>
      <SmoothScroll>
        <HeroSection />
        <AboutUs />
        <Stats />
        <Tech />
        <QnA />
        <Footer />
      </SmoothScroll>
    </>
  );
}
