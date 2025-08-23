import RevealOnScroll from "@/components/RevealOnScroll";
import About from "@/components/About";
import ContactForm from "@/components/ContactForm";
import DesignThoughts from "@/components/DesignThoughts";
import Qualification from "@/components/Qualification";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PremiumTools from "@/components/PremiumTools";
import Profile from "@/components/Profile";
import Projects from "@/components/Projects";

const PortfolioPage = () => {
  return (
    <div className="relative bg-neutral-950 flex flex-col items-center">
      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 w-full z-50">
        <div className="flex justify-center py-4">
          <Navbar />
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-6xl flex flex-col md:flex-row pt-28 px-6 md:px-12 gap-12">

        {/* Profile on left for large screens */}
        <div className="md:w-1/3 md:sticky md:top-28 md:self-start">
          <RevealOnScroll>
            <Profile />
          </RevealOnScroll>
        </div>

        {/* Other sections on right */}
        <div className="flex flex-col gap-20 md:w-2/3">
          <div id="home">
            <RevealOnScroll delay={0.1}>
              <About />
            </RevealOnScroll>
          </div>

          <div id="projects">
            <RevealOnScroll delay={0.1}>
              <Projects />
            </RevealOnScroll>
          </div>

          <div id="qualification">
            <RevealOnScroll delay={0.2}>
              <Qualification />
            </RevealOnScroll>
          </div>

          <div id="tools">
            <RevealOnScroll delay={0.3}>
              <PremiumTools />
            </RevealOnScroll>
          </div>

          <div id="thoughts">
            <RevealOnScroll delay={0.4}>
              <DesignThoughts />
            </RevealOnScroll>
          </div>
          <div id="contact">
          <RevealOnScroll delay={0.5}><ContactForm /></RevealOnScroll>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default PortfolioPage;
