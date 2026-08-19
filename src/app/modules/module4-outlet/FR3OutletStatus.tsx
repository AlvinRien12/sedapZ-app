import { useState } from "react";
import { ChevronLeft, CircleCheck, CircleX, Clock, AlertTriangle } from "lucide-react";
import { C, FONT } from "../../constants";
import { StatusBar } from "../../shared/StatusBar";

export function FR3OutletStatus() {
  const [status, setStatus] = useState<"open" | "closed" | "temp">("open");

  const outlets = [
    { name: "Bangsar Outlet", status: "open", wait: "15 min" },
    { name: "KLCC Outlet", status: "open", wait: "5 min" },
    { name: "Sunway Outlet", status: "temp", wait: "Closed for renovation" },
    { name: "Mid Valley Outlet", status: "closed", wait: "Opens 10:00 AM" },
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
              Outlet Status
            </p>

            <p
              className="text-[8px]"
              style={{
                color: C.muted,
                fontFamily: FONT.family,
              }}
            >
              Real-time availability
            </p>
          </div>
        </div>

        <div className="flex-1 overflow-hidden px-3 py-2">
          {/* Status Legend */}
          <div className="flex gap-2 mb-3">
            {[
              { key: "open", label: "Open", color: C.success, bg: C.successSoft },
              { key: "temp", label: "Temp Closed", color: C.warning, bg: C.warningSoft },
              { key: "closed", label: "Closed", color: C.muted, bg: C.bg },
            ].map((s) => (
              <button
                key={s.key}
                onClick={() => setStatus(s.key as typeof status)}
                className="flex-1 py-2 rounded-full text-[8px] font-bold"
                style={{
                  background: status === s.key ? s.color : s.bg,
                  color: status === s.key ? "#fff" : s.color,
                  fontFamily: FONT.family,
                }}
              >
                {s.label}
              </button>
            ))}
          </div>

          {/* Outlets List */}
          <div className="space-y-2">
            {outlets.map((outlet, i) => {
              const isMatch =
                (status === "open" && outlet.status === "open") ||
                (status === "temp" && outlet.status === "temp") ||
                (status === "closed" && outlet.status === "closed");

              if (!isMatch && status !== "open") return null;

              return (
                <div
                  key={i}
                  className="p-3 rounded-[14px]"
                  style={{
                    background: C.surface,
                    border: `1px solid ${C.border}`,
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {outlet.status === "open" ? (
                        <CircleCheck size={18} color={C.success} />
                      ) : outlet.status === "temp" ? (
                        <AlertTriangle size={18} color={C.warning} />
                      ) : (
                        <CircleX size={18} color={C.muted} />
                      )}
                      <div>
                        <p
                          className="text-[10px] font-bold"
                          style={{ color: C.text, fontFamily: FONT.family }}
                        >
                          {outlet.name}
                        </p>
                        <p
                          className="text-[7px]"
                          style={{
                            color:
                              outlet.status === "open"
                                ? C.success
                                : outlet.status === "temp"
                                  ? C.warning
                                  : C.muted,
                            fontFamily: FONT.family,
                          }}
                        >
                          {outlet.wait}
                        </p>
                      </div>
                    </div>
                    <span
                      className="text-[7px] font-bold px-2 py-1 rounded-full"
                      style={{
                        background:
                          outlet.status === "open"
                            ? C.successSoft
                            : outlet.status === "temp"
                              ? C.warningSoft
                              : C.bg,
                        color:
                          outlet.status === "open"
                            ? C.success
                            : outlet.status === "temp"
                              ? C.warning
                              : C.muted,
                        fontFamily: FONT.family,
                      }}
                    >
                      {outlet.status === "open"
                        ? "Open"
                        : outlet.status === "temp"
                          ? "Temp Closed"
                          : "Closed"}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
