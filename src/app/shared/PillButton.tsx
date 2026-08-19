import { C, FONT } from "../constants";

interface PillButtonProps {
  children: React.ReactNode;
  active?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

export function PillButton({
  children,
  active = false,
  disabled = false,
  onClick,
}: PillButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="px-3.5 py-1.5 rounded-full text-[9px] font-bold transition-all"
      style={{
        background: disabled
          ? C.disabled
          : active
            ? C.primary
            : C.surface,
        color: disabled
          ? C.disabledText
          : active
            ? "#FFFFFF"
            : C.textSoft,
        border: `1px solid ${
          disabled
            ? C.disabled
            : active
              ? C.primary
              : C.border
        }`,
        fontFamily: FONT.family,
      }}
    >
      {children}
    </button>
  );
}
