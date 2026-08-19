import { useState } from "react";
import { ChevronLeft, Lock, Eye, EyeOff, Check, X } from "lucide-react";
import { C, FONT } from "../../constants";
import { StatusBar } from "../../shared/StatusBar";

export function FR3StrongPassword() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const requirements = [
    { label: "At least 8 characters", met: password.length >= 8 },
    { label: "Contains uppercase letter", met: /[A-Z]/.test(password) },
    { label: "Contains lowercase letter", met: /[a-z]/.test(password) },
    { label: "Contains number", met: /\d/.test(password) },
    { label: "Contains symbol (!@#$%^&*)", met: /[!@#$%^&*]/.test(password) },
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
              Create Password
            </p>

            <p
              className="text-[8px]"
              style={{
                color: C.muted,
                fontFamily: FONT.family,
              }}
            >
              Step 2 of 3 — Secure your account
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
                  background: step <= 2 ? C.primary : C.border,
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
              <Lock size={32} color={C.primary} />
            </div>
          </div>

          {/* Title */}
          <div className="text-center mb-6">
            <p
              className="text-[16px] font-extrabold"
              style={{ color: C.text, fontFamily: FONT.family }}
            >
              Create a strong password
            </p>
            <p
              className="text-[9px] mt-1"
              style={{ color: C.muted, fontFamily: FONT.family }}
            >
              Your password must meet all requirements below
            </p>
          </div>

          {/* Password Input */}
          <div className="relative mb-4">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-4 py-3 pr-12 rounded-[14px] text-[12px] outline-none"
              style={{
                background: C.surface,
                border: `2px solid ${allMet ? C.success : C.border}`,
                color: C.text,
                fontFamily: FONT.family,
              }}
            />
            <button
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2"
            >
              {showPassword ? (
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
            <p
              className="text-[10px] font-bold mb-3"
              style={{ color: C.text, fontFamily: FONT.family }}
            >
              Password Requirements
            </p>
            <div className="space-y-2">
              {requirements.map((req, i) => (
                <div key={i} className="flex items-center gap-2">
                  {req.met ? (
                    <Check size={14} color={C.success} />
                  ) : (
                    <X size={14} color={C.muted} />
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

          {/* Strength Meter */}
          <div className="mb-4">
            <div className="flex gap-1 mb-1">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="flex-1 h-2 rounded-full"
                  style={{
                    background:
                      i <= requirements.filter((r) => r.met).length
                        ? requirements.filter((r) => r.met).length >= 4
                          ? C.success
                          : C.warning
                        : C.border,
                  }}
                />
              ))}
            </div>
            <p
              className="text-[8px] text-right"
              style={{
                color:
                  requirements.filter((r) => r.met).length >= 4
                    ? C.success
                    : C.warning,
                fontFamily: FONT.family,
              }}
            >
              {requirements.filter((r) => r.met).length >= 4
                ? "Strong password"
                : "Weak password — add more requirements"}
            </p>
          </div>

          <button
            disabled={!allMet}
            className="w-full py-3 rounded-full text-[11px] font-bold"
            style={{
              background: allMet ? C.primary : C.disabled,
              color: allMet ? "#fff" : C.disabledText,
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
