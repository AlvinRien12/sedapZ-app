import { useState } from "react";
import {
  Star,
  Filter,
} from "lucide-react";
import { C, FONT } from "../../constants";
import { StatusBar } from "../../shared/StatusBar";
import { Logo } from "../../shared/Logo";
import { PillButton } from "../../shared/PillButton";
import { CustomerNav } from "../../shared/CustomerNav";
import chickenRice from "./images/hainanese_chicken_rice.webp";
import spicyWings from "./images/korean_spicy_wings.webp";
import rojak from "./images/penang_rojak.webp";
import comboMeal from "./images/single_combo_meal.webp";

export function FR2RedeemVouchers() {
  const [activeTab, setActiveTab] = useState("All");

  const tabs = ["All", "Food", "Drinks", "Special"];

  const vouchers = [
    {
      name: "CR: FREE one (1) Single Combo Meal",
      pts: 80,
      img: chickenRice,
      tag: "IN-STORE USE ONLY",
      available: true,
    },
    {
      name: "DY: Friday Specials - 50% Off Korean Spicy Wings",
      pts: 50,
      img: spicyWings,
      tag: "IN-STORE USE ONLY",
      available: true,
    },
    {
      name: "CR: Tues Special - 50& off Penang Rojak (R)",
      pts: 120,
      img: rojak,
      tag: "IN-STORE USE ONLY",
      available: false,
    },
    {
      name: "CR: FREE one (1) Hainanese Chicken Rice Meal",
      pts: 60,
      img: comboMeal,
      tag: "IN-STORE USE ONLY",
      available: true,
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
            paddingBottom: 22,
            borderBottomLeftRadius: 24,
            borderBottomRightRadius: 24,
          }}
        >
          <StatusBar dark />

          <div className="flex items-center justify-between px-4 py-2">
            <div>
              <p
                className="text-[16px] font-extrabold"
                style={{
                  color: "#fff",
                  fontFamily: FONT.family,
                }}
              >
                Rewards
              </p>
              <p
                className="text-[9px] mt-0.5"
                style={{
                  color: "rgba(255,255,255,.72)",
                  fontFamily: FONT.family,
                }}
              >
                Delicious rewards, just for you
              </p>
            </div>

            <div
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full"
              style={{
                background: C.primaryDark,
                color: "#fff",
              }}
            >
              <Star size={10} fill="#fff" />
              <span
                className="text-[9px] font-bold"
                style={{ fontFamily: FONT.family }}
              >
                2,450 pts
              </span>
            </div>
          </div>
        </div>

        <div
          className="flex-1 overflow-hidden -mt-3 rounded-t-[24px]"
          style={{
            background: C.surface,
          }}
        >
          <div className="px-4 pt-4">
            <div className="flex items-center justify-between">
              <p
                className="text-[12px] font-bold"
                style={{ color: C.text, fontFamily: FONT.family }}
              >
                Redeem rewards
              </p>

              <Filter size={14} color={C.muted} />
            </div>

            <div className="flex gap-1.5 mt-3 overflow-hidden">
              {tabs.map((tab) => (
                <PillButton
                  key={tab}
                  active={activeTab === tab}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </PillButton>
              ))}
            </div>
          </div>

          <div className="flex-1 overflow-hidden px-3 pt-3 pb-2">
            <div className="grid grid-cols-2 gap-2.5">
              {vouchers.map((voucher, i) => (
                <div
                  key={i}
                  className="overflow-hidden rounded-[16px] flex flex-col"
                  style={{
                    background: C.surface,
                    border: `1px solid ${C.border}`,
                    boxShadow: "0 3px 12px rgba(0,0,0,.04)",
                  }}
                >
                  <div
                    className="relative"
                    style={{ height: 78 }}
                  >
                    <img
                      src={voucher.img}
                      alt={voucher.name}
                      className="w-full h-full object-cover"
                    />

                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(180deg,rgba(0,0,0,0) 40%,rgba(0,0,0,.25))",
                      }}
                    />

                    <span
                      className="absolute top-1.5 left-1.5 px-1.5 py-0.5 rounded-[5px] text-[7px] font-bold"
                      style={{
                        background: "rgba(255,255,255,.92)",
                        color: C.textSoft,
                        fontFamily: FONT.family,
                      }}
                    >
                      {voucher.tag}
                    </span>
                  </div>

                   <div className="p-2.5 flex flex-col flex-1">
                     <p
                       className="text-[9px] font-bold leading-tight line-clamp-2"
                       style={{
                         color: C.text,
                         fontFamily: FONT.family,
                         minHeight: 24,
                       }}
                     >
                       {voucher.name}
                     </p>

                     <div className="flex items-center justify-between mt-auto pt-2">
                      <span
                        className="text-[11px] font-extrabold"
                        style={{
                          color: C.primary,
                          fontFamily: FONT.family,
                        }}
                      >
                        {voucher.pts} pts
                      </span>

                      <Star
                        size={9}
                        color={C.primary}
                        fill={C.primary}
                      />
                    </div>

                    <button
                      className="w-full mt-2 py-1.5 rounded-full text-[8px] font-bold"
                      disabled={!voucher.available}
                      style={{
                        background: voucher.available
                          ? C.primary
                          : C.disabled,
                        color: voucher.available
                          ? "#fff"
                          : C.disabledText,
                        fontFamily: FONT.family,
                      }}
                    >
                      {voucher.available
                        ? "Redeem"
                        : "Need more points"}
                    </button>
                  </div>
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
