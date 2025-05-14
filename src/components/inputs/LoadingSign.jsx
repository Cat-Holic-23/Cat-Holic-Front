import React, { useEffect, useState } from "react";
import Image from "next/image";

const moodiImages = [
  "/svgs/Sad_Moodi.svg",
  "/svgs/Happy_Moodi.svg",
  "/svgs/Mad_Moodi.svg",
  "/svgs/Surp_Moodi.svg",
];

export default function StoryLoading() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % moodiImages.length);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white">
      <div className="animate-bounce">
        <Image src={moodiImages[index]} alt="loading" width={120} height={120} />
      </div>
      <p className="mt-6 text-[#424242] text-lg font-fredoka font-medium animate-float2">
        Moodi is remembering its friend.
      </p>
    </div>
  );
}
