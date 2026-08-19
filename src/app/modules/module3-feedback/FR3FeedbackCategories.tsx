import { useState } from "react";
import { ChevronLeft, Tag, AlertTriangle, Utensils, Wrench, MessageSquare } from "lucide-react";
import { C, FONT } from "../../constants";
import { StatusBar } from "../../shared/StatusBar";
import { PillButton } from "../../shared/PillButton";

export function FR3FeedbackCategories() {
  const [selected, setSelected] = useState<string | null>(null);

  const categories = [
    { id: "food", label: "Food Quality", icon: <Utensils size={16} />, color: C.primary },
    { id: "service", label: "Service", icon: <MessageSquare size={16} />, color: C.success },
    { id: "app", label: "App Issue", icon: <Wrench size={16} />, color: C.warning },
    { id: "other", label: "Other", icon: <Tag size={16} />, color: C.muted },
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
              Submit Feedback
            </p>

            <p
              className="text-[8px]"
              style={{
                color: C.muted,
                fontFamily: FONT.family,
              }}
            >
              Step 1 of 3 — Choose a category
            </p>
          </div>
        </div>

        <div className="flex-1 overflow-hidden px-4 py-4">
          {/* Progress */}
          <div className="flex gap-1.5 mb-6">
            {[1, 2, 3].map((step) => (
              <div
                key={step}
                className="flex-1 h-1.5 rounded-full"
                style={{
                  background: step === 1 ? C.primary : C.border,
                }}
              />
            ))}
          </div>

          {/* Title */}
          <div className="text-center mb-6">
            <p
              className="text-[16px] font-extrabold"
              style={{ color: C.text, fontFamily: FONT.family }}
            >
              What's your feedback about?
            </p>
            <p
              className="text-[9px] mt-1"
              style={{ color: C.muted, fontFamily: FONT.family }}
            >
              Select the category that best describes your issue
            </p>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelected(cat.id)}
                className="p-4 rounded-[16px] text-center transition-all"
                style={{
                  background: selected === cat.id ? cat.color + "15" : C.surface,
                  border: `2px solid ${selected === cat.id ? cat.color : C.border}`,
                }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2"
                  style={{
                    background: selected === cat.id ? cat.color + "20" : C.bg,
                    color: selected === cat.id ? cat.color : C.muted,
                  }}
                >
                  {cat.icon}
                </div>
                <p
                  className="text-[10px] font-bold"
                  style={{
                    color: selected === cat.id ? cat.color : C.text,
                    fontFamily: FONT.family,
                  }}
                >
                  {cat.label}
                </p>
              </button>
            ))}
          </div>

          {/* Urgency */}
          <div
            className="rounded-[14px] p-3 mb-4"
            style={{ background: C.surface, border: `1px solid ${C.border}` }}
          >
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle size={14} color={C.warning} />
              <p
                className="text-[10px] font-bold"
                style={{ color: C.text, fontFamily: FONT.family }}
              >
                Urgency Level
              </p>
            </div>
            <div className="flex gap-2">
              {["Low", "Medium", "High"].map((level) => (
                <PillButton
                  key={level}
                  active={level === "Medium"}
                >
                  {level}
                </PillButton>
              ))}
            </div>
          </div>

          <button
            disabled={!selected}
            className="w-full py-3 rounded-full text-[11px] font-bold"
            style={{
              background: selected ? C.primary : C.disabled,
              color: selected ? "#fff" : C.disabledText,
              fontFamily: FONT.family,
            }}
          >
            Continue
          </button>
        </div>
      </div>
    </>
  );
}
