import { C, FONT } from "../constants";

interface LogoProps {
  dark?: boolean;
}

export function Logo({ dark = false }: LogoProps) {
  return (
    <div
      className="font-bold tracking-tight"
      style={{
        fontSize: 18,
        color: dark ? "#FFFFFF" : C.primary,
        fontFamily: FONT.family,
      }}
    >
      sedap<span style={{ color: dark ? "#FFD5DC" : C.primaryDark }}>Z</span>
    </div>
  );
}
