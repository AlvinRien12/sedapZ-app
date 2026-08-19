import { useState } from "react";
import {
  ChevronLeft,
  ChevronDown,
  Zap,
  ToggleLeft,
  ToggleRight,
} from "lucide-react";
import { C, FONT } from "../../constants";
import { StatusBar } from "../../shared/StatusBar";
import { AdminNav } from "../../shared/AdminNav";

export function FR4PointSettings() {
  const [transfer, setTransfer] = useState(true);
  const [birthday, setBirthday] = useState(true);
  const [expiry, setExpiry] = useState(false);

  const tiers = [
    {
      name: "Bronze",
      range: "0 – 999 pts",
      color: "#B97843",
    },
    {
      name: "Silver",
      range: "1,000 – 4,999 pts",
      color: "#8B8D93",
    },
    {
      name: "Gold",
      range: "5,000 – 9,999 pts",
      color: C.primary,
    },
    {
      name: "Platinum",
      range: "10,000+ pts",
      color: "#62646B",
    },
  ];

  const Toggle = ({
    value,
    onClick,
  }: {
    value: boolean;
    onClick: () => void;
  }) => (
    <button onClick={onClick}>
      {value ? (
        <ToggleRight size={26} color={C.primary} />
      ) : (
        <ToggleLeft size={26} color="#B5B6BC" />
      )}
    </button>
  );

  return (
    <>
      <div
        className="flex-1 overflow-hidden flex flex-col"
        style={{ background: C.bg }}
      >
        <StatusBar />

        <div
          className="flex items-center gap-2 px-4 py-2 flex-shrink-0"
          style={{ background: C.surface }}
        >
          <ChevronLeft size={18} color={C.textSoft} />

          <div>
            <p
              className="text-[14px] font-extrabold"
              style={{
                color: C.text,
                fontFamily: FONT.family,
              }}
            >
              Points Settings
            </p>

            <p
              className="text-[8px]"
              style={{
                color: C.muted,
                fontFamily: FONT.family,
              }}
            >
              Manage your loyalty programme
            </p>
          </div>

          <span
            className="ml-auto px-2 py-1 rounded-full text-[7px] font-bold"
            style={{
              background: C.primarySoft,
              color: C.primary,
              fontFamily: FONT.family,
            }}
          >
            ADMIN
          </span>
        </div>

        <div className="flex-1 overflow-hidden px-3 py-2">
          <div
            className="rounded-[18px] p-3 mb-2"
            style={{
              background: C.surface,
              border: `1px solid ${C.border}`,
            }}
          >
            <div className="flex items-center gap-1.5 mb-2">
              <Zap size={13} color={C.primary} />
              <p
                className="text-[11px] font-bold"
                style={{
                  color: C.text,
                  fontFamily: FONT.family,
                }}
              >
                Earning rules
              </p>
            </div>

            {[
              ["Earning rate", "RM 1.00 = 1 pt"],
              ["Minimum purchase", "RM 5.00"],
              ["Rounding", "Round down"],
            ].map((rule, i) => (
              <div
                key={i}
                className="flex items-center justify-between py-2 border-b last:border-0"
                style={{ borderColor: C.divider }}
              >
                <span
                  className="text-[9px]"
                  style={{
                    color: C.textSoft,
                    fontFamily: FONT.family,
                  }}
                >
                  {rule[0]}
                </span>

                <button
                  className="flex items-center gap-1 px-2 py-1 rounded-full"
                  style={{
                    background: C.bg,
                    border: `1px solid ${C.border}`,
                  }}
                >
                  <span
                    className="text-[8px] font-bold"
                    style={{
                      color: C.text,
                      fontFamily: FONT.family,
                    }}
                  >
                    {rule[1]}
                  </span>

                  <ChevronDown size={9} color={C.muted} />
                </button>
              </div>
            ))}
          </div>

          <div
            className="rounded-[18px] p-3 mb-2"
            style={{
              background: C.surface,
              border: `1px solid ${C.border}`,
            }}
          >
            <p
              className="text-[11px] font-bold mb-2"
              style={{
                color: C.text,
                fontFamily: FONT.family,
              }}
            >
              Tier thresholds
            </p>

            {tiers.map((tier, i) => (
              <div
                key={i}
                className="flex items-center justify-between py-1.5"
              >
                <div className="flex items-center gap-2">
                  <div
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ background: tier.color }}
                  />

                  <span
                    className="text-[9px] font-bold"
                    style={{
                      color: C.text,
                      fontFamily: FONT.family,
                    }}
                  >
                    {tier.name}
                  </span>
                </div>

                <span
                  className="text-[8px]"
                  style={{
                    color: C.muted,
                    fontFamily: FONT.family,
                  }}
                >
                  {tier.range}
                </span>
              </div>
            ))}
          </div>

          <div
            className="rounded-[18px] p-3 mb-2"
            style={{
              background: C.surface,
              border: `1px solid ${C.border}`,
            }}
          >
            <p
              className="text-[11px] font-bold mb-1"
              style={{
                color: C.text,
                fontFamily: FONT.family,
              }}
            >
              Features
            </p>

            {[
              {
                label: "Allow points transfer",
                sub: "Members can transfer points",
                value: transfer,
                set: setTransfer,
              },
              {
                label: "Birthday bonus",
                sub: "2× points on birthday",
                value: birthday,
                set: setBirthday,
              },
              {
                label: "Points expiry",
                sub: "12-month inactivity",
                value: expiry,
                set: setExpiry,
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="flex items-center justify-between py-2.5 border-b last:border-0"
                style={{ borderColor: C.divider }}
              >
                <div>
                  <p
                    className="text-[9px] font-bold"
                    style={{
                      color: C.text,
                      fontFamily: FONT.family,
                    }}
                  >
                    {feature.label}
                  </p>

                  <p
                    className="text-[8px] mt-0.5"
                    style={{
                      color: C.muted,
                      fontFamily: FONT.family,
                    }}
                  >
                    {feature.sub}
                  </p>
                </div>

                <Toggle
                  value={feature.value}
                  onClick={() => feature.set(!feature.value)}
                />
              </div>
            ))}
          </div>

          <button
            className="w-full py-2.5 rounded-full text-[10px] font-bold"
            style={{
              background: C.primary,
              color: "#fff",
              fontFamily: FONT.family,
            }}
          >
            Save changes
          </button>
        </div>
      </div>

      <AdminNav active={4} />
    </>
  );
}
