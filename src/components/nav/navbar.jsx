import React, { useState } from "react";
import { useRouter } from "next/router";

const MENU = [
  { key: "home", label: "Home", icon: "/svgs/home.svg", path: "/home" },
  { key: "story", label: "Story", icon: "/svgs/story.svg", path: "/story" },
  { key: "game", label: "Game", icon: "/svgs/game.svg" },
  { key: "item", label: "Item", icon: "/svgs/item.svg" },
];

export default function Navbar() {
  const router = useRouter();
  const [hovered, setHovered] = useState(null);

  const handleMenuClick = (menu) => {
    if (menu.key === "game" || menu.key === "item") {
      alert("Coming Soon");
      return;
    }
    if (menu.path) {
      router.push(menu.path);
    }
  };

  return (
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-[390px] h-[88px] flex flex-col items-start gap-2 bg-white rounded-t-xl shadow-[0_-2px_8px_rgba(76,160,255,0.05)] z-50">
      <div className="flex w-full justify-between">
        {MENU.map((menu) => {
          const isActive = router.pathname === menu.path;
          const isHover = hovered === menu.key;
          const color = isActive || isHover ? "#4CA0FF" : "#8AB6E9";
          const opacity = isActive || isHover ? 1 : 0.5;

          return (
            <button
              key={menu.key}
              onClick={() => handleMenuClick(menu)}
              onMouseEnter={() => setHovered(menu.key)}
              onMouseLeave={() => setHovered(null)}
              className="flex flex-col items-center justify-end w-[97.5px] h-full bg-none border-none cursor-pointer outline-none select-none p-0"
            >
              <img
                src={menu.icon}
                alt={menu.label}
                className="block w-[36px] h-[36px]"
                style={{
                  opacity,
                  transition: "opacity 0.2s",
                  marginBottom: menu.key === "story" ? "4px" : "8px",
                }}
              />
              <span
                className="block text-center text-[14px] font-semibold leading-[140%] tracking-[-0.28px] transition-colors font-pretendard"
                style={{ color }}
              >
                {menu.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
