import { useState } from "react";
import { ChevronLeft, Search, SlidersHorizontal } from "lucide-react";
import { C, FONT } from "../../constants";
import { StatusBar } from "../../shared/StatusBar";
import { PillButton } from "../../shared/PillButton";

export function FR4SearchFilterPromos() {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const promotions = [
    { name: "20% Off Nasi Lemak", category: "Food", discount: "20%", pts: 80 },
    { name: "Free Teh Tarik", category: "Drinks", discount: "FREE", pts: 50 },
    { name: "RM10 Voucher", category: "Voucher", discount: "RM10", pts: 100 },
    { name: "Satay 10pcs", category: "Food", discount: "10%", pts: 60 },
    { name: "Birthday Special", category: "Special", discount: "2×", pts: 0 },
  ];

  const filters = ["All", "Food", "Drinks", "Vouchers", "Special"];

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
              Browse Promotions
            </p>

            <p
              className="text-[8px]"
              style={{
                color: C.muted,
                fontFamily: FONT.family,
              }}
            >
              Search & filter available deals
            </p>
          </div>
        </div>

        <div className="flex-1 overflow-hidden px-3 py-2">
          {/* Search Bar */}
          <div className="relative mb-3">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search promotions..."
              className="w-full px-4 py-2.5 pl-10 rounded-[14px] text-[11px] outline-none"
              style={{
                background: C.surface,
                border: `1px solid ${C.border}`,
                color: C.text,
                fontFamily: FONT.family,
              }}
            />
            <Search
              size={16}
              color={C.muted}
              className="absolute left-3 top-1/2 -translate-y-1/2"
            />
          </div>

          {/* Filters */}
          <div className="flex gap-1.5 mb-3 overflow-hidden">
            {filters.map((filter) => (
              <PillButton
                key={filter}
                active={activeFilter === filter}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </PillButton>
            ))}
          </div>

          {/* Promotions List */}
          <div className="space-y-2">
            {promotions
              .filter((p) =>
                activeFilter === "All" ? true : p.category === activeFilter
              )
              .map((promo, i) => (
                <div
                  key={i}
                  className="p-3 rounded-[14px]"
                  style={{
                    background: C.surface,
                    border: `1px solid ${C.border}`,
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1 min-w-0">
                      <p
                        className="text-[11px] font-bold"
                        style={{ color: C.text, fontFamily: FONT.family }}
                      >
                        {promo.name}
                      </p>
                      <span
                        className="text-[7px] px-1.5 py-0.5 rounded-full"
                        style={{
                          background: C.primarySoft,
                          color: C.primary,
                          fontFamily: FONT.family,
                        }}
                      >
                        {promo.category}
                      </span>
                    </div>
                    <div className="text-right">
                      <p
                        className="text-[12px] font-extrabold"
                        style={{ color: C.primary, fontFamily: FONT.family }}
                      >
                        {promo.discount}
                      </p>
                      {promo.pts > 0 && (
                        <p
                          className="text-[7px]"
                          style={{ color: C.muted, fontFamily: FONT.family }}
                        >
                          {promo.pts} pts
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
