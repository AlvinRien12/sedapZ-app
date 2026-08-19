import { useState } from "react";
import {
  Home,
  Gift,
  Ticket,
  User,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Star,
  Award,
  QrCode,
  Download,
  TrendingUp,
  Users,
  Check,
  ArrowUpRight,
  ArrowDownRight,
  Filter,
  Bell,
  BarChart2,
  ShoppingBag,
  Zap,
  Settings,
  ToggleLeft,
  ToggleRight,
  FileDown,
  Calendar,
  Clock,
  ScanLine,
  CircleDollarSign,
  Utensils,
  History,
} from "lucide-react";

// ─────────────────────────────────────────────────────────────────────────────
// DESIGN SYSTEM
// ─────────────────────────────────────────────────────────────────────────────

const C = {
  bg: "#F4F4F6",
  surface: "#FFFFFF",
  surfaceSoft: "#FAFAFB",

  primary: "#B51F3B",
  primaryDark: "#7E142A",
  primarySoft: "#FCECEF",
  primaryWash: "#FFF5F6",

  text: "#24242A",
  textSoft: "#5F6068",
  muted: "#8B8C94",

  border: "#E4E4E8",
  divider: "#EEEEF1",

  success: "#2E8B57",
  successSoft: "#EAF7F0",

  warning: "#D9822B",
  warningSoft: "#FFF3E6",

  disabled: "#F5DDE2",
  disabledText: "#B98691",

  dark: "#19191E",
};

const FONT = {
  family: "Plus Jakarta Sans, sans-serif",
};

// ─────────────────────────────────────────────────────────────────────────────
// SHARED COMPONENTS
// ─────────────────────────────────────────────────────────────────────────────

function StatusBar({ dark = false }: { dark?: boolean }) {
  const color = dark ? "#FFFFFF" : C.text;

  return (
    <div
      className="flex items-center justify-between px-5 pt-2 pb-1 flex-shrink-0"
      style={{ color }}
    >
      <span
        className="text-[10px] font-bold"
        style={{ fontFamily: "Space Mono, monospace" }}
      >
        9:41
      </span>

      <div className="flex items-center gap-1.5">
        <svg width="14" height="10" viewBox="0 0 14 10">
          <rect x="0" y="6" width="2.5" height="4" rx="0.5" fill={color} opacity=".4" />
          <rect x="3.5" y="4" width="2.5" height="6" rx="0.5" fill={color} opacity=".6" />
          <rect x="7" y="2" width="2.5" height="8" rx="0.5" fill={color} opacity=".8" />
          <rect x="10.5" y="0" width="2.5" height="10" rx="0.5" fill={color} />
        </svg>

        <svg width="13" height="10" viewBox="0 0 13 10">
          <circle cx="6.5" cy="8.5" r="1" fill={color} />
          <path
            d="M4.2 6.2C5 5.5 5.7 5.1 6.5 5.1s1.5.4 2.3 1.1"
            stroke={color}
            strokeWidth="1.2"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M2 3.8C3.3 2.2 4.8 1.3 6.5 1.3s3.2.9 4.5 2.5"
            stroke={color}
            strokeWidth="1.2"
            strokeLinecap="round"
            fill="none"
            opacity=".6"
          />
        </svg>

        <svg width="22" height="11" viewBox="0 0 22 11">
          <rect
            x=".5"
            y=".5"
            width="17"
            height="10"
            rx="2.5"
            stroke={color}
            strokeOpacity=".5"
            fill="none"
          />
          <rect x="18" y="3.5" width="2" height="4" rx="1" fill={color} opacity=".5" />
          <rect x="2" y="2" width="12" height="7" rx="1.5" fill={dark ? "#FFFFFF" : C.primary} />
        </svg>
      </div>
    </div>
  );
}

function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <div
      className="font-bold tracking-tight"
      style={{
        fontSize: 18,
        color: dark ? "#FFFFFF" : C.primary,
        fontFamily: FONT.family,
      }}
    >
      sedap<span style={{ color: dark ? "#FFD5DC" : C.primaryDark }}>Z</span>
    </div>
  );
}

function PillButton({
  children,
  active = false,
  disabled = false,
  onClick,
}: {
  children: React.ReactNode;
  active?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="px-3.5 py-1.5 rounded-full text-[9px] font-bold transition-all"
      style={{
        background: disabled
          ? C.disabled
          : active
            ? C.primary
            : C.surface,
        color: disabled
          ? C.disabledText
          : active
            ? "#FFFFFF"
            : C.textSoft,
        border: `1px solid ${
          disabled
            ? C.disabled
            : active
              ? C.primary
              : C.border
        }`,
        fontFamily: FONT.family,
      }}
    >
      {children}
    </button>
  );
}

