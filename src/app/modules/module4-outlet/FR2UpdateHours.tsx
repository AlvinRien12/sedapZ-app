import { useState } from "react";
import { ChevronLeft, Clock, Save } from "lucide-react";
import { C, FONT } from "../../constants";
import { StatusBar } from "../../shared/StatusBar";

export function FR2UpdateHours() {
  const [hours, setHours] = useState({
    mon: "10:00 AM - 10:00 PM",
    tue: "10:00 AM - 10:00 PM",
    wed: "10:00 AM - 10:00 PM",
    thu: "10:00 AM - 10:00 PM",
    fri: "10:00 AM - 11:00 PM",
    sat: "10:00 AM - 11:00 PM",
    sun: "10:00 AM - 9:00 PM",
  });

  const days = [
    { key: "mon", label: "Monday" },
    { key: "tue", label: "Tuesday" },
    { key: "wed", label: "Wednesday" },
    { key: "thu", label: "Thursday" },
    { key: "fri", label: "Friday" },
    { key: "sat", label: "Saturday" },
    { key: "sun", label: "Sunday" },
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
              Update Hours
            </p>

            <p
              className="text-[8px]"
              style={{
                color: C.muted,
                fontFamily: FONT.family,
              }}
            >
              Manage operating hours & closures
            </p>
          </div>
        </div>

        <div className="flex-1 overflow-hidden px-3 py-2">
          {/* Notice Banner */}
          <div
            className="p-2.5 rounded-[12px] mb-3"
            style={{
              background: C.primaryWash,
              border: `1px solid #F3D4DA`,
            }}
          >
            <p
              className="text-[8px]"
              style={{ color: C.primaryDark, fontFamily: FONT.family }}
            >
              Changes will be visible to customers immediately. Please
              update temporary closures here.
            </p>
          </div>

          {/* Hours List */}
          <div
            className="rounded-[16px] overflow-hidden"
            style={{
              background: C.surface,
              border: `1px solid ${C.border}`,
            }}
          >
            {days.map((day, i) => (
              <div
                key={day.key}
                className="flex items-center justify-between px-3 py-2.5 border-b last:border-0"
                style={{ borderColor: C.divider }}
              >
                <span
                  className="text-[10px] font-bold w-20"
                  style={{ color: C.text, fontFamily: FONT.family }}
                >
                  {day.label}
                </span>
                <input
                  type="text"
                  value={hours[day.key as keyof typeof hours]}
                  onChange={(e) =>
                    setHours({ ...hours, [day.key]: e.target.value })
                  }
                  className="flex-1 mx-2 px-2 py-1 rounded-[8px] text-[9px] text-right outline-none"
                  style={{
                    background: C.bg,
                    border: `1px solid ${C.border}`,
                    color: C.text,
                    fontFamily: FONT.family,
                  }}
                />
              </div>
            ))}
          </div>

          {/* Special Notice */}
          <div
            className="rounded-[14px] p-3 mt-3"
            style={{
              background: C.surface,
              border: `1px solid ${C.border}`,
            }}
          >
            <p
              className="text-[10px] font-bold mb-2"
              style={{ color: C.text, fontFamily: FONT.family }}
            >
              Special Notice
            </p>
            <textarea
              placeholder="e.g., Closed for public holiday..."
              rows={2}
              className="w-full px-3 py-2 rounded-[12px] text-[9px] outline-none resize-none"
              style={{
                background: C.bg,
                border: `1px solid ${C.border}`,
                color: C.text,
                fontFamily: FONT.family,
              }}
            />
          </div>

          <button
            className="w-full py-3 rounded-full mt-3 flex items-center justify-center gap-2 text-[11px] font-bold"
            style={{
              background: C.primary,
              color: "#fff",
              fontFamily: FONT.family,
            }}
          >
            <Save size={14} />
            Save Changes
          </button>
        </div>
      </div>
    </>
  );
}
