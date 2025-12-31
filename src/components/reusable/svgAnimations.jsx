import React from "react";
export function MedicationErrorSVG({ active }) {
  return (
    <svg viewBox="0 0 300 200" className="w-full h-full">
      {/* Document */}
      <rect x="70" y="30" width="160" height="140" rx="12" fill="#f8fafc" stroke="#cbd5e1"/>

      {/* Error lines */}
      {[60, 85, 110].map((y, i) => (
        <line
          key={i}
          x1="90" y1={y} x2="210" y2={y}
          stroke="#ef4444"
          strokeWidth="3"
          style={{
            opacity: active ? 0 : 1,
            transition: "opacity 0.4s ease"
          }}
        />
      ))}

      {/* Checkmark */}
      <path
        d="M120 120 L140 140 L180 95"
        fill="none"
        stroke="#22c55e"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="100"
        strokeDashoffset={active ? 0 : 100}
        style={{ transition: "stroke-dashoffset 0.6s ease" }}
      />
    </svg>
  );
}

export function AutoEntrySVG({ active }) {
  return (
    <svg viewBox="0 0 300 200" className="w-full h-full">
      {/* Fields */}
      {[50, 80, 110].map((y, i) => (
        <rect key={i} x="50" y={y} width="200" height="18" rx="6" fill="#e5e7eb"/>
      ))}

      {/* AI fill */}
      <rect
        x="50" y="50" height="18" rx="6"
        width={active ? 200 : 0}
        fill="#22c55e"
        style={{ transition: "width 0.6s ease" }}
      />
    </svg>
  );
}

export function LaborCostSVG({ active }) {
  return (
    <svg viewBox="0 0 300 200" className="w-full h-full">
      {[0, 1, 2].map((i) => (
        <rect
          key={i}
          x="100"
          y={60 + i * (active ? 12 : 28)}
          width="100"
          height="16"
          rx="6"
          fill="#94a3b8"
          style={{ transition: "all 0.4s ease" }}
        />
      ))}
    </svg>
  );
}

export function ComplianceSVG({ active }) {
  return (
    <svg viewBox="0 0 300 200" className="w-full h-full">
      {[0, 1, 2].map((i) => (
        <circle
          key={i}
          cx="90"
          cy={60 + i * 30}
          r="8"
          fill={active ? "#22c55e" : "#cbd5e1"}
          style={{ transition: "fill 0.3s ease", transitionDelay: `${i * 0.1}s` }}
        />
      ))}

      {/* Lock */}
      <rect x="160" y="80" width="40" height="40" rx="6" fill="#64748b"/>
      <path
        d="M170 80 V65 C170 55 190 55 190 65 V80"
        fill="none"
        stroke="#64748b"
        strokeWidth="4"
        style={{
          opacity: active ? 1 : 0,
          transition: "opacity 0.4s ease"
        }}
      />
    </svg>
  );
}

export function ScaleSVG({ active }) {
  return (
    <svg viewBox="0 0 300 200" className="w-full h-full">
      <rect x="80" y={active ? 40 : 100} width="40" height={active ? 100 : 40} fill="#22c55e"
        style={{ transition: "all 0.5s ease" }} />
      <rect x="160" y="100" width="40" height="40" fill="#94a3b8"/>
    </svg>
  );
}

export function InsightsSVG({ active }) {
  return (
    <svg viewBox="0 0 300 200" className="w-full h-full">
      <path
        d="M50 130 L100 90 L150 110 L200 70"
        fill="none"
        stroke="#0ea5e9"
        strokeWidth="4"
        strokeDasharray="200"
        strokeDashoffset={active ? 0 : 200}
        style={{ transition: "stroke-dashoffset 0.6s ease" }}
      />
    </svg>
  );
}

export function AutomationSVG() {
  return (
    <svg viewBox="0 0 300 200" className="w-full h-full animate-spin-slow">
      <circle cx="150" cy="100" r="50" fill="none" stroke="#22c55e" strokeWidth="6"/>
    </svg>
  );
}

export function SupportSVG({ active }) {
  return (
    <svg viewBox="0 0 300 200" className="w-full h-full">
      <rect
        x="90" y="60" width="120" height="80" rx="16"
        fill="#0f172a"
        style={{
          boxShadow: active ? "0 0 20px rgba(34,197,94,.6)" : "none",
          transition: "box-shadow 0.4s ease"
        }}
      />
    </svg>
  );
}
