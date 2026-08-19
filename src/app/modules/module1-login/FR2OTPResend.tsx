import { useState } from "react";
import { ChevronLeft, RefreshCw, CheckCircle } from "lucide-react";
import { C, FONT } from "../../constants";
import { StatusBar } from "../../shared/StatusBar";
import { Logo } from "../../shared/Logo";

export function FR2OTPResend() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [resendCount, setResendCount] = useState(0);
  const [verified, setVerified] = useState(false);

  const handleResend = () => {
    setResendCount((c) => c + 1);
    setOtp(["", "", "", "", "", ""]);
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
              Verify Email
            </p>

            <p
              className="text-[8px]"
              style={{
                color: C.muted,
                fontFamily: FONT.family,
              }}
            >
              Step 2 of 3 — Enter OTP code
            </p>
          </div>
        </div>

        <div className="flex-1 overflow-hidden px-4 py-6">
          {!verified ? (
            <>
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{ background: C.primarySoft }}
                >
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={C.primary} strokeWidth="2">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                </div>
              </div>

              {/* Title */}
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
                  We sent a 6-digit code to<br />
                  <span style={{ color: C.primary }}>haziq@email.com</span>
                </p>
              </div>

              {/* OTP Input */}
              <div className="flex justify-center gap-1.5 mb-6">
                {otp.map((digit, i) => (
                  <input
                    key={i}
                    type="text"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => {
                      const newOtp = [...otp];
                      newOtp[i] = e.target.value.replace(/\D/, "");
                      setOtp(newOtp);
                    }}
                    className="w-8 h-10 rounded-[10px] text-center text-[14px] font-bold outline-none"
                    style={{
                      background: C.surface,
                      border: `2px solid ${digit ? C.primary : C.border}`,
                      color: C.text,
                      fontFamily: FONT.family,
                    }}
                  />
                ))}
              </div>

              {/* Resend */}
              <div className="text-center mb-6">
                <button
                  onClick={handleResend}
                  className="flex items-center gap-1.5 mx-auto text-[9px] font-bold"
                  style={{ color: C.primary, fontFamily: FONT.family }}
                >
                  <RefreshCw size={12} />
                  Resend OTP {resendCount > 0 && `(${resendCount})`}
                </button>
                <p
                  className="text-[7px] mt-1"
                  style={{ color: C.muted, fontFamily: FONT.family }}
                >
                  Didn't receive it? Check spam folder
                </p>
              </div>

              {/* Timer */}
              <div
                className="p-3 rounded-[12px] mb-4"
                style={{ background: C.primaryWash, border: `1px solid #F3D4DA` }}
              >
                <p
                  className="text-[8px] text-center"
                  style={{ color: C.primaryDark, fontFamily: FONT.family }}
                >
                  Code expires in <span className="font-extrabold">04:32</span>
                </p>
              </div>

              <button
                onClick={() => setVerified(true)}
                className="w-full py-3 rounded-full text-[11px] font-bold"
                style={{
                  background: C.primary,
                  color: "#fff",
                  fontFamily: FONT.family,
                }}
              >
                Verify & Continue
              </button>
            </>
          ) : (
            /* Success State */
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
                Email Verified!
              </p>
              <p
                className="text-[9px] mt-1"
                style={{ color: C.muted, fontFamily: FONT.family }}
              >
                Your account has been verified successfully
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
