import { useState } from "react";
import { ChevronLeft, MapPin, Phone, Clock, Navigation, Star } from "lucide-react";
import { C, FONT } from "../../constants";
import { StatusBar } from "../../shared/StatusBar";

export function FR1OutletDetails() {
  const [activeTab, setActiveTab] = useState("info");

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
              Bangsar Outlet
            </p>

            <p
              className="text-[8px]"
              style={{
                color: C.muted,
                fontFamily: FONT.family,
              }}
            >
              Outlet Details
            </p>
          </div>
        </div>

        <div className="flex-1 overflow-hidden px-3 py-2">
          {/* Map Placeholder */}
          <div
            className="rounded-[16px] h-32 mb-3 flex items-center justify-center"
            style={{
              background: C.primarySoft,
              border: `1px solid ${C.border}`,
            }}
          >
            <div className="text-center">
              <MapPin size={32} color={C.primary} />
              <p
                className="text-[9px] mt-1 font-bold"
                style={{ color: C.primary, fontFamily: FONT.family }}
              >
                Map View
              </p>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-1 mb-3">
            {["info", "hours", "facilities"].map((tab) => (
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
                {tab === "info" ? "Info" : tab === "hours" ? "Hours" : "Facilities"}
              </button>
            ))}
          </div>

          {activeTab === "info" && (
            <div
              className="rounded-[16px] p-3"
              style={{
                background: C.surface,
                border: `1px solid ${C.border}`,
              }}
            >
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <MapPin size={14} color={C.primary} className="mt-0.5" />
                  <div>
                    <p
                      className="text-[9px] font-bold"
                      style={{ color: C.text, fontFamily: FONT.family }}
                    >
                      Address
                    </p>
                    <p
                      className="text-[8px]"
                      style={{ color: C.textSoft, fontFamily: FONT.family }}
                    >
                      No. 12, Jalan Telawi 1, Bangsar Baru,<br />
                      59100 Kuala Lumpur, Malaysia
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <Phone size={14} color={C.success} className="mt-0.5" />
                  <div>
                    <p
                      className="text-[9px] font-bold"
                      style={{ color: C.text, fontFamily: FONT.family }}
                    >
                      Contact
                    </p>
                    <p
                      className="text-[8px]"
                      style={{ color: C.textSoft, fontFamily: FONT.family }}
                    >
                      +60 3-2282 1234
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <Star size={14} color={C.warning} className="mt-0.5" />
                  <div>
                    <p
                      className="text-[9px] font-bold"
                      style={{ color: C.text, fontFamily: FONT.family }}
                    >
                      Rating
                    </p>
                    <p
                      className="text-[8px]"
                      style={{ color: C.textSoft, fontFamily: FONT.family }}
                    >
                      4.5 · 328 reviews
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "hours" && (
            <div
              className="rounded-[16px] p-3"
              style={{
                background: C.surface,
                border: `1px solid ${C.border}`,
              }}
            >
              <div className="space-y-2">
                {[
                  { day: "Monday - Friday", hours: "10:00 AM - 10:00 PM" },
                  { day: "Saturday", hours: "10:00 AM - 11:00 PM" },
                  { day: "Sunday", hours: "10:00 AM - 9:00 PM" },
                ].map((schedule, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between py-2 border-b last:border-0"
                    style={{ borderColor: C.divider }}
                  >
                    <span
                      className="text-[9px] font-bold"
                      style={{ color: C.text, fontFamily: FONT.family }}
                    >
                      {schedule.day}
                    </span>
                    <span
                      className="text-[8px]"
                      style={{ color: C.textSoft, fontFamily: FONT.family }}
                    >
                      {schedule.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "facilities" && (
            <div
              className="rounded-[16px] p-3"
              style={{
                background: C.surface,
                border: `1px solid ${C.border}`,
              }}
            >
              <div className="flex flex-wrap gap-2">
                {["WiFi", "Parking", "Wheelchair Access", "Outdoor Seating", "Delivery"].map(
                  (facility) => (
                    <span
                      key={facility}
                      className="text-[8px] font-bold px-2.5 py-1.5 rounded-full"
                      style={{
                        background: C.primarySoft,
                        color: C.primary,
                        fontFamily: FONT.family,
                      }}
                    >
                      {facility}
                    </span>
                  )
                )}
              </div>
            </div>
          )}

          <button
            className="w-full py-3 rounded-full mt-3 flex items-center justify-center gap-2 text-[11px] font-bold"
            style={{
              background: C.primary,
              color: "#fff",
              fontFamily: FONT.family,
            }}
          >
            <Navigation size={14} />
            Get Directions
          </button>
        </div>
      </div>
    </>
  );
}
