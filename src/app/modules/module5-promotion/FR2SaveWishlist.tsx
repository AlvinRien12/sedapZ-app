import { useState } from "react";
import { ChevronLeft, Heart, Star, Check } from "lucide-react";
import { C, FONT } from "../../constants";
import { StatusBar } from "../../shared/StatusBar";

export function FR2SaveWishlist() {
  const [saved, setSaved] = useState<number[]>([]);

  const vouchers = [
    { id: 1, name: "50% Off Nasi Lemak", pts: 80, expires: "2 days" },
    { id: 2, name: "Free Teh Tarik", pts: 50, expires: "5 days" },
    { id: 3, name: "RM10 Voucher", pts: 100, expires: "1 week" },
    { id: 4, name: "Free Dessert", pts: 60, expires: "3 days" },
  ];

  const toggleSave = (id: number) => {
    setSaved((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
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
              My Wishlist
            </p>

            <p
              className="text-[8px]"
              style={{
                color: C.muted,
                fontFamily: FONT.family,
              }}
            >
              {saved.length} vouchers saved
            </p>
          </div>
        </div>

        <div className="flex-1 overflow-hidden px-3 py-2">
          <div className="grid grid-cols-2 gap-2">
            {vouchers.map((voucher) => {
              const isSaved = saved.includes(voucher.id);
              return (
                <div
                  key={voucher.id}
                  className="p-3 rounded-[14px]"
                  style={{
                    background: C.surface,
                    border: `1px solid ${isSaved ? C.primary : C.border}`,
                  }}
                >
                  <div
                    className="w-full h-16 rounded-[10px] mb-2 flex items-center justify-center"
                    style={{ background: C.primarySoft }}
                  >
                    <Star size={24} color={C.primary} fill={C.primary} />
                  </div>
                  <p
                    className="text-[10px] font-bold leading-tight"
                    style={{ color: C.text, fontFamily: FONT.family }}
                  >
                    {voucher.name}
                  </p>
                  <div className="flex items-center justify-between mt-1.5">
                    <span
                      className="text-[9px] font-extrabold"
                      style={{ color: C.primary, fontFamily: FONT.family }}
                    >
                      {voucher.pts} pts
                    </span>
                    <button
                      onClick={() => toggleSave(voucher.id)}
                      className="w-7 h-7 rounded-full flex items-center justify-center"
                      style={{
                        background: isSaved ? C.primary : C.bg,
                        border: `1px solid ${isSaved ? C.primary : C.border}`,
                      }}
                    >
                      {isSaved ? (
                        <Check size={12} color="#fff" />
                      ) : (
                        <Heart size={12} color={C.muted} />
                      )}
                    </button>
                  </div>
                  <p
                    className="text-[7px] mt-1"
                    style={{ color: C.muted, fontFamily: FONT.family }}
                  >
                    Expires in {voucher.expires}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
