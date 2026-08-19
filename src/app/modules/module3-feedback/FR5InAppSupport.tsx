import { useState } from "react";
import { ChevronLeft, MessageCircle, Send, Phone, Mail, Clock } from "lucide-react";
import { C, FONT } from "../../constants";
import { StatusBar } from "../../shared/StatusBar";
import { Logo } from "../../shared/Logo";

export function FR5InAppSupport() {
  const [messages, setMessages] = useState([
    { from: "support", text: "Hello! How can I help you today?", time: "10:30 AM" },
  ]);
  const [input, setInput] = useState("");
  const [showOptions, setShowOptions] = useState(true);

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([
      ...messages,
      { from: "user", text: input, time: "Now" },
    ]);
    setInput("");
    setShowOptions(false);
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

          <div className="flex items-center gap-2">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center"
              style={{ background: C.primarySoft }}
            >
              <MessageCircle size={16} color={C.primary} />
            </div>
            <div>
              <p
                className="text-[12px] font-extrabold"
                style={{
                  color: C.text,
                  fontFamily: FONT.family,
                }}
              >
                Support Chat
              </p>
              <p
                className="text-[7px]"
                style={{
                  color: C.success,
                  fontFamily: FONT.family,
                }}
              >
                Online · Avg. reply 2 min
              </p>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-hidden px-3 py-2">
          {showOptions && (
            <div className="text-center py-6">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3"
                style={{ background: C.primarySoft }}
              >
                <MessageCircle size={32} color={C.primary} />
              </div>
              <p
                className="text-[14px] font-extrabold mb-1"
                style={{ color: C.text, fontFamily: FONT.family }}
              >
                How can we help?
              </p>
              <p
                className="text-[9px] mb-4"
                style={{ color: C.muted, fontFamily: FONT.family }}
              >
                Choose a quick option or start typing
              </p>

              <div className="space-y-2">
                <button
                  onClick={() => setShowOptions(false)}
                  className="w-full p-3 rounded-[14px] flex items-center gap-3 text-left"
                  style={{
                    background: C.surface,
                    border: `1px solid ${C.border}`,
                  }}
                >
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center"
                    style={{ background: C.primarySoft }}
                  >
                    <MessageCircle size={14} color={C.primary} />
                  </div>
                  <div>
                    <p
                      className="text-[10px] font-bold"
                      style={{ color: C.text, fontFamily: FONT.family }}
                    >
                      Chat with Support
                    </p>
                    <p
                      className="text-[7px]"
                      style={{ color: C.muted, fontFamily: FONT.family }}
                    >
                      Instant messaging with our team
                    </p>
                  </div>
                </button>

                <button
                  onClick={() => setShowOptions(false)}
                  className="w-full p-3 rounded-[14px] flex items-center gap-3 text-left"
                  style={{
                    background: C.surface,
                    border: `1px solid ${C.border}`,
                  }}
                >
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center"
                    style={{ background: C.successSoft }}
                  >
                    <Phone size={14} color={C.success} />
                  </div>
                  <div>
                    <p
                      className="text-[10px] font-bold"
                      style={{ color: C.text, fontFamily: FONT.family }}
                    >
                      Call Support
                    </p>
                    <p
                      className="text-[7px]"
                      style={{ color: C.muted, fontFamily: FONT.family }}
                    >
                      Speak directly with an agent
                    </p>
                  </div>
                </button>

                <button
                  onClick={() => setShowOptions(false)}
                  className="w-full p-3 rounded-[14px] flex items-center gap-3 text-left"
                  style={{
                    background: C.surface,
                    border: `1px solid ${C.border}`,
                  }}
                >
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center"
                    style={{ background: C.primaryWash }}
                  >
                    <Mail size={14} color={C.primary} />
                  </div>
                  <div>
                    <p
                      className="text-[10px] font-bold"
                      style={{ color: C.text, fontFamily: FONT.family }}
                    >
                      Email Support
                    </p>
                    <p
                      className="text-[7px]"
                      style={{ color: C.muted, fontFamily: FONT.family }}
                    >
                      Send us an email anytime
                    </p>
                  </div>
                </button>
              </div>
            </div>
          )}

          {/* Chat Messages */}
          {!showOptions && (
            <div className="space-y-2 mb-3">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className="max-w-[80%] p-2.5 rounded-[14px]"
                    style={{
                      background: msg.from === "user" ? C.primary : C.surface,
                      color: msg.from === "user" ? "#fff" : C.text,
                      border: msg.from === "user" ? "none" : `1px solid ${C.border}`,
                    }}
                  >
                    <p
                      className="text-[9px]"
                      style={{ fontFamily: FONT.family }}
                    >
                      {msg.text}
                    </p>
                    <p
                      className="text-[7px] mt-1"
                      style={{
                        color: msg.from === "user" ? "rgba(255,255,255,.6)" : C.muted,
                        fontFamily: FONT.family,
                      }}
                    >
                      {msg.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Input */}
          {!showOptions && (
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2.5 rounded-full text-[10px] outline-none"
                style={{
                  background: C.surface,
                  border: `1px solid ${C.border}`,
                  color: C.text,
                  fontFamily: FONT.family,
                }}
              />
              <button
                onClick={sendMessage}
                className="w-9 h-9 rounded-full flex items-center justify-center"
                style={{ background: C.primary }}
              >
                <Send size={14} color="#fff" />
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
