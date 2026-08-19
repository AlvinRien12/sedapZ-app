import { useState } from "react";
import { ChevronLeft, Star, Tag, Calendar, Filter } from "lucide-react";
import { C, FONT } from "../../constants";
import { StatusBar } from "../../shared/StatusBar";
import { Logo } from "../../shared/Logo";

export function FR5OrganizedPromos() {
  const [activeTab, setActiveTab] = useState("Active");

  const promotions = [
    {
      id: "PROMO-001",
      title: "Grand Opening Special",
      desc: "50% off all items at our new outlet",
      discount: "50%",
      category: "Food",
      validFrom: "Aug 1",
      validTo: "Aug 31",
      status: "Active",
    },
    {
      id: "PROMO-002",
      title: "Weekend Bundle",
      desc: "Buy 2 get 1 free on weekends",
      discount: "BOGO",
      category: "Food",
      validFrom: "Aug 5",
      validTo: "Aug 25",
      status: "Active",
    },
    {
      id: "PROMO-003",
      title: "Loyalty Bonus",
      desc: "Double points on all purchases",
      discount: "2×",
      category: "Points",
      validFrom: "Aug 10",
      validTo: "Aug 20",
      status: "Ending Soon",
    },
    {
      id: "PROMO-004",
      title: "New User Welcome",
      desc: "RM15 off first order above RM50",
      discount: "RM15",
      category: "Voucher",
      validFrom: "Aug 1",
      validTo: "Dec 31",
      status: "Active",
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
                All Promotions
              </p>
              <p
                className="text-[9px] mt-0.5"
                style={{
                  color: "rgba(255,255,255,.72)",
                  fontFamily: FONT.family,
                }}
              >
                Browse all available deals
              </p>
            </div>
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center"
              style={{ background: "rgba(255,255,255,.15)" }}
            >
              <Filter size={14} color="#fff" />
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
              {["Active", "Ending Soon", "Expired"].map((tab) => (
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

          {/* Promotions */}
          <div className="flex-1 overflow-hidden px-3 pb-2">
            <div className="space-y-1.5">
              {promotions
                .filter((p) => {
                  if (activeTab === "Active") return p.status === "Active";
                  if (activeTab === "Ending Soon") return p.status === "Ending Soon";
                  return p.status === "Expired";
                })
                .map((promo, i) => (
                  <div
                    key={i}
                    className="p-2.5 rounded-[12px]"
                    style={{
                      background: C.bg,
                      border: `1px solid ${C.border}`,
                    }}
                  >
                    <div className="flex items-start gap-2.5">
                      <div
                        className="w-11 h-11 rounded-[10px] flex items-center justify-center flex-shrink-0"
                        style={{ background: C.primarySoft }}
                      >
                        <span
                          className="text-[10px] font-extrabold"
                          style={{ color: C.primary, fontFamily: FONT.family }}
                        >
                          {promo.discount}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1 mb-0.5">
                          <p
                            className="text-[10px] font-bold truncate"
                            style={{ color: C.text, fontFamily: FONT.family }}
                          >
                            {promo.title}
                          </p>
                          <span
                            className="text-[6px] px-1 py-0.5 rounded-full flex-shrink-0"
                            style={{
                              background:
                                promo.status === "Active"
                                  ? C.successSoft
                                  : C.warningSoft,
                              color:
                                promo.status === "Active"
                                  ? C.success
                                  : C.warning,
                              fontFamily: FONT.family,
                            }}
                          >
                            {promo.status}
                          </span>
                        </div>
                        <p
                          className="text-[7px] mb-1"
                          style={{ color: C.muted, fontFamily: FONT.family }}
                        >
                          {promo.desc}
                        </p>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-0.5">
                            <Tag size={6} color={C.muted} />
                            <span
                              className="text-[6px]"
                              style={{ color: C.muted, fontFamily: FONT.family }}
                            >
                              {promo.category}
                            </span>
                          </div>
                          <div className="flex items-center gap-0.5">
                            <Calendar size={6} color={C.muted} />
                            <span
                              className="text-[6px]"
                              style={{ color: C.muted, fontFamily: FONT.family }}
                            >
                              {promo.validFrom} - {promo.validTo}
                            </span>
                          </div>
                        </div>
                      </div>
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
