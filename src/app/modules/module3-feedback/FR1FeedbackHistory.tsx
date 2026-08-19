import { useState } from "react";
import { ChevronRight, Clock, CheckCircle, AlertCircle } from "lucide-react";
import { C, FONT } from "../../constants";
import { StatusBar } from "../../shared/StatusBar";
import { Logo } from "../../shared/Logo";

export function FR1FeedbackHistory() {
  const [activeTab, setActiveTab] = useState("All");

  const tickets = [
    {
      id: "FB-001",
      title: "Food was too salty",
      status: "Resolved",
      date: "Today, 2:30 PM",
      statusColor: C.success,
    },
    {
      id: "FB-002",
      title: "App crashes on checkout",
      status: "In Progress",
      date: "Yesterday",
      statusColor: C.warning,
    },
    {
      id: "FB-003",
      title: "Wrong order delivered",
      status: "Resolved",
      date: "Aug 17",
      statusColor: C.success,
    },
    {
      id: "FB-004",
      title: "Long wait time",
      status: "Pending",
      date: "Aug 15",
      statusColor: C.muted,
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
          className="px-4 py-2 flex-shrink-0"
          style={{ background: C.primary }}
        >
          <div className="flex items-center justify-between">
            <div>
              <p
                className="text-[16px] font-extrabold"
                style={{ color: "#fff", fontFamily: FONT.family }}
              >
                My Feedback
              </p>
              <p
                className="text-[9px] mt-0.5"
                style={{
                  color: "rgba(255,255,255,.72)",
                  fontFamily: FONT.family,
                }}
              >
                Track your support requests
              </p>
            </div>
          </div>
        </div>

        <div
          className="flex-1 overflow-hidden -mt-1 rounded-t-[24px]"
          style={{ background: C.surface }}
        >
          {/* Tabs */}
          <div className="px-4 pt-4 pb-3">
            <div className="flex gap-1.5">
              {["All", "Open", "Resolved"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className="flex-1 py-2 rounded-full text-[9px] font-bold"
                  style={{
                    background: activeTab === tab ? C.primary : C.bg,
                    color: activeTab === tab ? "#fff" : C.textSoft,
                    fontFamily: FONT.family,
                  }}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Tickets List */}
          <div className="flex-1 overflow-hidden px-3 pb-2">
            <div className="space-y-1.5">
              {tickets.map((ticket, i) => (
                <div
                  key={i}
                  className="p-2.5 rounded-[12px]"
                  style={{
                    background: C.bg,
                    border: `1px solid ${C.border}`,
                  }}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1 mb-0.5">
                        <span
                          className="text-[6px] font-bold px-1 py-0.5 rounded"
                          style={{
                            background: C.primarySoft,
                            color: C.primary,
                            fontFamily: "Space Mono, monospace",
                          }}
                        >
                          {ticket.id}
                        </span>
                        <span
                          className="text-[6px] font-bold px-1 py-0.5 rounded-full"
                          style={{
                            background:
                              ticket.status === "Resolved"
                                ? C.successSoft
                                : ticket.status === "In Progress"
                                  ? C.warningSoft
                                  : C.bg,
                            color: ticket.statusColor,
                            fontFamily: FONT.family,
                          }}
                        >
                          {ticket.status}
                        </span>
                      </div>
                      <p
                        className="text-[9px] font-bold truncate"
                        style={{ color: C.text, fontFamily: FONT.family }}
                      >
                        {ticket.title}
                      </p>
                      <div className="flex items-center gap-1 mt-0.5">
                        <Clock size={7} color={C.muted} />
                        <span
                          className="text-[6px]"
                          style={{ color: C.muted, fontFamily: FONT.family }}
                        >
                          {ticket.date}
                        </span>
                      </div>
                    </div>
                    <ChevronRight size={12} color={C.muted} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
