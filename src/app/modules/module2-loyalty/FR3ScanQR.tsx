import { useState } from "react";
import {
  QrCode,
  User,
  Check,
  CircleDollarSign,
} from "lucide-react";
import { C, FONT } from "../../constants";
import { StatusBar } from "../../shared/StatusBar";
import { Logo } from "../../shared/Logo";
import { StaffNav } from "../../shared/StaffNav";

export function FR3ScanQR() {
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
