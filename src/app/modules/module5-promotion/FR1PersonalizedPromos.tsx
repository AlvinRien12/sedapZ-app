import { useState } from "react";
import { ChevronRight, Star, Sparkles } from "lucide-react";
import { C, FONT } from "../../constants";
import { StatusBar } from "../../shared/StatusBar";
import { Logo } from "../../shared/Logo";

export function FR1PersonalizedPromos() {
  const [activeTab, setActiveTab] = useState("For You");

  const promotions = [
    {
      id: "PROMO-001",
      title: "20% Off Your Favorite",
      desc: "Based on your recent orders",
      discount: "20%",
      expires: "2 days left",
      color: C.primary,
    },
    {
      id: "PROMO-002",
      title: "Free Drink Combo",
      desc: "You love Teh Tarik!",
      discount: "FREE",
      expires: "5 days left",
      color: C.success,
    },
    {
      id: "PROMO-003",
      title: "Birthday Special",
      desc: "Double points on your birthday",
      discount: "2×",
      expires: "Aug 25",
      color: C.warning,
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
                Promotions
              </p>
              <p
                className="text-[9px] mt-0.5"
                style={{
                  color: "rgba(255,255,255,.72)",
                  fontFamily: FONT.family,
                }}
              >
                Personalized just for you
              </p>
            </div>
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center"
              style={{ background: "rgba(255,255,255,.15)" }}
            >
              <Sparkles size={16} color="#fff" />
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
              {["For You", "All Promos", "My Vouchers"].map((tab) => (
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
              {promotions.map((promo, i) => (
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
                      className="w-10 h-10 rounded-[10px] flex items-center justify-center flex-shrink-0"
                      style={{ background: promo.color + "15" }}
                    >
                      <span
                        className="text-[9px] font-extrabold"
                        style={{ color: promo.color, fontFamily: FONT.family }}
                      >
                        {promo.discount}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p
                        className="text-[10px] font-bold truncate"
                        style={{ color: C.text, fontFamily: FONT.family }}
                      >
                        {promo.title}
                      </p>
                      <p
                        className="text-[7px]"
                        style={{ color: C.muted, fontFamily: FONT.family }}
                      >
                        {promo.desc}
                      </p>
                      <div className="flex items-center justify-between mt-1">
                        <span
                          className="text-[6px]"
                          style={{ color: C.warning, fontFamily: FONT.family }}
                        >
                          {promo.expires}
                        </span>
                        <ChevronRight size={10} color={C.muted} />
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
