import { useState } from "react";
import { ChevronLeft, User, Lock, Eye, EyeOff } from "lucide-react";
import { C, FONT } from "../../constants";
import { StatusBar } from "../../shared/StatusBar";
import { Logo } from "../../shared/Logo";

export function FR1NameRegistration() {
  const [name, setName] = useState("");
  const [showPassword, setShowPassword] = useState(false);

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
              Create Account
            </p>

            <p
              className="text-[8px]"
              style={{
                color: C.muted,
                fontFamily: FONT.family,
              }}
            >
              Step 1 of 3 — Enter your details
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

          {/* Avatar */}
          <div className="flex justify-center mb-6">
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center"
              style={{
                background: C.primarySoft,
                border: `2px dashed ${C.primary}`,
              }}
            >
              <User size={32} color={C.primary} />
            </div>
          </div>

          {/* Form */}
          <div className="space-y-3">
            <div>
              <label
                className="text-[9px] font-bold mb-1.5 block"
                style={{ color: C.text, fontFamily: FONT.family }}
              >
                Full Name <span style={{ color: C.primary }}>*</span>
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your full name"
                className="w-full px-3 py-2.5 rounded-[12px] text-[11px] outline-none"
                style={{
                  background: C.surface,
                  border: `1px solid ${C.border}`,
                  color: C.text,
                  fontFamily: FONT.family,
                }}
              />
            </div>

            <div>
              <label
                className="text-[9px] font-bold mb-1.5 block"
                style={{ color: C.text, fontFamily: FONT.family }}
              >
                Email Address <span style={{ color: C.primary }}>*</span>
              </label>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full px-3 py-2.5 rounded-[12px] text-[11px] outline-none"
                style={{
                  background: C.surface,
                  border: `1px solid ${C.border}`,
                  color: C.text,
                  fontFamily: FONT.family,
                }}
              />
            </div>

            <div>
              <label
                className="text-[9px] font-bold mb-1.5 block"
                style={{ color: C.text, fontFamily: FONT.family }}
              >
                Password <span style={{ color: C.primary }}>*</span>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Min. 8 characters"
                  className="w-full px-3 py-2.5 pr-10 rounded-[12px] text-[11px] outline-none"
                  style={{
                    background: C.surface,
                    border: `1px solid ${C.border}`,
                    color: C.text,
                    fontFamily: FONT.family,
                  }}
                />
                <button
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                >
                  {showPassword ? (
                    <EyeOff size={14} color={C.muted} />
                  ) : (
                    <Eye size={14} color={C.muted} />
                  )}
                </button>
              </div>
              <p
                className="text-[7px] mt-1"
                style={{ color: C.muted, fontFamily: FONT.family }}
              >
                Must contain letters, numbers & symbols
              </p>
            </div>
          </div>

          {/* Password strength */}
          <div className="mt-4 p-3 rounded-[12px]" style={{ background: C.bg }}>
            <p
              className="text-[8px] font-bold mb-2"
              style={{ color: C.text, fontFamily: FONT.family }}
            >
              Password Strength
            </p>
            <div className="flex gap-1">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="flex-1 h-1 rounded-full"
                  style={{
                    background: i <= 2 ? C.primary : C.border,
                  }}
                />
              ))}
            </div>
            <p
              className="text-[7px] mt-1"
              style={{ color: C.warning, fontFamily: FONT.family }}
            >
              Medium — Add symbols for stronger password
            </p>
          </div>

          <button
            className="w-full py-3 rounded-full mt-4 text-[11px] font-bold"
            style={{
              background: C.primary,
              color: "#fff",
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
