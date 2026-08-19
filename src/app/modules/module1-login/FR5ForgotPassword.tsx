import { useState } from "react";
import { ChevronLeft, Mail, KeyRound, CheckCircle } from "lucide-react";
import { C, FONT } from "../../constants";
import { StatusBar } from "../../shared/StatusBar";
import { Logo } from "../../shared/Logo";

export function FR5ForgotPassword() {
  const [step, setStep] = useState<"email" | "otp" | "reset" | "success">("email");
  const [email, setEmail] = useState("");

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
              Forgot Password
            </p>

            <p
              className="text-[8px]"
              style={{
                color: C.muted,
                fontFamily: FONT.family,
              }}
            >
              Reset your account password
            </p>
          </div>
        </div>

        <div className="flex-1 overflow-hidden px-4 py-6">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <Logo />
          </div>

          {step === "email" && (
            <>
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{ background: C.primarySoft }}
                >
                  <Mail size={32} color={C.primary} />
                </div>
              </div>

              {/* Title */}
              <div className="text-center mb-6">
                <p
                  className="text-[16px] font-extrabold"
                  style={{ color: C.text, fontFamily: FONT.family }}
                >
                  Forgot your password?
                </p>
                <p
                  className="text-[9px] mt-1"
                  style={{ color: C.muted, fontFamily: FONT.family }}
                >
                  No worries! Enter your email and we'll send you
                  <br />
                  a reset link.
                </p>
              </div>

              {/* Email Input */}
              <div className="relative mb-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your registered email"
                  className="w-full px-4 py-3 rounded-[14px] text-[12px] outline-none"
                  style={{
                    background: C.surface,
                    border: `1px solid ${C.border}`,
                    color: C.text,
                    fontFamily: FONT.family,
                  }}
                />
                <Mail
                  size={18}
                  color={C.muted}
                  className="absolute right-4 top-1/2 -translate-y-1/2"
                />
              </div>

              <button
                onClick={() => setStep("otp")}
                className="w-full py-3 rounded-full text-[11px] font-bold"
                style={{
                  background: C.primary,
                  color: "#fff",
                  fontFamily: FONT.family,
                }}
              >
                Send Reset Link
              </button>
            </>
          )}

          {step === "otp" && (
            <>
              <div className="flex justify-center mb-6">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{ background: C.successSoft }}
                >
                  <KeyRound size={32} color={C.success} />
                </div>
              </div>

              <div className="text-center mb-6">
                <p
                  className="text-[16px] font-extrabold"
                  style={{ color: C.text, fontFamily: FONT.family }}
                >
                  Check your email
                </p>
                <p
                  className="text-[9px] mt-1"
                  style={{ color: C.muted, fontFamily: FONT.family }}
                >
                  Enter the 6-digit code sent to<br />
                  <span style={{ color: C.primary }}>{email || "your email"}</span>
                </p>
              </div>

              {/* OTP Inputs */}
              <div className="flex justify-center gap-2 mb-6">
                {[0, 1, 2, 3, 4, 5].map((i) => (
                  <input
                    key={i}
                    type="text"
                    maxLength={1}
                    className="w-10 h-12 rounded-[12px] text-center text-[16px] font-bold outline-none"
                    style={{
                      background: C.surface,
                      border: `2px solid ${C.border}`,
                      color: C.text,
                      fontFamily: FONT.family,
                    }}
                  />
                ))}
              </div>

              <button
                onClick={() => setStep("reset")}
                className="w-full py-3 rounded-full text-[11px] font-bold"
                style={{
                  background: C.primary,
                  color: "#fff",
                  fontFamily: FONT.family,
                }}
              >
                Verify Code
              </button>
            </>
          )}

          {step === "reset" && (
            <>
              <div className="flex justify-center mb-6">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{ background: C.primarySoft }}
                >
                  <KeyRound size={32} color={C.primary} />
                </div>
              </div>

              <div className="text-center mb-6">
                <p
                  className="text-[16px] font-extrabold"
                  style={{ color: C.text, fontFamily: FONT.family }}
                >
                  Create new password
                </p>
                <p
                  className="text-[9px] mt-1"
                  style={{ color: C.muted, fontFamily: FONT.family }}
                >
                  Enter a strong password for your account
                </p>
              </div>

              <div className="relative mb-3">
                <input
                  type="password"
                  placeholder="New password"
                  className="w-full px-4 py-3 rounded-[14px] text-[12px] outline-none"
                  style={{
                    background: C.surface,
                    border: `1px solid ${C.border}`,
                    color: C.text,
                    fontFamily: FONT.family,
                  }}
                />
              </div>

              <div className="relative mb-4">
                <input
                  type="password"
                  placeholder="Confirm new password"
                  className="w-full px-4 py-3 rounded-[14px] text-[12px] outline-none"
                  style={{
                    background: C.surface,
                    border: `1px solid ${C.border}`,
                    color: C.text,
                    fontFamily: FONT.family,
                  }}
                />
              </div>

              <button
                onClick={() => setStep("success")}
                className="w-full py-3 rounded-full text-[11px] font-bold"
                style={{
                  background: C.primary,
                  color: "#fff",
                  fontFamily: FONT.family,
                }}
              >
                Reset Password
              </button>
            </>
          )}

          {step === "success" && (
            <div className="flex flex-col items-center justify-center h-full">
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center mb-4"
                style={{ background: C.successSoft }}
              >
                <CheckCircle size={40} color={C.success} />
              </div>
              <p
                className="text-[16px] font-extrabold"
                style={{ color: C.text, fontFamily: FONT.family }}
              >
                Password Reset!
              </p>
              <p
                className="text-[9px] mt-1"
                style={{ color: C.muted, fontFamily: FONT.family }}
              >
                Your password has been updated successfully.
                <br />
                You can now log in with your new password.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
