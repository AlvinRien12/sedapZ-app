import { useState } from "react";
import { ChevronLeft, Search, MapPin, SlidersHorizontal, Star } from "lucide-react";
import { C, FONT } from "../../constants";
import { StatusBar } from "../../shared/StatusBar";
import { PillButton } from "../../shared/PillButton";

export function FR4SearchFilter() {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const outlets = [
    { name: "Bangsar Outlet", distance: "1.2 km", rating: 4.5, status: "Open" },
    { name: "KLCC Outlet", distance: "3.5 km", rating: 4.8, status: "Open" },
    { name: "Sunway Outlet", distance: "8.1 km", rating: 4.2, status: "Temp Closed" },
    { name: "Mid Valley Outlet", distance: "5.3 km", rating: 4.6, status: "Closed" },
  ];

  const filters = ["All", "Open Now", "Nearby", "Top Rated"];

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
              Find Outlets
            </p>

            <p
              className="text-[8px]"
              style={{
                color: C.muted,
                fontFamily: FONT.family,
              }}
            >
              Search & filter outlets
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
              placeholder="Search outlets..."
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

          {/* Outlets List */}
          <div className="space-y-2">
            {outlets.map((outlet, i) => (
              <div
                key={i}
                className="p-3 rounded-[14px]"
                style={{
                  background: C.surface,
                  border: `1px solid ${C.border}`,
                }}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1 min-w-0">
                    <p
                      className="text-[11px] font-bold"
                      style={{ color: C.text, fontFamily: FONT.family }}
                    >
                      {outlet.name}
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex items-center gap-0.5">
                        <MapPin size={8} color={C.muted} />
                        <span
                          className="text-[7px]"
                          style={{ color: C.muted, fontFamily: FONT.family }}
                        >
                          {outlet.distance}
                        </span>
                      </div>
                      <div className="flex items-center gap-0.5">
                        <Star size={8} color={C.warning} fill={C.warning} />
                        <span
                          className="text-[7px]"
                          style={{ color: C.muted, fontFamily: FONT.family }}
                        >
                          {outlet.rating}
                        </span>
                      </div>
                    </div>
                  </div>
                  <span
                    className="text-[7px] font-bold px-2 py-1 rounded-full"
                    style={{
                      background:
                        outlet.status === "Open"
                          ? C.successSoft
                          : outlet.status === "Temp Closed"
                            ? C.warningSoft
                            : C.bg,
                      color:
                        outlet.status === "Open"
                          ? C.success
                          : outlet.status === "Temp Closed"
                            ? C.warning
                            : C.muted,
                      fontFamily: FONT.family,
                    }}
                  >
                    {outlet.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
