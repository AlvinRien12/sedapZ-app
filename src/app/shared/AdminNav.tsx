import { BarChart2, Users, Zap, TrendingUp, Settings } from "lucide-react";
import { C, FONT } from "../constants";

interface AdminNavProps {
  active: number;
}

export function AdminNav({ active }: AdminNavProps) {
  const tabs = [
    { icon: <BarChart2 size={17} />, label: "Dashboard" },
    { icon: <Users size={17} />, label: "Members" },
    { icon: <Zap size={17} />, label: "Points" },
    { icon: <TrendingUp size={17} />, label: "Reports" },
    { icon: <Settings size={17} />, label: "Settings" },
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
