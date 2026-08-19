import { Home, ShoppingBag, Gift, Ticket, User } from "lucide-react";
import { C, FONT } from "../constants";

interface CustomerNavProps {
  active: number;
}

export function CustomerNav({ active }: CustomerNavProps) {
  const tabs = [
    { icon: <Home size={17} />, label: "Home" },
    { icon: <ShoppingBag size={17} />, label: "Order" },
    { icon: <Gift size={17} />, label: "Rewards" },
    { icon: <Ticket size={17} />, label: "Vouchers" },
    { icon: <User size={17} />, label: "Account" },
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
          style={{
            color: active === i ? C.primary : C.muted,
          }}
        >
          {tab.icon}
          <span
            className="text-[8px]"
            style={{ fontFamily: FONT.family }}
          >
            {tab.label}
          </span>
        </button>
      ))}
    </div>
  );
}
