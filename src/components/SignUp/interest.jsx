import React, { useRef, useState, useEffect } from "react";

const categories = [
  {
    key: "painting",
    label: "그림그리기",
    icon: "/svgs/painting.svg",
    color: "#A0D468",
  },
  {
    key: "music",
    label: "음악듣기",
    icon: "/svgs/music.svg",
    color: "#FF6D7C",
  },
  { key: "sleep", label: "잠자기", icon: "/svgs/sleep.svg", color: "#5D9BEC" },
  {
    key: "piano",
    label: "피아노치기",
    icon: "/svgs/piano.svg",
    color: "#FFCE54",
  },
  {
    key: "gaming",
    label: "게임하기",
    icon: "/svgs/gaming.svg",
    color: "#AC92ED",
  },
];

const RADIUS = 180;
const CENTER = 200;
const ITEM_SIZE = 132;
const CATEGORY_COUNT = categories.length;
const ANGLE_STEP = 360 / CATEGORY_COUNT;

export default function InterestSpinner() {
  const [angle, setAngle] = useState(0);
  const [hovered, setHovered] = useState(null);
  const [topIdx, setTopIdx] = useState(0);
  const dragging = useRef(false);
  const lastX = useRef(0);

  const startDrag = (clientX) => {
    dragging.current = true;
    lastX.current = clientX;
  };

  const moveDrag = (clientX) => {
    if (!dragging.current) return;
    const dx = clientX - lastX.current;
    setAngle((prev) => prev + dx * 0.7);
    lastX.current = clientX;
  };

  const stopDrag = () => {
    dragging.current = false;
    snapToNearest();
  };

  const handleMouseDown = (e) => startDrag(e.clientX);
  const handleMouseMove = (e) => moveDrag(e.clientX);
  const handleMouseUp = stopDrag;
  const handleTouchStart = (e) => startDrag(e.touches[0].clientX);
  const handleTouchMove = (e) => moveDrag(e.touches[0].clientX);
  const handleTouchEnd = stopDrag;

  const handleWheel = (e) => {
    e.preventDefault();
    const direction = e.deltaY > 0 ? 1 : -1;
    setAngle((prev) => {
      const newAngle = prev - direction * ANGLE_STEP;
      setTimeout(() => {
        snapToNearest(newAngle);
      }, 180);
      return newAngle;
    });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", handleTouchEnd);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  function snapToNearest(targetAngle = angle) {
    let minDiff = 360;
    let nearestIdx = 0;
    let nearestTheta = 0;
    for (let i = 0; i < CATEGORY_COUNT; i++) {
      let theta = (ANGLE_STEP * i + targetAngle) % 360;
      let diff = Math.abs((((theta - 270) % 360) + 360) % 360);
      if (diff < minDiff) {
        minDiff = diff;
        nearestIdx = i;
        nearestTheta = theta;
      }
    }
    let adjust = 270 - nearestTheta;
    setAngle(targetAngle + adjust);
    setTopIdx(nearestIdx);
  }

  return (
    <div
      className="relative mx-auto touch-none select-none"
      style={{ width: 400, height: 400 }}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      onWheel={handleWheel}
    >
      {categories.map((cat, idx) => {
        const theta = (ANGLE_STEP * idx + angle) % 360;
        const rad = (theta * Math.PI) / 180;
        const x = CENTER + RADIUS * Math.cos(rad) - ITEM_SIZE / 2;
        const y = CENTER + RADIUS * Math.sin(rad) - ITEM_SIZE / 2;
        const diff = Math.abs((((theta - 270) % 360) + 360) % 360);
        const scale = diff < 60 ? 1.1 : diff < 120 ? 0.95 : 0.8;
        const opacity = diff < 90 ? 1 : 0.4;
        const zIndex = 1000 - diff;
        const isHovered = hovered === idx || topIdx === idx;

        return (
          <div
            key={cat.key}
            className="absolute flex flex-col items-center justify-center rounded-full shadow-md cursor-grab"
            style={{
              left: x,
              top: y,
              width: ITEM_SIZE,
              height: ITEM_SIZE,
              background: cat.color,
              transform: `scale(${scale})`,
              opacity,
              zIndex,
              transition: dragging.current
                ? "none"
                : "transform 0.3s, opacity 0.3s",
              willChange: "transform, opacity",
            }}
            onMouseEnter={() => setHovered(idx)}
            onMouseLeave={() => setHovered(null)}
            onTouchStart={() => setHovered(idx)}
            onTouchEnd={() => setHovered(null)}
          >
            <img
              src={cat.icon}
              alt={cat.label}
              className="pointer-events-none object-contain"
              style={{
                width: 56,
                height: 56,
                marginBottom: isHovered ? 8 : 0,
                transition: "margin-bottom 0.2s",
              }}
            />
            <span
              className="font-semibold text-white text-center text-[18px] leading-[140%] tracking-[-0.4px] pointer-events-none"
              style={{
                fontFamily: "Pretendard, sans-serif",
                textShadow: "0 2px 8px rgba(0,0,0,0.08)",
                opacity: isHovered ? 1 : 0,
                height: isHovered ? "22px" : 0,
                transition: "opacity 0.2s, height 0.2s",
                overflow: "hidden",
              }}
            >
              {cat.label}
            </span>
          </div>
        );
      })}
    </div>
  );
}
