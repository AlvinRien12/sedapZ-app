import { useState } from "react";
import { ChevronLeft, ImagePlus, X, Paperclip } from "lucide-react";
import { C, FONT } from "../../constants";
import { StatusBar } from "../../shared/StatusBar";

export function FR4AttachScreenshots() {
  const [images, setImages] = useState<string[]>([]);

  const addImage = () => {
    setImages([...images, "screenshot"]);
  };

  const removeImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index));
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
              Add Attachments
            </p>

            <p
              className="text-[8px]"
              style={{
                color: C.muted,
                fontFamily: FONT.family,
              }}
            >
              Step 2 of 3 — Attach screenshots
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
                  background: step <= 2 ? C.primary : C.border,
                }}
              />
            ))}
          </div>

          {/* Title */}
          <div className="text-center mb-6">
            <p
              className="text-[16px] font-extrabold"
              style={{ color: C.text, fontFamily: FONT.family }}
            >
              Attach screenshots
            </p>
            <p
              className="text-[9px] mt-1"
              style={{ color: C.muted, fontFamily: FONT.family }}
            >
              Help us understand the issue better
            </p>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-3 gap-2 mb-4">
            {images.map((img, i) => (
              <div
                key={i}
                className="relative aspect-square rounded-[12px] overflow-hidden"
                style={{
                  background: C.primarySoft,
                  border: `1px solid ${C.border}`,
                }}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <ImagePlus size={24} color={C.primary} />
                </div>
                <button
                  onClick={() => removeImage(i)}
                  className="absolute top-1 right-1 w-5 h-5 rounded-full flex items-center justify-center"
                  style={{ background: C.surface }}
                >
                  <X size={10} color={C.text} />
                </button>
              </div>
            ))}

            {images.length < 4 && (
              <button
                onClick={addImage}
                className="aspect-square rounded-[12px] flex flex-col items-center justify-center gap-1"
                style={{
                  background: C.bg,
                  border: `2px dashed ${C.border}`,
                }}
              >
                <ImagePlus size={20} color={C.muted} />
                <span
                  className="text-[7px]"
                  style={{ color: C.muted, fontFamily: FONT.family }}
                >
                  Add Photo
                </span>
              </button>
            )}
          </div>

          {/* File Upload */}
          <button
            className="w-full py-3 rounded-[14px] flex items-center justify-center gap-2 mb-4"
            style={{
              background: C.surface,
              border: `1px solid ${C.border}`,
            }}
          >
            <Paperclip size={16} color={C.primary} />
            <span
              className="text-[10px] font-bold"
              style={{ color: C.primary, fontFamily: FONT.family }}
            >
              Attach from Files
            </span>
          </button>

          {/* Info */}
          <div
            className="p-3 rounded-[12px]"
            style={{ background: C.primaryWash, border: `1px solid #F3D4DA` }}
          >
            <p
              className="text-[8px]"
              style={{ color: C.primaryDark, fontFamily: FONT.family }}
            >
              You can attach up to 4 images. Supported formats: JPG, PNG, PDF.
              Max size: 5MB per file.
            </p>
          </div>

          <button
            disabled={images.length === 0}
            className="w-full py-3 rounded-full mt-4 text-[11px] font-bold"
            style={{
              background: images.length > 0 ? C.primary : C.disabled,
              color: images.length > 0 ? "#fff" : C.disabledText,
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
