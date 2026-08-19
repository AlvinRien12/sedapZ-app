import { useState } from "react";
import { ChevronLeft, Lock, Eye, EyeOff, Check, Shield } from "lucide-react";
import { C, FONT } from "../../constants";
import { StatusBar } from "../../shared/StatusBar";

export function FR4SamePasswordRules() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [showPasswords, setShowPasswords] = useState(false);

  const requirements = [
    { label: "At least 8 characters", met: newPassword.length >= 8 },
    { label: "Contains uppercase letter", met: /[A-Z]/.test(newPassword) },
    { label: "Contains lowercase letter", met: /[a-z]/.test(newPassword) },
    { label: "Contains number", met: /\d/.test(newPassword) },
    { label: "Contains symbol (!@#$%^&*)", met: /[!@#$%^&*]/.test(newPassword) },
  ];

  const allMet = requirements.every((r) => r.met);

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
              Change Password
            </p>

            <p
              className="text-[8px]"
              style={{
                color: C.muted,
                fontFamily: FONT.family,
              }}
            >
              Same strong rules apply
            </p>
          </div>
        </div>

        <div className="flex-1 overflow-hidden px-4 py-6">
          {/* Progress */}
          <div className="flex gap-1.5 mb-6">
            {[1, 2, 3].map((step) => (
              <div
                key={step}
                className="flex-1 h-1.5 rounded-full"
                style={{
                  background: step === 3 ? C.primary : C.border,
                }}
              />
            ))}
          </div>

          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center"
              style={{ background: C.primarySoft }}
            >
              <Shield size={32} color={C.primary} />
            </div>
          </div>

          {/* Title */}
          <div className="text-center mb-6">
            <p
              className="text-[16px] font-extrabold"
              style={{ color: C.text, fontFamily: FONT.family }}
            >
              Update your password
            </p>
            <p
              className="text-[9px] mt-1"
              style={{ color: C.muted, fontFamily: FONT.family }}
            >
              Use the same strong password rules as registration
            </p>
          </div>

          {/* Current Password */}
          <div className="relative mb-3">
            <input
              type={showPasswords ? "text" : "password"}
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              placeholder="Current password"
              className="w-full px-4 py-3 pr-12 rounded-[14px] text-[12px] outline-none"
              style={{
                background: C.surface,
                border: `1px solid ${C.border}`,
                color: C.text,
                fontFamily: FONT.family,
              }}
            />
            <button
              onClick={() => setShowPasswords(!showPasswords)}
              className="absolute right-4 top-1/2 -translate-y-1/2"
            >
              {showPasswords ? (
                <EyeOff size={18} color={C.muted} />
              ) : (
                <Eye size={18} color={C.muted} />
              )}
            </button>
          </div>

          {/* New Password */}
          <div className="relative mb-3">
            <input
              type={showPasswords ? "text" : "password"}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="New password"
              className="w-full px-4 py-3 pr-12 rounded-[14px] text-[12px] outline-none"
              style={{
                background: C.surface,
                border: `2px solid ${allMet ? C.success : C.border}`,
                color: C.text,
                fontFamily: FONT.family,
              }}
            />
            <button
              onClick={() => setShowPasswords(!showPasswords)}
              className="absolute right-4 top-1/2 -translate-y-1/2"
            >
              {showPasswords ? (
                <EyeOff size={18} color={C.muted} />
              ) : (
                <Eye size={18} color={C.muted} />
              )}
            </button>
          </div>

          {/* Requirements */}
          <div
            className="rounded-[14px] p-4 mb-4"
            style={{ background: C.surface, border: `1px solid ${C.border}` }}
          >
            <div className="flex items-center gap-2 mb-3">
              <Lock size={14} color={C.primary} />
              <p
                className="text-[10px] font-bold"
                style={{ color: C.text, fontFamily: FONT.family }}
              >
                Password Requirements (Same as Registration)
              </p>
            </div>
            <div className="space-y-2">
              {requirements.map((req, i) => (
                <div key={i} className="flex items-center gap-2">
                  {req.met ? (
                    <Check size={14} color={C.success} />
                  ) : (
                    <div
                      className="w-3.5 h-3.5 rounded-full border-2"
                      style={{ borderColor: C.border }}
                    />
                  )}
                  <span
                    className="text-[9px]"
                    style={{
                      color: req.met ? C.success : C.muted,
                      fontFamily: FONT.family,
                    }}
                  >
                    {req.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <button
            disabled={!allMet || !currentPassword}
            className="w-full py-3 rounded-full text-[11px] font-bold"
            style={{
              background: allMet && currentPassword ? C.primary : C.disabled,
              color: allMet && currentPassword ? "#fff" : C.disabledText,
              fontFamily: FONT.family,
            }}
          >
            Update Password
          </button>
        </div>
      </div>
    </>
  );
}
