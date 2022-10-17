import type { AppProps } from "next/app";
import "../styles/globals.css";
import "../styles/main.css";
import Navbar from "../src/components/common/Navbar/Navbar";
import FooterAldia from "../src/components/common/Footer/FooterAldia";
import { useRouter } from "next/router";
import { MantineProvider } from "@mantine/core";
function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  // const { width: currWidth } = useViewport();
  // const changeNavBar = currWidth < 1200;
  return (
    <MantineProvider
      theme={{
        fontFamily: "Dosis, sans-serif",
      }}
    >
      <Navbar />
      <div className="background bg-slate-50">
        {/* {changeNavBar && <NavbarMobile />} */}
        {/* <div
          className={`${!router.asPath.includes("dashboard") && `bg-image`}`}
        > */}
        <Component {...pageProps} />
        {/* </div> */}

        <FooterAldia />
      </div>
    </MantineProvider>
  );
}

export default MyApp;
