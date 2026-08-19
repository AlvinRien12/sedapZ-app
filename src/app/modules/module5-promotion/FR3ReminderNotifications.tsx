import { useState } from "react";
import { ChevronLeft, Bell, BellOff, Clock, Check } from "lucide-react";
import { C, FONT } from "../../constants";
import { StatusBar } from "../../shared/StatusBar";
import { Logo } from "../../shared/Logo";

export function FR3ReminderNotifications() {
  const [notifications, setNotifications] = useState([
    { id: 1, title: "Voucher expiring soon", desc: "Your 20% off voucher expires in 2 days", time: "2h ago", enabled: true },
    { id: 2, title: "New promotion available", desc: "Check out new deals just for you", time: "1d ago", enabled: true },
    { id: 3, title: "Points reminder", desc: "You have 500 points waiting to be redeemed", time: "3d ago", enabled: false },
  ]);

  const toggleNotification = (id: number) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, enabled: !n.enabled } : n))
    );
  };

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
              Notifications
            </p>

            <p
              className="text-[8px]"
              style={{
                color: C.muted,
                fontFamily: FONT.family,
              }}
            >
              Manage your reminder preferences
            </p>
          </div>
        </div>

        <div className="flex-1 overflow-hidden px-3 py-2">
          {/* Banner */}
          <div
            className="p-2.5 rounded-[12px] mb-2 flex items-center gap-2"
            style={{
              background: C.primaryWash,
              border: `1px solid #F3D4DA`,
            }}
          >
            <Bell size={14} color={C.primary} />
            <p
              className="text-[7px]"
              style={{ color: C.primaryDark, fontFamily: FONT.family }}
            >
              Get reminded before vouchers expire and when new promotions drop.
            </p>
          </div>

          {/* Notification List */}
          <div
            className="rounded-[14px] overflow-hidden"
            style={{
              background: C.surface,
              border: `1px solid ${C.border}`,
            }}
          >
            {notifications.map((notif, i) => (
              <div
                key={notif.id}
                className="flex items-center gap-2 px-2.5 py-2.5 border-b last:border-0"
                style={{ borderColor: C.divider }}
              >
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{
                    background: notif.enabled ? C.primarySoft : C.bg,
                  }}
                >
                  {notif.enabled ? (
                    <Bell size={14} color={C.primary} />
                  ) : (
                    <BellOff size={14} color={C.muted} />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p
                    className="text-[9px] font-bold"
                    style={{ color: C.text, fontFamily: FONT.family }}
                  >
                    {notif.title}
                  </p>
                  <p
                    className="text-[7px] truncate"
                    style={{ color: C.muted, fontFamily: FONT.family }}
                  >
                    {notif.desc}
                  </p>
                  <div className="flex items-center gap-1 mt-0.5">
                    <Clock size={6} color={C.muted} />
                    <span
                      className="text-[6px]"
                      style={{ color: C.muted, fontFamily: FONT.family }}
                    >
                      {notif.time}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => toggleNotification(notif.id)}
                  className="w-8 h-5 rounded-full flex items-center px-0.5 flex-shrink-0"
                  style={{
                    background: notif.enabled ? C.primary : C.border,
                    justifyContent: notif.enabled ? "flex-end" : "flex-start",
                  }}
                >
                  <div
                    className="w-4 h-4 rounded-full bg-white shadow-sm flex items-center justify-center"
                    style={{ boxShadow: "0 1px 2px rgba(0,0,0,.1)" }}
                  >
                    {notif.enabled && <Check size={8} color={C.primary} />}
                  </div>
                </button>
              </div>
            ))}
          </div>

          <p
            className="text-[7px] text-center mt-3"
            style={{ color: C.muted, fontFamily: FONT.family }}
          >
            Notifications are sent via push and email
          </p>
        </div>
      </div>
    </>
  );
}
