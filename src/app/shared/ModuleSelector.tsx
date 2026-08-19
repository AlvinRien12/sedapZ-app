import { C, FONT } from "../constants";
import { Logo } from "./Logo";

interface ModuleInfo {
  id: string;
  name: string;
  student: string;
  purpose: string;
  roles: string[];
  color: string;
  bg: string;
}

interface ModuleSelectorProps {
  modules: ModuleInfo[];
  onSelect: (moduleId: string) => void;
}

export function ModuleSelector({ modules, onSelect }: ModuleSelectorProps) {
  const roleColors: Record<string, { bg: string; color: string }> = {
    Customer: { bg: C.primarySoft, color: C.primary },
    Staff: { bg: C.successSoft, color: C.success },
    Admin: { bg: "#F3EAF8", color: "#7354A5" },
  };

  return (
    <div
      className="min-h-screen py-10 px-6"
      style={{
        background: "#ECECEF",
        ...FONT,
      }}
    >
      {/* Header */}
      <div className="text-center mb-10 max-w-2xl mx-auto">
        <div className="flex items-center justify-center mb-3">
          <Logo />
        </div>

        <h1
          className="mb-1 text-[20px] font-extrabold"
          style={{
            color: C.text,
            fontFamily: FONT.family,
          }}
        >
          SedapZ Loyalty System
        </h1>

        <p
          className="text-sm"
          style={{
            color: C.muted,
            fontFamily: FONT.family,
          }}
        >
          Select a module to view its functional requirements
        </p>
      </div>

      {/* Module Grid */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {modules.map((mod) => (
          <button
            key={mod.id}
            onClick={() => onSelect(mod.id)}
            className="text-left p-5 rounded-[20px] transition-all hover:scale-[1.02]"
            style={{
              background: C.surface,
              border: `1px solid ${C.border}`,
              boxShadow: "0 4px 16px rgba(0,0,0,.04)",
            }}
          >
            {/* Module Header */}
            <div className="flex items-start gap-3 mb-3">
              <div
                className="w-10 h-10 rounded-[12px] flex items-center justify-center flex-shrink-0"
                style={{
                  background: mod.bg,
                  color: mod.color,
                }}
              >
                <span
                  className="text-sm font-extrabold"
                  style={{ fontFamily: FONT.family }}
                >
                  {mod.id}
                </span>
              </div>

              <div className="flex-1 min-w-0">
                <h3
                  className="text-[13px] font-extrabold leading-tight"
                  style={{
                    color: C.text,
                    fontFamily: FONT.family,
                  }}
                >
                  {mod.name}
                </h3>
                <p
                  className="text-[8px] mt-0.5"
                  style={{
                    color: C.muted,
                    fontFamily: FONT.family,
                  }}
                >
                  {mod.student}
                </p>
              </div>
            </div>

            {/* Purpose */}
            <p
              className="text-[9px] leading-relaxed mb-3"
              style={{
                color: C.textSoft,
                fontFamily: FONT.family,
              }}
            >
              {mod.purpose}
            </p>

            {/* Roles */}
            <div className="flex flex-wrap gap-1.5">
              {mod.roles.map((role) => {
                const rc = roleColors[role] || { bg: C.bg, color: C.textSoft };
                return (
                  <span
                    key={role}
                    className="text-[7px] font-bold px-2 py-1 rounded-full"
                    style={{
                      background: rc.bg,
                      color: rc.color,
                      fontFamily: FONT.family,
                    }}
                  >
                    {role}
                  </span>
                );
              })}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
