import { BarChart2, QrCode, History, User } from "lucide-react";
import { C, FONT } from "../constants";

interface StaffNavProps {
  active: number;
}

export function StaffNav({ active }: StaffNavProps) {
  const tabs = [
    { icon: <BarChart2 size={17} />, label: "Dashboard" },
    { icon: <QrCode size={17} />, label: "Scan" },
    { icon: <History size={17} />, label: "History" },
    { icon: <User size={17} />, label: "Profile" },
  ];

  return (
    <div
      className="flex items-center border-t flex-shrink-0"
      style={{
        background: C.surface,
        borderColor: "#E0E0E0",
      }}
    >
      {tabs.map((tab, i) => (
        <button
          key={i}
          className="flex-1 flex flex-col items-center gap-0.5 py-2.5"
          style={{ color: active === i ? C.primary : C.muted }}
        >
          {tab.icon}
          <span className="text-[8px]" style={FONT}>
            {tab.label}
          </span>
        </button>
      ))}
    </div>
  );
}
