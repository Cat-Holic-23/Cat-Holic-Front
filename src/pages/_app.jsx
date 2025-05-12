import "@/styles/globals.css";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }
  useEffect(() => {
    setScreenSize();
    window.addEventListener("resize", setScreenSize);
    return () => window.removeEventListener("resize", setScreenSize);
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
