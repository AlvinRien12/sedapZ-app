import { useState } from "react";
import { ChevronLeft, Navigation, Clock, Car, Footprints, Bike } from "lucide-react";
import { C, FONT } from "../../constants";
import { StatusBar } from "../../shared/StatusBar";

export function FR5RouteGuidance() {
  const [transport, setTransport] = useState("car");

  const routes = [
    { mode: "car", label: "Driving", time: "12 min", dist: "5.2 km", icon: <Car size={16} /> },
    { mode: "walk", label: "Walking", time: "45 min", dist: "3.8 km", icon: <Footprints size={16} /> },
    { mode: "bike", label: "Cycling", time: "18 min", dist: "4.1 km", icon: <Bike size={16} /> },
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
              Directions
            </p>

            <p
              className="text-[8px]"
              style={{
                color: C.muted,
                fontFamily: FONT.family,
              }}
            >
              Bangsar Outlet · 5.2 km away
            </p>
          </div>
        </div>

        <div className="flex-1 overflow-hidden px-3 py-2">
          {/* Map Placeholder */}
          <div
            className="rounded-[16px] h-40 mb-3 flex items-center justify-center"
            style={{
              background: C.primarySoft,
              border: `1px solid ${C.border}`,
            }}
          >
            <div className="text-center">
              <Navigation size={40} color={C.primary} />
              <p
                className="text-[9px] mt-1 font-bold"
                style={{ color: C.primary, fontFamily: FONT.family }}
              >
                Route Map
              </p>
            </div>
          </div>

          {/* Transport Options */}
          <div className="flex gap-2 mb-3">
            {routes.map((route) => (
              <button
                key={route.mode}
                onClick={() => setTransport(route.mode)}
                className="flex-1 p-2.5 rounded-[12px] flex flex-col items-center gap-1"
                style={{
                  background: transport === route.mode ? C.primary : C.surface,
                  border: `1px solid ${transport === route.mode ? C.primary : C.border}`,
                }}
              >
                <div
                  style={{
                    color: transport === route.mode ? "#fff" : C.primary,
                  }}
                >
                  {route.icon}
                </div>
                <span
                  className="text-[8px] font-bold"
                  style={{
                    color: transport === route.mode ? "#fff" : C.text,
                    fontFamily: FONT.family,
                  }}
                >
                  {route.label}
                </span>
              </button>
            ))}
          </div>

          {/* Selected Route */}
          {routes
            .filter((r) => r.mode === transport)
            .map((route) => (
              <div
                key={route.mode}
                className="rounded-[16px] p-3 mb-3"
                style={{
                  background: C.surface,
                  border: `1px solid ${C.border}`,
                }}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Clock size={14} color={C.primary} />
                    <span
                      className="text-[12px] font-extrabold"
                      style={{ color: C.text, fontFamily: FONT.family }}
                    >
                      {route.time}
                    </span>
                  </div>
                  <span
                    className="text-[9px]"
                    style={{ color: C.muted, fontFamily: FONT.family }}
                  >
                    {route.dist}
                  </span>
                </div>

                {/* Steps */}
                <div className="space-y-2">
                  {[
                    { step: "Head north on Jalan Telawi", dist: "0.3 km" },
                    { step: "Turn right onto Jalan Bangsar", dist: "1.2 km" },
                    { step: "Continue to outlet", dist: "3.7 km" },
                  ].map((step, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <div
                        className="w-2 h-2 rounded-full mt-1 flex-shrink-0"
                        style={{ background: C.primary }}
                      />
                      <div className="flex-1">
                        <p
                          className="text-[9px]"
                          style={{ color: C.text, fontFamily: FONT.family }}
                        >
                          {step.step}
                        </p>
                        <p
                          className="text-[7px]"
                          style={{ color: C.muted, fontFamily: FONT.family }}
                        >
                          {step.dist}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}

          <button
            className="w-full py-3 rounded-full flex items-center justify-center gap-2 text-[11px] font-bold"
            style={{
              background: C.primary,
              color: "#fff",
              fontFamily: FONT.family,
            }}
          >
            <Navigation size={14} />
            Start Navigation
          </button>
        </div>
      </div>
    </>
  );
}
