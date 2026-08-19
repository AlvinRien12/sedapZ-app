import { useState } from "react";
import {
  ChevronLeft,
  FileDown,
  Download,
  Calendar,
  ArrowUpRight,
  ArrowDownRight,
  Users,
  TrendingUp,
} from "lucide-react";
import { C, FONT } from "../../constants";
import { StatusBar } from "../../shared/StatusBar";
import { AdminNav } from "../../shared/AdminNav";

export function FR5Reports() {
  const [reportType, setReportType] = useState("Summary");

  const types = ["Summary", "Earned", "Redeemed", "Expired"];

  const bars = [
    { month: "Apr", val: 32 },
    { month: "May", val: 41 },
    { month: "Jun", val: 38 },
    { month: "Jul", val: 52 },
    { month: "Aug", val: 48 },
  ];

  const max = 52;

  const stats = [
    {
      label: "Total earned",
      value: "48,240",
      unit: "pts",
      color: C.success,
      icon: <ArrowUpRight size={11} />,
    },
    {
      label: "Total redeemed",
      value: "12,880",
      unit: "pts",
      color: C.primary,
      icon: <ArrowDownRight size={11} />,
    },
    {
      label: "Active members",
      value: "1,204",
      unit: "",
      color: C.primary,
      icon: <Users size={11} />,
    },
    {
      label: "Avg / member",
      value: "40.1",
      unit: "pts",
      color: "#7354A5",
      icon: <TrendingUp size={11} />,
    },
  ];

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
              Reports
            </p>

            <p
              className="text-[8px]"
              style={{
                color: C.muted,
                fontFamily: FONT.family,
              }}
            >
              Loyalty performance overview
            </p>
          </div>

          <div className="ml-auto flex gap-1">
            <button
              className="w-7 h-7 rounded-full flex items-center justify-center"
              style={{
                background: C.primarySoft,
                color: C.primary,
              }}
            >
              <FileDown size={11} />
            </button>

            <button
              className="w-7 h-7 rounded-full flex items-center justify-center"
              style={{
                background: C.primary,
                color: "#fff",
              }}
            >
              <Download size={11} />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-hidden px-3 py-2">
          <div className="flex gap-2 mb-2">
            {["Aug 1, 2026", "Aug 19, 2026"].map((date, i) => (
              <div
                key={i}
                className="flex-1 flex items-center gap-1.5 px-2.5 py-2 rounded-[12px]"
                style={{
                  background: C.surface,
                  border: `1px solid ${C.border}`,
                }}
              >
                <Calendar size={10} color={C.muted} />

                <span
                  className="text-[8px]"
                  style={{
                    color: C.text,
                    fontFamily: FONT.family,
                  }}
                >
                  {date}
                </span>
              </div>
            ))}
          </div>

          <div
            className="flex gap-1 p-1 rounded-full mb-2"
            style={{ background: "#E9E9ED" }}
          >
            {types.map((type) => (
              <button
                key={type}
                onClick={() => setReportType(type)}
                className="flex-1 py-1.5 rounded-full text-[7px] font-bold"
                style={{
                  background:
                    reportType === type ? C.surface : "transparent",
                  color:
                    reportType === type ? C.primary : C.muted,
                  boxShadow:
                    reportType === type
                      ? "0 2px 5px rgba(0,0,0,.06)"
                      : "none",
                  fontFamily: FONT.family,
                }}
              >
                {type}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-2 mb-2">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="rounded-[16px] p-2.5"
                style={{
                  background: C.surface,
                  border: `1px solid ${C.border}`,
                }}
              >
                <div
                  className="flex items-center gap-1"
                  style={{ color: stat.color }}
                >
                  {stat.icon}

                  <span
                    className="text-[7px]"
                    style={{
                      color: C.muted,
                      fontFamily: FONT.family,
                    }}
                  >
                    {stat.label}
                  </span>
                </div>

                <p
                  className="text-[14px] font-extrabold mt-1"
                  style={{
                    color: stat.color,
                    fontFamily: FONT.family,
                  }}
                >
                  {stat.value}
                  <span
                    className="text-[8px] ml-0.5"
                    style={{ color: C.muted }}
                  >
                    {stat.unit}
                  </span>
                </p>
              </div>
            ))}
          </div>

          <div
            className="rounded-[18px] p-3"
            style={{
              background: C.surface,
              border: `1px solid ${C.border}`,
            }}
          >
            <div className="flex items-center justify-between mb-3">
              <p
                className="text-[10px] font-bold"
                style={{
                  color: C.text,
                  fontFamily: FONT.family,
                }}
              >
                Monthly points earned
              </p>

              <span
                className="text-[7px]"
                style={{
                  color: C.muted,
                  fontFamily: FONT.family,
                }}
              >
                ×1,000 pts
              </span>
            </div>

            <div className="flex items-end gap-2 h-28">
              {bars.map((bar) => (
                <div
                  key={bar.month}
                  className="flex-1 flex flex-col items-center justify-end gap-1"
                >
                  <span
                    className="text-[7px]"
                    style={{
                      color: C.muted,
                      fontFamily: FONT.family,
                    }}
                  >
                    {bar.val}k
                  </span>

                  <div
                    className="w-full rounded-t-[7px]"
                    style={{
                      height: `${(bar.val / max) * 72}px`,
                      background:
                        bar.month === "Aug"
                          ? C.primary
                          : "#E9E9ED",
                    }}
                  />

                  <span
                    className="text-[7px] font-bold"
                    style={{
                      color:
                        bar.month === "Aug"
                          ? C.primary
                          : C.muted,
                      fontFamily: FONT.family,
                    }}
                  >
                    {bar.month}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div
            className="mt-2 rounded-[16px] p-3 flex items-center justify-between"
            style={{
              background: C.primarySoft,
            }}
          >
            <div>
              <p
                className="text-[9px] font-bold"
                style={{
                  color: C.primaryDark,
                  fontFamily: FONT.family,
                }}
              >
                Report ready
              </p>

              <p
                className="text-[7px] mt-0.5"
                style={{
                  color: C.textSoft,
                  fontFamily: FONT.family,
                }}
              >
                Aug 1 – Aug 19, 2026
              </p>
            </div>

            <button
              className="px-3 py-1.5 rounded-full text-[8px] font-bold"
              style={{
                background: C.primary,
                color: "#fff",
                fontFamily: FONT.family,
              }}
            >
              Export XLS
            </button>
          </div>
        </div>
      </div>

      <AdminNav active={3} />
    </>
  );
}
