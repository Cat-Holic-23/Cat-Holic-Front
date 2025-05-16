import React, { useState, useEffect } from "react";

const categories = [
  { key: "painting", label: "DRAWING", icon: "/svgs/painting.svg", color: "#A0D468" },
  { key: "music", label: "MUSIC", icon: "/svgs/music.svg", color: "#FF6D7C" },
  { key: "sleep", label: "SLEEPING", icon: "/svgs/sleep.svg", color: "#5D9BEC" },
  { key: "piano", label: "PIANO", icon: "/svgs/piano.svg", color: "#FFCE54" },
  { key: "gaming", label: "PLAY GAMES", icon: "/svgs/gaming.svg", color: "#AC92ED" },
];

export { categories };

export default function InterestSpinner({ value = [], onChange, onSpinNext }) {
  const [centerIdx, setCenterIdx] = useState(0);
  const selected = value;

  const spinNext = () => setCenterIdx((prev) => (prev + 1) % categories.length);

  useEffect(() => {
    if (onSpinNext) {
      onSpinNext.current = spinNext;
    }
  }, [onSpinNext]);

  const handleCenterClick = (e) => {
    e.stopPropagation();
    e.preventDefault(); // 클릭 시 스크롤, 터치 이동 방지
    const key = categories[centerIdx].key;
    const next = selected.includes(key)
      ? selected.filter((k) => k !== key)
      : [...selected, key];
    onChange(next);
  };

  const handleAnyClick = (e) => {
    const isCenterItem = e.target.closest(".interest-item-center");
    if (isCenterItem) return;

    spinNext();
  };

  const getVisible = () => {
    const len = categories.length;
    return [
      categories[(centerIdx - 1 + len) % len],
      categories[centerIdx],
      categories[(centerIdx + 1) % len],
    ];
  };

  const visible = getVisible();

  const positions = [
    { left: 0, top: 44, scale: 0.8, opacity: 0.6, zIndex: 1 },
    { left: 116, top: 0, scale: 1.1, opacity: 1, zIndex: 2 },
    { left: 232, top: 44, scale: 0.8, opacity: 0.6, zIndex: 1 },
  ];

  return (
    <div
      className="relative mx-auto flex justify-center items-center mt-4"
      style={{ width: 320, height: 140 }}
      onClick={handleAnyClick}
    >
      {visible.map((cat, idx) => {
        const isCenter = idx === 1;
        const isSelected = selected.includes(cat.key);
        const position = positions[idx];

        return (
          <div
            key={cat.key}
            className={`interest-item absolute flex flex-col items-center justify-center rounded-full shadow-md ${
              isCenter ? "interest-item-center" : ""
            }`}
            style={{
              left: position.left,
              top: position.top,
              width: 105,
              height: 105,
              backgroundColor: cat.color,
              transform: `scale(${position.scale})`,
              opacity: position.opacity,
              zIndex: position.zIndex,
              border: isSelected ? "3px solid #FFD600" : "none",
              transition: "all 0.2s cubic-bezier(.4,0,.2,1)",
              boxShadow: isCenter ? "0 4px 16px rgba(0,0,0,0.08)" : "none",
              pointerEvents: "auto",
              position: "absolute",
            }}
          >
            <button
              type="button"
              className="w-[150px] h-[150px] rounded-full bg-transparent flex flex-col items-center justify-center cursor-pointer"
              onClick={handleCenterClick}
              onTouchStart={handleCenterClick}
            >
              <img
                src={cat.icon}
                alt={cat.label}
                className={`${
                  isCenter ? "w-[45px] h-[45px] mb-1.5" : "w-[61px] h-[61px] mb-0"
                }`}
              />
              <span
                className={`font-semibold font-fredoka text-white text-center transition-opacity overflow-hidden text-[14px] leading-[120%] tracking-[-0.3px] ${
                  isCenter ? "opacity-100 h-[18px]" : "opacity-0 h-0"
                }`}
                style={{ fontWeight: isCenter ? 600 : 400 }}
              >
                {isCenter && cat.label}
              </span>
              {isSelected && (
                <img
                  src="/svgs/check.svg"
                  alt="Checked"
                  className="absolute right-0.5 bottom-0.5 w-6 h-6 bg-white rounded-full"
                />
              )}
            </button>
          </div>
        );
      })}
    </div>
  );
}
