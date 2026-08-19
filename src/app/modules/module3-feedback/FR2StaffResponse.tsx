import { useState } from "react";
import { ChevronLeft, Send, Clock, CheckCircle } from "lucide-react";
import { C, FONT } from "../../constants";
import { StatusBar } from "../../shared/StatusBar";

export function FR2StaffResponse() {
  const [response, setResponse] = useState("");
  const [sent, setSent] = useState(false);

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
              Respond to Feedback
            </p>

            <p
              className="text-[8px]"
              style={{
                color: C.muted,
                fontFamily: FONT.family,
              }}
            >
              FB-002 · App crashes on checkout
            </p>
          </div>
        </div>

        <div className="flex-1 overflow-hidden px-3 py-2">
          {/* Customer Message */}
          <div
            className="rounded-[16px] p-3 mb-3"
            style={{
              background: C.surface,
              border: `1px solid ${C.border}`,
            }}
          >
            <div className="flex items-center gap-2 mb-2">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{ background: C.primarySoft }}
              >
                <span
                  className="text-[10px] font-bold"
                  style={{ color: C.primary, fontFamily: FONT.family }}
                >
                  AH
                </span>
              </div>
              <div>
                <p
                  className="text-[10px] font-bold"
                  style={{ color: C.text, fontFamily: FONT.family }}
                >
                  Amirul Hadi
                </p>
                <p
                  className="text-[7px]"
                  style={{ color: C.muted, fontFamily: FONT.family }}
                >
                  Customer · 2 hours ago
                </p>
              </div>
            </div>
            <p
              className="text-[10px] leading-relaxed"
              style={{ color: C.textSoft, fontFamily: FONT.family }}
            >
              The app crashes every time I try to checkout. I've tried
              restarting but it still happens. Please fix this issue ASAP.
            </p>
          </div>

          {/* SLA Timer */}
          <div
            className="flex items-center gap-2 p-2.5 rounded-[12px] mb-3"
            style={{ background: C.warningSoft, border: `1px solid #FDE8C8` }}
          >
            <Clock size={14} color={C.warning} />
            <div>
              <p
                className="text-[8px] font-bold"
                style={{ color: C.warning, fontFamily: FONT.family }}
              >
                Response SLA: 24 hours
              </p>
              <p
                className="text-[7px]"
                style={{ color: C.textSoft, fontFamily: FONT.family }}
              >
                18 hours remaining
              </p>
            </div>
          </div>

          {/* Response Input */}
          <div
            className="rounded-[16px] p-3"
            style={{
              background: C.surface,
              border: `1px solid ${C.border}`,
            }}
          >
            <p
              className="text-[10px] font-bold mb-2"
              style={{ color: C.text, fontFamily: FONT.family }}
            >
              Your Response
            </p>
            <textarea
              value={response}
              onChange={(e) => setResponse(e.target.value)}
              placeholder="Type your response to the customer..."
              rows={4}
              className="w-full px-3 py-2 rounded-[12px] text-[10px] outline-none resize-none"
              style={{
                background: C.bg,
                border: `1px solid ${C.border}`,
                color: C.text,
                fontFamily: FONT.family,
              }}
            />
            <div className="flex items-center justify-between mt-2">
              <span
                className="text-[7px]"
                style={{ color: C.muted, fontFamily: FONT.family }}
              >
                Be helpful and professional
              </span>
              <button
                onClick={() => setSent(true)}
                disabled={!response.trim()}
                className="flex items-center gap-1 px-4 py-2 rounded-full text-[9px] font-bold"
                style={{
                  background: response.trim() ? C.primary : C.disabled,
                  color: response.trim() ? "#fff" : C.disabledText,
                  fontFamily: FONT.family,
                }}
              >
                <Send size={10} />
                Send
              </button>
            </div>
          </div>

          {sent && (
            <div
              className="flex items-center gap-2 p-3 rounded-[12px] mt-3"
              style={{ background: C.successSoft }}
            >
              <CheckCircle size={16} color={C.success} />
              <p
                className="text-[9px] font-bold"
                style={{ color: C.success, fontFamily: FONT.family }}
              >
                Response sent successfully!
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
