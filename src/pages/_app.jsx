import { useEffect } from "react";
import Navbar from "../components/nav/navbar";
import { useRouter } from "next/router";
import "./globals.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }

  useEffect(() => {
    setScreenSize();
    window.addEventListener("resize", setScreenSize);
    return () => window.removeEventListener("resize", setScreenSize);
  }, []);

  return (
    <>
      <Component {...pageProps} />
      {router.pathname === "/home" && <Navbar />}
    </>
  );
}

export default MyApp;
