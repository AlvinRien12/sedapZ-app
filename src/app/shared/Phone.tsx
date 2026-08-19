import { C, FONT } from "../constants";

interface PhoneProps {
  children: React.ReactNode;
  label: string;
  frId: string;
}

export function Phone({ children, label, frId }: PhoneProps) {
  return (
    <div className="flex flex-col items-center gap-3 flex-shrink-0">
      <div
        className="px-3 py-1 rounded-full text-[10px] font-bold tracking-wider"
        style={{
          background: C.primarySoft,
          color: C.primary,
          border: `1px solid #F0C8D0`,
          fontFamily: "Space Mono, monospace",
        }}
      >
        {frId}
      </div>

      {/* Phone frame */}
      <div
        className="rounded-[32px] p-[6px] shadow-2xl flex-shrink-0"
        style={{
          background: "#202023",
          border: "2px solid #333338",
          boxShadow: "0 24px 50px rgba(0,0,0,.16)",
        }}
      >
        {/* Speaker */}
        <div className="flex justify-center mb-1">
          <div
            className="w-16 h-1 rounded-full"
            style={{ background: "#111" }}
          />
        </div>

        {/* Screen */}
        <div
          className="rounded-[25px] overflow-hidden flex flex-col"
          style={{
            width: 260,
            height: 520,
            background: C.bg,
          }}
        >
          {children}
        </div>

        {/* Home indicator */}
        <div className="flex justify-center mt-1">
          <div
            className="w-14 h-1 rounded-full"
            style={{ background: "#444" }}
          />
        </div>
      </div>

      {/* Label */}
      <div className="text-center max-w-[260px]">
        <p
          className="text-xs font-bold"
          style={{
            color: C.text,
            fontFamily: FONT.family,
          }}
        >
          {label}
        </p>
      </div>
    </div>
  );
}
