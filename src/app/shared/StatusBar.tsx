import { C } from "../constants";

interface StatusBarProps {
  dark?: boolean;
}

export function StatusBar({ dark = false }: StatusBarProps) {
  const color = dark ? "#FFFFFF" : C.text;

  return (
    <div
      className="flex items-center justify-between px-5 pt-2 pb-1 flex-shrink-0"
      style={{ color }}
    >
      <span
        className="text-[10px] font-bold"
        style={{ fontFamily: "Space Mono, monospace" }}
      >
        9:41
      </span>

      <div className="flex items-center gap-1.5">
        <svg width="14" height="10" viewBox="0 0 14 10">
          <rect x="0" y="6" width="2.5" height="4" rx="0.5" fill={color} opacity=".4" />
          <rect x="3.5" y="4" width="2.5" height="6" rx="0.5" fill={color} opacity=".6" />
          <rect x="7" y="2" width="2.5" height="8" rx="0.5" fill={color} opacity=".8" />
          <rect x="10.5" y="0" width="2.5" height="10" rx="0.5" fill={color} />
        </svg>

        <svg width="13" height="10" viewBox="0 0 13 10">
          <circle cx="6.5" cy="8.5" r="1" fill={color} />
          <path
            d="M4.2 6.2C5 5.5 5.7 5.1 6.5 5.1s1.5.4 2.3 1.1"
            stroke={color}
            strokeWidth="1.2"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M2 3.8C3.3 2.2 4.8 1.3 6.5 1.3s3.2.9 4.5 2.5"
            stroke={color}
            strokeWidth="1.2"
            strokeLinecap="round"
            fill="none"
            opacity=".6"
          />
        </svg>

        <svg width="22" height="11" viewBox="0 0 22 11">
          <rect
            x=".5"
            y=".5"
            width="17"
            height="10"
            rx="2.5"
            stroke={color}
            strokeOpacity=".5"
            fill="none"
          />
          <rect x="18" y="3.5" width="2" height="4" rx="1" fill={color} opacity=".5" />
          <rect x="2" y="2" width="12" height="7" rx="1.5" fill={dark ? "#FFFFFF" : C.primary} />
        </svg>
      </div>
    </div>
  );
}