function CustomerNav({ active }: { active: number }) {
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

function StaffNav({ active }: { active: number }) {
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

function AdminNav({ active }: { active: number }) {
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

function Phone({
  children,
  label,
  frId,
}: {
  children: React.ReactNode;
  label: string;
  frId: string;
}) {
  return (
    <div className="flex flex-col items-center gap-3 flex-shrink-0">
      <div
        className="px-3 py-1 rounded-full text-[10px] font-bold tracking-wider"
        style={{
          background: C.primarySoft,
          color: C.primary,
          border: `1px solid #F0C8D0`,
          fontFamily: "Space Mono, monospace",
        }}
      >
        {frId}
      </div>

      {/* Phone frame */}
      <div
        className="rounded-[32px] p-[6px] shadow-2xl flex-shrink-0"
        style={{
          background: "#202023",
          border: "2px solid #333338",
          boxShadow: "0 24px 50px rgba(0,0,0,.16)",
        }}
      >
        {/* Speaker */}
        <div className="flex justify-center mb-1">
          <div
            className="w-16 h-1 rounded-full"
            style={{ background: "#111" }}
          />
        </div>

        {/* Screen */}
        <div
          className="rounded-[25px] overflow-hidden flex flex-col"
          style={{
            width: 260,
            height: 520,
            background: C.bg,
          }}
        >
          {children}
        </div>

        {/* Home indicator */}
        <div className="flex justify-center mt-1">
          <div
            className="w-14 h-1 rounded-full"
            style={{ background: "#444" }}
          />
        </div>
      </div>

      {/* Label */}
      <div className="text-center max-w-[260px]">
        <p
          className="text-xs font-bold"
          style={{
            color: C.text,
            fontFamily: FONT.family,
          }}
        >
          {label}
        </p>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// FR1 — CUSTOMER: VIEW POINT BALANCE
// ─────────────────────────────────────────────────────────────────────────────

function FR1Screen() {
  const txns = [
    {
      desc: "Dine-in · Bangsar Outlet",
      pts: "+150",
      date: "Today, 12:34 PM",
      positive: true,
    },
    {
      desc: "Voucher · Char Kuey Teow",
      pts: "-80",
      date: "Yesterday",
      positive: false,
    },
    {
      desc: "Dine-in · KLCC Outlet",
      pts: "+200",
      date: "Mon, Aug 17",
      positive: true,
    },
    {
      desc: "Birthday Bonus",
      pts: "+300",
      date: "Aug 15",
      positive: true,
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
            borderBottomLeftRadius: 24,
            borderBottomRightRadius: 24,
            paddingBottom: 18,
          }}
        >
          <StatusBar dark />

          <div className="flex items-center justify-between px-4 py-2">
            <Logo dark />
            <button
              className="w-8 h-8 rounded-full flex items-center justify-center"
              style={{ background: "rgba(255,255,255,.15)" }}
            >
              <Bell size={15} color="#fff" />
            </button>
          </div>

          <div className="px-4 pt-3">
            <p
              className="text-[10px]"
              style={{
                color: "rgba(255,255,255,.7)",
                fontFamily: FONT.family,
              }}
            >
              Good afternoon, IceBing
            </p>

            <p
              className="mt-1 text-[12px] font-bold"
              style={{
                color: "#fff",
                fontFamily: FONT.family,
              }}
            >
              Your loyalty balance
            </p>

            <div className="flex items-end justify-between mt-2">
              <div>
                <p
                  className="text-[32px] font-extrabold leading-none"
                  style={{
                    color: "#fff",
                    fontFamily: FONT.family,
                  }}
                >
                  2,450
                </p>
                <p
                  className="text-[9px] mt-1"
                  style={{
                    color: "rgba(255,255,255,.72)",
                    fontFamily: FONT.family,
                  }}
                >
                  total points
                </p>
              </div>

              <button
                className="flex items-center gap-1 px-3 py-1.5 rounded-full"
                style={{
                  background: C.primaryDark,
                  color: "#fff",
                  fontFamily: FONT.family,
                }}
              >
                <History size={10} />
                <span className="text-[9px] font-bold">History</span>
              </button>
            </div>
          </div>
        </div>

        <div
          className="flex-1 overflow-hidden -mt-1 px-3 pt-3"
        >
          <div
            className="rounded-[22px] h-full overflow-hidden flex flex-col"
            style={{
              background: C.surface,
              boxShadow: "0 -4px 20px rgba(0,0,0,.03)",
            }}
          >
            <div className="px-4 pt-4 pb-2 flex-shrink-0">
              <div className="flex items-center justify-between">
                <div>
                  <p
                    className="text-[12px] font-bold"
                    style={{ color: C.text, fontFamily: FONT.family }}
                  >
                    Gold Member
                  </p>
                  <p
                    className="text-[9px] mt-0.5"
                    style={{ color: C.muted, fontFamily: FONT.family }}
                  >
                    550 points to Platinum
                  </p>
                </div>

                <Award size={20} color={C.primary} />
              </div>

              <div
                className="h-2 rounded-full mt-3"
                style={{ background: C.primarySoft }}
              >
                <div
                  className="h-2 rounded-full"
                  style={{
                    width: "82%",
                    background: C.primary,
                  }}
                />
              </div>
            </div>

            <div className="px-4 py-2 flex items-center justify-between">
              <p
                className="text-[11px] font-bold"
                style={{ color: C.text, fontFamily: FONT.family }}
              >
                Recent activity
              </p>
              <ChevronRight size={14} color={C.muted} />
            </div>

            <div className="flex-1 overflow-hidden px-3">
              {txns.map((txn, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2.5 py-2.5 border-b"
                  style={{ borderColor: C.divider }}
                >
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center"
                    style={{
                      background: txn.positive
                        ? C.successSoft
                        : C.primarySoft,
                    }}
                  >
                    {txn.positive ? (
                      <ArrowUpRight size={13} color={C.success} />
                    ) : (
                      <ArrowDownRight size={13} color={C.primary} />
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <p
                      className="text-[9px] font-bold truncate"
                      style={{
                        color: C.text,
                        fontFamily: FONT.family,
                      }}
                    >
                      {txn.desc}
                    </p>
                    <p
                      className="text-[8px] mt-0.5"
                      style={{
                        color: C.muted,
                        fontFamily: FONT.family,
                      }}
                    >
                      {txn.date}
                    </p>
                  </div>

                  <span
                    className="text-[10px] font-extrabold"
                    style={{
                      color: txn.positive ? C.success : C.primary,
                      fontFamily: FONT.family,
                    }}
                  >
                    {txn.pts}
                  </span>
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

// ─────────────────────────────────────────────────────────────────────────────
// FR2 — CUSTOMER: REDEEM VOUCHERS
// ─────────────────────────────────────────────────────────────────────────────

function FR2Screen() {
  const [activeTab, setActiveTab] = useState("All");

  const tabs = ["All", "Food", "Drinks", "Special"];

  const vouchers = [
    {
      name: "50% Off Char Kuey Teow",
      pts: 80,
      img: "https://images.unsplash.com/photo-1706128998697-456f55fb409d?w=400&h=300&fit=crop&auto=format",
      tag: "IN-STORE",
      available: true,
    },
    {
      name: "Free Teh Tarik Ais",
      pts: 50,
      img: "https://images.unsplash.com/photo-1781441234181-7a1f11b1a257?w=400&h=300&fit=crop&auto=format",
      tag: "IN-STORE",
      available: true,
    },
    {
      name: "Nasi Lemak Set Free",
      pts: 120,
      img: "https://images.unsplash.com/photo-1770966485209-e20d97337f1a?w=400&h=300&fit=crop&auto=format",
      tag: "IN-STORE",
      available: false,
    },
    {
      name: "Satay 10pcs · 10% Off",
      pts: 60,
      img: "https://images.unsplash.com/photo-1605582763781-dff23d0f5d32?w=400&h=300&fit=crop&auto=format",
      tag: "DELIVERY",
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
                  className="overflow-hidden rounded-[16px]"
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

                  <div className="p-2.5">
                    <p
                      className="text-[9px] font-bold leading-tight"
                      style={{
                        color: C.text,
                        fontFamily: FONT.family,
                        minHeight: 24,
                      }}
                    >
                      {voucher.name}
                    </p>

                    <div className="flex items-center justify-between mt-2">
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

// ─────────────────────────────────────────────────────────────────────────────
// FR3 — STAFF: SCAN CUSTOMER QR
// ─────────────────────────────────────────────────────────────────────────────

function FR3Screen() {
  const [scanned, setScanned] = useState(false);

  return (
    <>
      <div
        className="flex-1 overflow-hidden flex flex-col"
        style={{ background: C.bg }}
      >
        <StatusBar />

        {/* Staff Header */}
        <div
          className="px-4 py-2 flex items-center justify-between flex-shrink-0"
        >
          <div>
            <div className="flex items-center gap-1.5">
              <Logo />

              <span
                className="px-1.5 py-0.5 rounded text-[7px] font-bold"
                style={{
                  background: C.primarySoft,
                  color: C.primary,
                  fontFamily: FONT.family,
                }}
              >
                STAFF
              </span>
            </div>

            <p
              className="text-[9px] mt-1"
              style={{
                color: C.muted,
                fontFamily: FONT.family,
              }}
            >
              Bangsar Outlet
            </p>
          </div>

          <div
            className="w-8 h-8 rounded-full flex items-center justify-center"
            style={{
              background: C.surface,
              border: `1px solid ${C.border}`,
            }}
          >
            <User size={14} color={C.textSoft} />
          </div>
        </div>

        {!scanned ? (
          /* ─────────────────────────────────────────────
             QR SCANNER STATE
          ───────────────────────────────────────────── */
          <div className="flex-1 overflow-hidden px-4 pb-3">
            {/* Title */}
            <div className="text-center pt-4">
              <div
                className="w-11 h-11 rounded-full mx-auto flex items-center justify-center"
                style={{
                  background: C.primarySoft,
                  color: C.primary,
                }}
              >
                <QrCode size={23} color={C.primary} />
              </div>

              <p
                className="text-[16px] font-extrabold mt-3"
                style={{
                  color: C.text,
                  fontFamily: FONT.family,
                }}
              >
                Scan Customer QR
              </p>

              <p
                className="text-[9px] mt-1 leading-relaxed"
                style={{
                  color: C.muted,
                  fontFamily: FONT.family,
                }}
              >
                Ask the customer to open their SedapZ QR code
                <br />
                and show it to you.
              </p>
            </div>

            {/* Notice */}
            <div
              className="flex items-start gap-2 p-2.5 rounded-[14px] mt-4"
              style={{
                background: C.primaryWash,
                border: `1px solid #F3D4DA`,
              }}
            >
              <QrCode
                size={14}
                color={C.primary}
                className="flex-shrink-0 mt-0.5"
              />

              <div>
                <p
                  className="text-[8px] font-bold"
                  style={{
                    color: C.primaryDark,
                    fontFamily: FONT.family,
                  }}
                >
                  Customer QR required
                </p>

                <p
                  className="text-[7px] mt-0.5 leading-relaxed"
                  style={{
                    color: C.textSoft,
                    fontFamily: FONT.family,
                  }}
                >
                  Scan the customer's personal QR code to verify
                  their membership and award loyalty points.
                </p>
              </div>
            </div>

            {/* Scanner */}
            <div className="flex justify-center mt-5">
              <div
                className="relative w-[190px] h-[190px] rounded-[24px] flex items-center justify-center"
                style={{
                  background: "#19191E",
                  boxShadow: "0 12px 30px rgba(0,0,0,.16)",
                }}
              >
                {/* Camera scan area */}
                <div
                  className="absolute inset-4 rounded-[18px]"
                  style={{
                    border: "1px solid rgba(255,255,255,.15)",
                  }}
                />

                {/* Corner brackets */}
                <div
                  className="absolute top-5 left-5 w-8 h-8"
                  style={{
                    borderTop: `3px solid ${C.primary}`,
                    borderLeft: `3px solid ${C.primary}`,
                    borderRadius: "8px 0 0 0",
                  }}
                />

                <div
                  className="absolute top-5 right-5 w-8 h-8"
                  style={{
                    borderTop: `3px solid ${C.primary}`,
                    borderRight: `3px solid ${C.primary}`,
                    borderRadius: "0 8px 0 0",
                  }}
                />

                <div
                  className="absolute bottom-5 left-5 w-8 h-8"
                  style={{
                    borderBottom: `3px solid ${C.primary}`,
                    borderLeft: `3px solid ${C.primary}`,
                    borderRadius: "0 0 0 8px",
                  }}
                />

                <div
                  className="absolute bottom-5 right-5 w-8 h-8"
                  style={{
                    borderBottom: `3px solid ${C.primary}`,
                    borderRight: `3px solid ${C.primary}`,
                    borderRadius: "0 0 8px 0",
                  }}
                />

                {/* QR icon / scan indicator */}
                <div
                  className="w-20 h-20 rounded-[12px] flex items-center justify-center"
                  style={{
                    background: "rgba(255,255,255,.05)",
                  }}
                >
                  <QrCode
                    size={60}
                    color="#FFFFFF"
                    strokeWidth={1.1}
                  />
                </div>

                {/* Scan line */}
                <div
                  className="absolute left-7 right-7 top-1/2 h-0.5"
                  style={{
                    background: C.primary,
                    boxShadow: `0 0 10px ${C.primary}`,
                  }}
                />
              </div>
            </div>

            {/* Instruction */}
            <div className="text-center mt-4">
              <p
                className="text-[9px] font-bold"
                style={{
                  color: C.text,
                  fontFamily: FONT.family,
                }}
              >
                Position the QR code inside the frame
              </p>

              <p
                className="text-[8px] mt-1"
                style={{
                  color: C.muted,
                  fontFamily: FONT.family,
                }}
              >
                Scanning will happen automatically
              </p>
            </div>

            {/* Staff purpose */}
            <div
              className="flex items-center gap-2 mt-4 p-2.5 rounded-[14px]"
              style={{
                background: C.surface,
                border: `1px solid ${C.border}`,
              }}
            >
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                style={{
                  background: C.successSoft,
                }}
              >
                <CircleDollarSign
                  size={14}
                  color={C.success}
                />
              </div>

              <div>
                <p
                  className="text-[8px] font-bold"
                  style={{
                    color: C.text,
                    fontFamily: FONT.family,
                  }}
                >
                  Earn loyalty points
                </p>

                <p
                  className="text-[7px] mt-0.5"
                  style={{
                    color: C.muted,
                    fontFamily: FONT.family,
                  }}
                >
                  Scan first, then enter the customer's bill amount
                  to award points.
                </p>
              </div>
            </div>

            {/* Demo scan button */}
            <button
              onClick={() => setScanned(true)}
              className="w-full py-2.5 rounded-full mt-3 text-[10px] font-bold"
              style={{
                background: C.primary,
                color: "#fff",
                fontFamily: FONT.family,
              }}
            >
              Simulate QR Scan
            </button>
          </div>
        ) : (
          /* ─────────────────────────────────────────────
             SUCCESSFUL SCAN STATE
          ───────────────────────────────────────────── */
          <div className="flex-1 overflow-hidden px-3 pb-2">
            <div
              className="rounded-[20px] p-3"
              style={{
                background: C.surface,
                border: `1px solid ${C.border}`,
                boxShadow: "0 4px 16px rgba(0,0,0,.04)",
              }}
            >
              <div className="flex items-center gap-2">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center"
                  style={{ background: C.successSoft }}
                >
                  <Check size={17} color={C.success} />
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-1.5">
                    <p
                      className="text-[11px] font-bold"
                      style={{
                        color: C.text,
                        fontFamily: FONT.family,
                      }}
                    >
                      Nik Haziq Ramli
                    </p>

                    <span
                      className="px-1.5 py-0.5 rounded-full text-[7px] font-bold"
                      style={{
                        background: C.primarySoft,
                        color: C.primary,
                        fontFamily: FONT.family,
                      }}
                    >
                      GOLD
                    </span>
                  </div>

                  <p
                    className="text-[8px] mt-0.5"
                    style={{
                      color: C.success,
                      fontFamily: FONT.family,
                    }}
                  >
                    QR scanned · Member verified
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 mt-3">
                <div
                  className="rounded-[12px] p-2 text-center"
                  style={{ background: C.bg }}
                >
                  <p
                    className="text-[15px] font-extrabold"
                    style={{
                      color: C.primary,
                      fontFamily: FONT.family,
                    }}
                  >
                    2,450
                  </p>

                  <p
                    className="text-[8px]"
                    style={{
                      color: C.muted,
                      fontFamily: FONT.family,
                    }}
                  >
                    Current points
                  </p>
                </div>

                <div
                  className="rounded-[12px] p-2 text-center"
                  style={{ background: C.bg }}
                >
                  <p
                    className="text-[15px] font-extrabold"
                    style={{
                      color: C.text,
                      fontFamily: FONT.family,
                    }}
                  >
                    Gold
                  </p>

                  <p
                    className="text-[8px]"
                    style={{
                      color: C.muted,
                      fontFamily: FONT.family,
                    }}
                  >
                    Member tier
                  </p>
                </div>
              </div>
            </div>

            {/* Existing collection section */}
            <div
              className="rounded-[20px] p-3 mt-2.5"
              style={{
                background: C.surface,
                border: `1px solid ${C.border}`,
              }}
            >
              <div className="flex items-center gap-1.5 mb-3">
                <CircleDollarSign size={14} color={C.primary} />

                <p
                  className="text-[11px] font-bold"
                  style={{
                    color: C.text,
                    fontFamily: FONT.family,
                  }}
                >
                  Collect points
                </p>
              </div>

              <p
                className="text-[8px] mb-1"
                style={{
                  color: C.muted,
                  fontFamily: FONT.family,
                }}
              >
                Bill amount
              </p>

              <div
                className="flex items-center px-3 py-2 rounded-[12px]"
                style={{
                  background: C.bg,
                  border: `1px solid ${C.border}`,
                }}
              >
                <span
                  className="text-[10px] font-bold"
                  style={{
                    color: C.textSoft,
                    fontFamily: FONT.family,
                  }}
                >
                  RM
                </span>

                <span
                  className="ml-2 text-[15px] font-extrabold"
                  style={{
                    color: C.text,
                    fontFamily: FONT.family,
                  }}
                >
                  45.00
                </span>
              </div>

              <div
                className="flex items-center justify-between px-3 py-2 rounded-[12px] mt-2"
                style={{ background: C.successSoft }}
              >
                <span
                  className="text-[9px]"
                  style={{
                    color: C.success,
                    fontFamily: FONT.family,
                  }}
                >
                  Points to add
                </span>

                <span
                  className="text-[12px] font-extrabold"
                  style={{
                    color: C.success,
                    fontFamily: FONT.family,
                  }}
                >
                  +45 pts
                </span>
              </div>

              <button
                className="w-full py-2.5 rounded-full mt-3 text-[10px] font-bold"
                style={{
                  background: C.primary,
                  color: "#fff",
                  fontFamily: FONT.family,
                }}
              >
                Confirm collection
              </button>
            </div>

            <button
              onClick={() => setScanned(false)}
              className="w-full py-2 mt-2 text-[9px] font-bold"
              style={{
                color: C.primary,
                fontFamily: FONT.family,
              }}
            >
              Scan another customer
            </button>
          </div>
        )}
      </div>

      <StaffNav active={1} />
    </>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// FR4 — ADMIN: POINT SETTINGS
// ─────────────────────────────────────────────────────────────────────────────

function FR4Screen() {
  const [transfer, setTransfer] = useState(true);
  const [birthday, setBirthday] = useState(true);
  const [expiry, setExpiry] = useState(false);

  const tiers = [
    {
      name: "Bronze",
      range: "0 – 999 pts",
      color: "#B97843",
    },
    {
      name: "Silver",
      range: "1,000 – 4,999 pts",
      color: "#8B8D93",
    },
    {
      name: "Gold",
      range: "5,000 – 9,999 pts",
      color: C.primary,
    },
    {
      name: "Platinum",
      range: "10,000+ pts",
      color: "#62646B",
    },
  ];

  const Toggle = ({
    value,
    onClick,
  }: {
    value: boolean;
    onClick: () => void;
  }) => (
    <button onClick={onClick}>
      {value ? (
        <ToggleRight size={26} color={C.primary} />
      ) : (
        <ToggleLeft size={26} color="#B5B6BC" />
      )}
    </button>
  );

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
              Points Settings
            </p>

            <p
              className="text-[8px]"
              style={{
                color: C.muted,
                fontFamily: FONT.family,
              }}
            >
              Manage your loyalty programme
            </p>
          </div>

          <span
            className="ml-auto px-2 py-1 rounded-full text-[7px] font-bold"
            style={{
              background: C.primarySoft,
              color: C.primary,
              fontFamily: FONT.family,
            }}
          >
            ADMIN
          </span>
        </div>

        <div className="flex-1 overflow-hidden px-3 py-2">
          <div
            className="rounded-[18px] p-3 mb-2"
            style={{
              background: C.surface,
              border: `1px solid ${C.border}`,
            }}
          >
            <div className="flex items-center gap-1.5 mb-2">
              <Zap size={13} color={C.primary} />
              <p
                className="text-[11px] font-bold"
                style={{
                  color: C.text,
                  fontFamily: FONT.family,
                }}
              >
                Earning rules
              </p>
            </div>

            {[
              ["Earning rate", "RM 1.00 = 1 pt"],
              ["Minimum purchase", "RM 5.00"],
              ["Rounding", "Round down"],
            ].map((rule, i) => (
              <div
                key={i}
                className="flex items-center justify-between py-2 border-b last:border-0"
                style={{ borderColor: C.divider }}
              >
                <span
                  className="text-[9px]"
                  style={{
                    color: C.textSoft,
                    fontFamily: FONT.family,
                  }}
                >
                  {rule[0]}
                </span>

                <button
                  className="flex items-center gap-1 px-2 py-1 rounded-full"
                  style={{
                    background: C.bg,
                    border: `1px solid ${C.border}`,
                  }}
                >
                  <span
                    className="text-[8px] font-bold"
                    style={{
                      color: C.text,
                      fontFamily: FONT.family,
                    }}
                  >
                    {rule[1]}
                  </span>

                  <ChevronDown size={9} color={C.muted} />
                </button>
              </div>
            ))}
          </div>

          <div
            className="rounded-[18px] p-3 mb-2"
            style={{
              background: C.surface,
              border: `1px solid ${C.border}`,
            }}
          >
            <p
              className="text-[11px] font-bold mb-2"
              style={{
                color: C.text,
                fontFamily: FONT.family,
              }}
            >
              Tier thresholds
            </p>

            {tiers.map((tier, i) => (
              <div
                key={i}
                className="flex items-center justify-between py-1.5"
              >
                <div className="flex items-center gap-2">
                  <div
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ background: tier.color }}
                  />

                  <span
                    className="text-[9px] font-bold"
                    style={{
                      color: C.text,
                      fontFamily: FONT.family,
                    }}
                  >
                    {tier.name}
                  </span>
                </div>

                <span
                  className="text-[8px]"
                  style={{
                    color: C.muted,
                    fontFamily: FONT.family,
                  }}
                >
                  {tier.range}
                </span>
              </div>
            ))}
          </div>

          <div
            className="rounded-[18px] p-3 mb-2"
            style={{
              background: C.surface,
              border: `1px solid ${C.border}`,
            }}
          >
            <p
              className="text-[11px] font-bold mb-1"
              style={{
                color: C.text,
                fontFamily: FONT.family,
              }}
            >
              Features
            </p>

            {[
              {
                label: "Allow points transfer",
                sub: "Members can transfer points",
                value: transfer,
                set: setTransfer,
              },
              {
                label: "Birthday bonus",
                sub: "2× points on birthday",
                value: birthday,
                set: setBirthday,
              },
              {
                label: "Points expiry",
                sub: "12-month inactivity",
                value: expiry,
                set: setExpiry,
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="flex items-center justify-between py-2.5 border-b last:border-0"
                style={{ borderColor: C.divider }}
              >
                <div>
                  <p
                    className="text-[9px] font-bold"
                    style={{
                      color: C.text,
                      fontFamily: FONT.family,
                    }}
                  >
                    {feature.label}
                  </p>

                  <p
                    className="text-[8px] mt-0.5"
                    style={{
                      color: C.muted,
                      fontFamily: FONT.family,
                    }}
                  >
                    {feature.sub}
                  </p>
                </div>

                <Toggle
                  value={feature.value}
                  onClick={() => feature.set(!feature.value)}
                />
              </div>
            ))}
          </div>

          <button
            className="w-full py-2.5 rounded-full text-[10px] font-bold"
            style={{
              background: C.primary,
              color: "#fff",
              fontFamily: FONT.family,
            }}
          >
            Save changes
          </button>
        </div>
      </div>

      <AdminNav active={4} />
    </>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// FR5 — ADMIN: REPORTS
// ─────────────────────────────────────────────────────────────────────────────

function FR5Screen() {
  const [reportType, setReportType] = useState("Summary");

  const types = ["Summary", "Earned", "Redeemed", "Expired"];

  const bars = [
    { month: "Apr", val: 32 },
    { month: "May", val: 41 },
    { month: "Jun", val: 38 },
    { month: "Jul", val: 52 },
    { month: "Aug", val: 48 },
  ];

  const max = 52;

  const stats = [
    {
      label: "Total earned",
      value: "48,240",
      unit: "pts",
      color: C.success,
      icon: <ArrowUpRight size={11} />,
    },
    {
      label: "Total redeemed",
      value: "12,880",
      unit: "pts",
      color: C.primary,
      icon: <ArrowDownRight size={11} />,
    },
    {
      label: "Active members",
      value: "1,204",
      unit: "",
      color: C.primary,
      icon: <Users size={11} />,
    },
    {
      label: "Avg / member",
      value: "40.1",
      unit: "pts",
      color: "#7354A5",
      icon: <TrendingUp size={11} />,
    },
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
              Reports
            </p>

            <p
              className="text-[8px]"
              style={{
                color: C.muted,
                fontFamily: FONT.family,
              }}
            >
              Loyalty performance overview
            </p>
          </div>

          <div className="ml-auto flex gap-1">
            <button
              className="w-7 h-7 rounded-full flex items-center justify-center"
              style={{
                background: C.primarySoft,
                color: C.primary,
              }}
            >
              <FileDown size={11} />
            </button>

            <button
              className="w-7 h-7 rounded-full flex items-center justify-center"
              style={{
                background: C.primary,
                color: "#fff",
              }}
            >
              <Download size={11} />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-hidden px-3 py-2">
          <div className="flex gap-2 mb-2">
            {["Aug 1, 2026", "Aug 19, 2026"].map((date, i) => (
              <div
                key={i}
                className="flex-1 flex items-center gap-1.5 px-2.5 py-2 rounded-[12px]"
                style={{
                  background: C.surface,
                  border: `1px solid ${C.border}`,
                }}
              >
                <Calendar size={10} color={C.muted} />

                <span
                  className="text-[8px]"
                  style={{
                    color: C.text,
                    fontFamily: FONT.family,
                  }}
                >
                  {date}
                </span>
              </div>
            ))}
          </div>

          <div
            className="flex gap-1 p-1 rounded-full mb-2"
            style={{ background: "#E9E9ED" }}
          >
            {types.map((type) => (
              <button
                key={type}
                onClick={() => setReportType(type)}
                className="flex-1 py-1.5 rounded-full text-[7px] font-bold"
                style={{
                  background:
                    reportType === type ? C.surface : "transparent",
                  color:
                    reportType === type ? C.primary : C.muted,
                  boxShadow:
                    reportType === type
                      ? "0 2px 5px rgba(0,0,0,.06)"
                      : "none",
                  fontFamily: FONT.family,
                }}
              >
                {type}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-2 mb-2">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="rounded-[16px] p-2.5"
                style={{
                  background: C.surface,
                  border: `1px solid ${C.border}`,
                }}
              >
                <div
                  className="flex items-center gap-1"
                  style={{ color: stat.color }}
                >
                  {stat.icon}

                  <span
                    className="text-[7px]"
                    style={{
                      color: C.muted,
                      fontFamily: FONT.family,
                    }}
                  >
                    {stat.label}
                  </span>
                </div>

                <p
                  className="text-[14px] font-extrabold mt-1"
                  style={{
                    color: stat.color,
                    fontFamily: FONT.family,
                  }}
                >
                  {stat.value}
                  <span
                    className="text-[8px] ml-0.5"
                    style={{ color: C.muted }}
                  >
                    {stat.unit}
                  </span>
                </p>
              </div>
            ))}
          </div>

          <div
            className="rounded-[18px] p-3"
            style={{
              background: C.surface,
              border: `1px solid ${C.border}`,
            }}
          >
            <div className="flex items-center justify-between mb-3">
              <p
                className="text-[10px] font-bold"
                style={{
                  color: C.text,
                  fontFamily: FONT.family,
                }}
              >
                Monthly points earned
              </p>

              <span
                className="text-[7px]"
                style={{
                  color: C.muted,
                  fontFamily: FONT.family,
                }}
              >
                ×1,000 pts
              </span>
            </div>

            <div className="flex items-end gap-2 h-28">
              {bars.map((bar) => (
                <div
                  key={bar.month}
                  className="flex-1 flex flex-col items-center justify-end gap-1"
                >
                  <span
                    className="text-[7px]"
                    style={{
                      color: C.muted,
                      fontFamily: FONT.family,
                    }}
                  >
                    {bar.val}k
                  </span>

                  <div
                    className="w-full rounded-t-[7px]"
                    style={{
                      height: `${(bar.val / max) * 72}px`,
                      background:
                        bar.month === "Aug"
                          ? C.primary
                          : "#E9E9ED",
                    }}
                  />

                  <span
                    className="text-[7px] font-bold"
                    style={{
                      color:
                        bar.month === "Aug"
                          ? C.primary
                          : C.muted,
                      fontFamily: FONT.family,
                    }}
                  >
                    {bar.month}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div
            className="mt-2 rounded-[16px] p-3 flex items-center justify-between"
            style={{
              background: C.primarySoft,
            }}
          >
            <div>
              <p
                className="text-[9px] font-bold"
                style={{
                  color: C.primaryDark,
                  fontFamily: FONT.family,
                }}
              >
                Report ready
              </p>

              <p
                className="text-[7px] mt-0.5"
                style={{
                  color: C.textSoft,
                  fontFamily: FONT.family,
                }}
              >
                Aug 1 – Aug 19, 2026
              </p>
            </div>

            <button
              className="px-3 py-1.5 rounded-full text-[8px] font-bold"
              style={{
                background: C.primary,
                color: "#fff",
                fontFamily: FONT.family,
              }}
            >
              Export XLS
            </button>
          </div>
        </div>
      </div>

      <AdminNav active={3} />
    </>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// APP
// ─────────────────────────────────────────────────────────────────────────────

export default function App() {
  const screens = [
    {
      frId: "FR1",
      label: "Customer — View Points Balance",
      component: <FR1Screen />,
    },
    {
      frId: "FR2",
      label: "Customer — Redeem Points for Vouchers",
      component: <FR2Screen />,
    },
    {
      frId: "FR3",
      label: "Staff — Scan Customer QR Code",
      component: <FR3Screen />,
    },
    {
      frId: "FR4",
      label: "Admin — Manage Points Settings",
      component: <FR4Screen />,
    },
    {
      frId: "FR5",
      label: "Admin — Generate Reports",
      component: <FR5Screen />,
    },
  ];

  return (
    <div
      className="min-h-screen py-10 px-6"
      style={{
        background: "#ECECEF",
        ...FONT,
      }}
    >
      {/* Header */}
      <div className="text-center mb-10 max-w-2xl mx-auto">
        <div className="flex items-center justify-center mb-3">
          <Logo />
        </div>

        <h1
          className="mb-1 text-[20px] font-extrabold"
          style={{
            color: C.text,
            fontFamily: FONT.family,
          }}
        >
          Module 2: Loyalty Points Management
        </h1>

        <p
          className="text-sm"
          style={{
            color: C.muted,
            fontFamily: FONT.family,
          }}
        >
          UI Design — Five Functional Requirements
        </p>

        <div className="flex items-center justify-center gap-2 mt-4 flex-wrap">
          {[
            {
              role: "Customer",
              bg: C.primarySoft,
              color: C.primary,
            },
            {
              role: "Staff",
              bg: C.successSoft,
              color: C.success,
            },
            {
              role: "Admin",
              bg: "#F3EAF8",
              color: "#7354A5",
            },
          ].map((role) => (
            <span
              key={role.role}
              className="text-[9px] font-bold px-3 py-1.5 rounded-full"
              style={{
                background: role.bg,
                color: role.color,
                fontFamily: FONT.family,
              }}
            >
              {role.role}
            </span>
          ))}
        </div>
      </div>

      {/* Phone previews */}
      <div className="overflow-x-auto pb-5">
        <div className="flex gap-8 mx-auto w-fit px-4">
          {screens.map((screen) => (
            <Phone
              key={screen.frId}
              frId={screen.frId}
              label={screen.label}
            >
              {screen.component}
            </Phone>
          ))}
        </div>
      </div>

      {/* FR legend */}
      <div
        className="mt-10 max-w-2xl mx-auto rounded-[20px] overflow-hidden"
        style={{
          border: `1px solid ${C.border}`,
          background: C.surface,
          boxShadow: "0 8px 30px rgba(0,0,0,.04)",
        }}
      >
        <div
          className="px-5 py-4 border-b"
          style={{ borderColor: C.divider }}
        >
          <p
            className="text-[13px] font-extrabold"
            style={{
              color: C.text,
              fontFamily: FONT.family,
            }}
          >
            Functional Requirements
          </p>

          <p
            className="text-[9px] mt-1"
            style={{
              color: C.muted,
              fontFamily: FONT.family,
            }}
          >
            Loyalty Points Management module
          </p>
        </div>

        {[
          {
            id: "FR1",
            role: "Customer",
            desc: "View loyalty point balance through the mobile app",
          },
          {
            id: "FR2",
            role: "Customer",
            desc: "Redeem loyalty points for reward vouchers",
          },
          {
            id: "FR3",
            role: "Staff",
            desc: "Scan customer QR codes to collect and verify points",
          },
          {
            id: "FR4",
            role: "Admin",
            desc: "Manage loyalty point settings and tier rules",
          },
          {
            id: "FR5",
            role: "Admin",
            desc: "Generate loyalty point transaction reports",
          },
        ].map((req) => {
          const roleColor =
            req.role === "Customer"
              ? C.primary
              : req.role === "Staff"
                ? C.success
                : "#7354A5";

          const roleBg =
            req.role === "Customer"
              ? C.primarySoft
              : req.role === "Staff"
                ? C.successSoft
                : "#F3EAF8";

          return (
            <div
              key={req.id}
              className="flex items-start gap-3 px-5 py-3 border-b last:border-0"
              style={{ borderColor: C.divider }}
            >
              <span
                className="text-[9px] font-bold w-7 flex-shrink-0 mt-1"
                style={{
                  color: C.primary,
                  fontFamily: "Space Mono, monospace",
                }}
              >
                {req.id}
              </span>

              <span
                className="text-[7px] font-bold px-2 py-1 rounded-full flex-shrink-0"
                style={{
                  background: roleBg,
                  color: roleColor,
                  fontFamily: FONT.family,
                }}
              >
                {req.role.toUpperCase()}
              </span>

              <span
                className="text-[9px]"
                style={{
                  color: C.textSoft,
                  fontFamily: FONT.family,
                }}
              >
                {req.desc}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}