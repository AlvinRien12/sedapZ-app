import { useState } from "react";
import {
  Bell,
  History,
  ArrowUpRight,
  ArrowDownRight,
  Award,
} from "lucide-react";
import { C, FONT } from "../../constants";
import { StatusBar } from "../../shared/StatusBar";
import { Logo } from "../../shared/Logo";
import { CustomerNav } from "../../shared/CustomerNav";

export function FR1ViewPoints() {
  const txns = [
    {
      desc: "Dine-in · The Chicken Rice Shop (IOI City Mall)",
      pts: "+150",
      date: "Today, 12:34 PM",
      positive: true,
    },
    {
      desc: "Voucher · Char Kuey Teow",
      pts: "-80",
      date: "Yesterday",
      positive: false,
    },
    {
      desc: "Dine-in · DubuYo (The Mines)",
      pts: "+200",
      date: "Mon, Aug 17",
      positive: true,
    },
    {
      desc: "Birthday Bonus",
      pts: "+300",
      date: "Aug 15",
      positive: true,
    },
  ];

  return (
    <>
      <div
        className="flex-1 overflow-hidden flex flex-col"
        style={{ background: C.bg }}
      >
        <div
          className="flex-shrink-0"
          style={{
            background: C.primary,
            borderBottomLeftRadius: 24,
            borderBottomRightRadius: 24,
            paddingBottom: 18,
          }}
        >
          <StatusBar dark />

          <div className="flex items-center justify-between px-4 py-2">
            <Logo dark />
            <button
              className="w-8 h-8 rounded-full flex items-center justify-center"
              style={{ background: "rgba(255,255,255,.15)" }}
            >
              <Bell size={15} color="#fff" />
            </button>
          </div>

          <div className="px-4 pt-3">
            <p
              className="text-[10px]"
              style={{
                color: "rgba(255,255,255,.7)",
                fontFamily: FONT.family,
              }}
            >
              Good afternoon, IceBing
            </p>

            <p
              className="mt-1 text-[12px] font-bold"
              style={{
                color: "#fff",
                fontFamily: FONT.family,
              }}
            >
              Your loyalty balance
            </p>

            <div className="flex items-end justify-between mt-2">
              <div>
                <p
                  className="text-[32px] font-extrabold leading-none"
                  style={{
                    color: "#fff",
                    fontFamily: FONT.family,
                  }}
                >
                  2,450
                </p>
                <p
                  className="text-[9px] mt-1"
                  style={{
                    color: "rgba(255,255,255,.72)",
                    fontFamily: FONT.family,
                  }}
                >
                  total points
                </p>
              </div>

              <button
                className="flex items-center gap-1 px-3 py-1.5 rounded-full"
                style={{
                  background: C.primaryDark,
                  color: "#fff",
                  fontFamily: FONT.family,
                }}
              >
                <History size={10} />
                <span className="text-[9px] font-bold">History</span>
              </button>
            </div>
          </div>
        </div>

        <div
          className="flex-1 overflow-hidden -mt-1 px-3 pt-3"
        >
          <div
            className="rounded-[22px] h-full overflow-hidden flex flex-col"
            style={{
              background: C.surface,
              boxShadow: "0 -4px 20px rgba(0,0,0,.03)",
            }}
          >
            <div className="px-4 pt-4 pb-2 flex-shrink-0">
              <div className="flex items-center justify-between">
                <div>
                  <p
                    className="text-[12px] font-bold"
                    style={{ color: C.text, fontFamily: FONT.family }}
                  >
                    Gold Member
                  </p>
                  <p
                    className="text-[9px] mt-0.5"
                    style={{ color: C.muted, fontFamily: FONT.family }}
                  >
                    550 points to Platinum
                  </p>
                </div>

                <Award size={20} color={C.primary} />
              </div>

              <div
                className="h-2 rounded-full mt-3"
                style={{ background: C.primarySoft }}
              >
                <div
                  className="h-2 rounded-full"
                  style={{
                    width: "82%",
                    background: C.primary,
                  }}
                />
              </div>
            </div>

            <div className="px-4 py-2 flex items-center justify-between">
              <p
                className="text-[11px] font-bold"
                style={{ color: C.text, fontFamily: FONT.family }}
              >
                Recent activity
              </p>
              <History size={14} color={C.muted} />
            </div>

            <div className="flex-1 overflow-hidden px-3">
              {txns.map((txn, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2.5 py-2.5 border-b"
                  style={{ borderColor: C.divider }}
                >
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center"
                    style={{
                      background: txn.positive
                        ? C.successSoft
                        : C.primarySoft,
                    }}
                  >
                    {txn.positive ? (
                      <ArrowUpRight size={13} color={C.success} />
                    ) : (
                      <ArrowDownRight size={13} color={C.primary} />
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <p
                      className="text-[9px] font-bold truncate"
                      style={{
                        color: C.text,
                        fontFamily: FONT.family,
                      }}
                    >
                      {txn.desc}
                    </p>
                    <p
                      className="text-[8px] mt-0.5"
                      style={{
                        color: C.muted,
                        fontFamily: FONT.family,
                      }}
                    >
                      {txn.date}
                    </p>
                  </div>

                  <span
                    className="text-[10px] font-extrabold"
                    style={{
                      color: txn.positive ? C.success : C.primary,
                      fontFamily: FONT.family,
                    }}
                  >
                    {txn.pts}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <CustomerNav active={2} />
    </>
  );
}
