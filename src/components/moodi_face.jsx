//무디
import React, { useEffect } from "react";

export default function Moodi() {
  useEffect(() => {
    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    setVh();
    window.addEventListener("resize", setVh);

    return () => window.removeEventListener("resize", setVh);
  }, []);

  return (
    <img
      src="/svgs/Moodi_face.svg"
      alt="Moodi"
      className="object-contain"
      style={{ height: "calc(var(--vh, 1vh) * 30)" }}
    />
  );
}
