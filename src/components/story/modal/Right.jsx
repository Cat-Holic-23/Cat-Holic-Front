import React from "react";
import ContinueButton from "@/components/buttons/ContinueButton";

export default function RightModal({ feedback, onContinue }) {
  return (
    <div
      style={{
        borderRadius: "15px 15px 0px 0px",
        border: "1px solid #000",
        background: "#FFF",
        display: "flex",
        width: "390px",
        height: "196px",
        padding: "0px 51px 34px 51px",
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "center",
        gap: "10px",
        boxSizing: "border-box",
      }}
    >
      {/* Good Job + 체크 아이콘 */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          marginBottom: "6px",
        }}
      >
        <img
          src="/svgs/check.svg"
          alt="check"
          style={{
            width: "24px",
            height: "24px",
            flexShrink: 0,
          }}
        />
        <span
          style={{
            color: "#424242",
            fontFamily: "Pretendard, sans-serif",
            fontSize: "28px",
            fontStyle: "normal",
            fontWeight: 700,
            lineHeight: "140%",
            letterSpacing: "-0.56px",
          }}
        >
          Good Job!
        </span>
      </div>
      {/* 피드백 텍스트 */}
      <div
        style={{
          color: "#424242",
          fontFamily: "Pretendard, sans-serif",
          fontSize: "20px",
          fontStyle: "normal",
          fontWeight: 600,
          lineHeight: "140%",
          letterSpacing: "-0.4px",
          marginBottom: "28px",
          textAlign: "center",
        }}
      >
        {feedback}
      </div>
      {/* CONTINUE 버튼 */}
      <ContinueButton onClick={onContinue} />
    </div>
  );
}
