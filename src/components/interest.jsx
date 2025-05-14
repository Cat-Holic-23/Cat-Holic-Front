import React, { useState, useEffect } from "react";

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

export { categories };

export default function InterestSpinner({ value = [], onChange, onSpinNext }) {
  const [centerIdx, setCenterIdx] = useState(0);
  const selected = value;

  // 한 칸씩 오른쪽으로만 회전
  const spinNext = () => setCenterIdx((prev) => (prev + 1) % categories.length);

  useEffect(() => {
    if (onSpinNext) {
      onSpinNext.current = spinNext;
    }
  }, [onSpinNext, spinNext]);

  // 중앙 항목 클릭 시 선택/해제
  const handleCenterClick = (e) => {
    e.stopPropagation();
    const key = categories[centerIdx].key;
    let next;
    if (selected.includes(key)) {
      next = selected.filter((k) => k !== key);
    } else {
      next = [...selected, key];
    }
    onChange(next);
  };

  // 스피너 아무 곳이나 터치/클릭 시 오른쪽으로만 회전
  const handleAnyTouch = (e) => {
    if (e.target.closest("button")) return;
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
      className="relative mx-auto flex justify-center items-center"
      style={{ width: 320, height: 140, marginTop: 16 }}
      onClick={handleAnyTouch}
      onTouchEnd={handleAnyTouch}
    >
      {visible.map((cat, idx) => {
        const isCenter = idx === 1;
        const isSelected = selected.includes(cat.key);
        const position = positions[idx];

        return (
          <div
            key={cat.key}
            className="absolute flex flex-col items-center justify-center rounded-full shadow-md"
            style={{
              left: position.left,
              top: position.top,
              width: 88,
              height: 88,
              background: cat.color,
              transform: `scale(${position.scale})`,
              opacity: position.opacity,
              zIndex: position.zIndex,
              border: isSelected ? "3px solid #FFD600" : "none",
              transition: "all 0.2s cubic-bezier(.4,0,.2,1)",
              cursor: "pointer",
              boxShadow: isCenter ? "0 4px 16px rgba(0,0,0,0.08)" : "none",
            }}
            // 중앙(hover)만 선택/해제, 좌우는 아무 동작 없음
            onClick={(e) => {
              e.stopPropagation();
              if (isCenter) handleCenterClick(e);
            }}
            onTouchEnd={(e) => {
              e.stopPropagation();
              if (isCenter) handleCenterClick(e);
            }}
          >
            <img
              src={cat.icon}
              alt={cat.label}
              style={{
                width: isCenter ? 40 : 56,
                height: isCenter ? 40 : 56,
                marginBottom: isCenter ? 6 : 0,
              }}
            />
            <span
              className="font-semibold text-white text-center"
              style={{
                fontSize: isCenter ? 14 : 0,
                fontWeight: isCenter ? 600 : 400,
                lineHeight: "120%",
                letterSpacing: "-0.3px",
                opacity: isCenter ? 1 : 0,
                height: isCenter ? "18px" : 0,
                transition: "opacity 0.2s, height 0.2s",
                overflow: "hidden",
                textAlign: "center",
              }}
            >
              {isCenter && cat.label}
            </span>
            {isSelected && (
              <img
                src="/svgs/check.svg"
                alt="선택됨"
                style={{
                  position: "absolute",
                  right: 3,
                  bottom: 1,
                  width: 24,
                  height: 24,
                  background: "#fff",
                  borderRadius: "50%",
                }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
