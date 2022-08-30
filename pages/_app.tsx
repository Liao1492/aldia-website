import type { AppProps } from "next/app";
import "../styles/globals.css";
import "../styles/main.css";
import Navbar from "../src/components/common/Navbar/Navbar";
import FooterAldia from "../src/components/common/Footer/FooterAldia";
import useViewport from "../src/hooks/useViewport";
import NavbarMobile from "../src/components/common/Navbar/NavbarMobile";
function MyApp({ Component, pageProps }: AppProps) {
  // const { width: currWidth } = useViewport();
  // const changeNavBar = currWidth < 1200;
  return (
    <>
      <Navbar />
      <div className="background">
        {/* {changeNavBar && <NavbarMobile />} */}
        <Component {...pageProps} />
      </div>
      <FooterAldia />
    </>
  );
}

export default MyApp;
