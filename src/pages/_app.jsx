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

  useEffect(() => {
    const whiteBgRoutes = [
      "/int",
      "/createaccount",
      "/login",
      "/story",
      "/userInfo",
    ];
    if (whiteBgRoutes.includes(router.pathname)) {
      document.body.style.background = "white";
      document.body.style.backgroundImage = "none";
    } else {
      document.body.style.background =
        "url('/배경.png') no-repeat center center";
      document.body.style.backgroundSize = "cover";
      document.body.style.backgroundRepeat = "no-repeat";
      document.body.style.backgroundPosition = "center center";
    }
  }, [router.pathname]);

  return (
    <>
      <Component {...pageProps} />
      {router.pathname === "/home" && <Navbar />}
    </>
  );
}

export default MyApp;
