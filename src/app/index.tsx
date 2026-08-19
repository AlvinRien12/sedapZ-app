import { useState } from "react";
import { C, FONT } from "./constants";
import { Logo } from "./shared/Logo";
import { Phone } from "./shared/Phone";
import { ModuleSelector } from "./shared/ModuleSelector";
import { FR1ViewPoints } from "./modules/module2-loyalty/FR1ViewPoints";
import { FR2RedeemVouchers } from "./modules/module2-loyalty/FR2RedeemVouchers";
import { FR3ScanQR } from "./modules/module2-loyalty/FR3ScanQR";
import { FR4PointSettings } from "./modules/module2-loyalty/FR4PointSettings";
import { FR5Reports } from "./modules/module2-loyalty/FR5Reports";
import { FR1NameRegistration } from "./modules/module1-login/FR1NameRegistration";
import { FR2OTPResend } from "./modules/module1-login/FR2OTPResend";
import { FR3StrongPassword } from "./modules/module1-login/FR3StrongPassword";
import { FR4SamePasswordRules } from "./modules/module1-login/FR4SamePasswordRules";
import { FR5ForgotPassword } from "./modules/module1-login/FR5ForgotPassword";
import { FR1FeedbackHistory } from "./modules/module3-feedback/FR1FeedbackHistory";
import { FR2StaffResponse } from "./modules/module3-feedback/FR2StaffResponse";
import { FR3FeedbackCategories } from "./modules/module3-feedback/FR3FeedbackCategories";
import { FR4AttachScreenshots } from "./modules/module3-feedback/FR4AttachScreenshots";
import { FR5InAppSupport } from "./modules/module3-feedback/FR5InAppSupport";
import { FR1OutletDetails } from "./modules/module4-outlet/FR1OutletDetails";
import { FR2UpdateHours } from "./modules/module4-outlet/FR2UpdateHours";
import { FR3OutletStatus } from "./modules/module4-outlet/FR3OutletStatus";
import { FR4SearchFilter } from "./modules/module4-outlet/FR4SearchFilter";
import { FR5RouteGuidance } from "./modules/module4-outlet/FR5RouteGuidance";
import { FR1PersonalizedPromos } from "./modules/module5-promotion/FR1PersonalizedPromos";
import { FR2SaveWishlist } from "./modules/module5-promotion/FR2SaveWishlist";
import { FR3ReminderNotifications } from "./modules/module5-promotion/FR3ReminderNotifications";
import { FR4SearchFilterPromos } from "./modules/module5-promotion/FR4SearchFilterPromos";
import { FR5OrganizedPromos } from "./modules/module5-promotion/FR5OrganizedPromos";

// Module definitions
export const moduleDefinitions = [
  {
    id: "M1",
    name: "User Login / Registration",
    student: "YAP KOK HONG",
    purpose:
      "To let users register and login securely, with verified account details, strong password protection and accessible account recovery.",
    roles: ["Customer", "Admin", "Staff"],
    color: C.primary,
    bg: C.primarySoft,
    screens: [
      { frId: "M1-FR1", label: "Name Registration", component: <FR1NameRegistration /> },
      { frId: "M1-FR2", label: "OTP Verification & Resend", component: <FR2OTPResend /> },
      { frId: "M1-FR3", label: "Strong Password Creation", component: <FR3StrongPassword /> },
      { frId: "M1-FR4", label: "Same Password Rules (Change)", component: <FR4SamePasswordRules /> },
      { frId: "M1-FR5", label: "Forgot Password", component: <FR5ForgotPassword /> },
    ],
  },
  {
    id: "M2",
    name: "Loyalty Points Management",
    student: "YAP HONG BING",
    purpose:
      "To manage customer loyalty points by allowing users to earn, view, and redeem points, while improving customer engagement and encouraging repeat purchases.",
    roles: ["Customer", "Admin", "Staff"],
    color: C.success,
    bg: C.successSoft,
    screens: [
      { frId: "M2-FR1", label: "Customer — View Points Balance", component: <FR1ViewPoints /> },
      { frId: "M2-FR2", label: "Customer — Redeem Points for Vouchers", component: <FR2RedeemVouchers /> },
      { frId: "M2-FR3", label: "Staff — Scan Customer QR Code", component: <FR3ScanQR /> },
      { frId: "M2-FR4", label: "Admin — Manage Points Settings", component: <FR4PointSettings /> },
      { frId: "M2-FR5", label: "Admin — Generate Reports", component: <FR5Reports /> },
    ],
  },
  {
    id: "M3",
    name: "Feedback & Support",
    student: "YAP WEI ZHANG",
    purpose:
      "To allow customers to submit feedback and report issues, while enabling staff to manage and resolve support requests efficiently.",
    roles: ["Customer", "Admin", "Staff"],
    color: C.warning,
    bg: C.warningSoft,
    screens: [
      { frId: "M3-FR1", label: "View Feedback History", component: <FR1FeedbackHistory /> },
      { frId: "M3-FR2", label: "Staff Respond to Feedback", component: <FR2StaffResponse /> },
      { frId: "M3-FR3", label: "Select Feedback Categories", component: <FR3FeedbackCategories /> },
      { frId: "M3-FR4", label: "Attach Screenshots", component: <FR4AttachScreenshots /> },
      { frId: "M3-FR5", label: "In-App Support", component: <FR5InAppSupport /> },
    ],
  },
  {
    id: "M4",
    name: "Outlet Locator",
    student: "THAN SOON RIEN",
    purpose:
      "To help customers find suitable restaurant outlets by providing complete outlet information, updated operating hours, real-time outlet status, advanced search options and route guidance.",
    roles: ["Customer", "Admin", "Staff"],
    color: "#7354A5",
    bg: "#F3EAF8",
    screens: [
      { frId: "M4-FR1", label: "View Outlet Details", component: <FR1OutletDetails /> },
      { frId: "M4-FR2", label: "Update Operating Hours", component: <FR2UpdateHours /> },
      { frId: "M4-FR3", label: "Display Outlet Status", component: <FR3OutletStatus /> },
      { frId: "M4-FR4", label: "Search & Filter Outlets", component: <FR4SearchFilter /> },
      { frId: "M4-FR5", label: "Route Guidance", component: <FR5RouteGuidance /> },
    ],
  },
  {
    id: "M5",
    name: "Promotion Management",
    student: "KARLSON TAN ZHI MING",
    purpose:
      "To manage promotional campaigns by providing personalized promotions, voucher management, reminder notifications, advanced search and filtering and organized promotion information.",
    roles: ["Customer", "Admin", "Staff"],
    color: C.primaryDark,
    bg: C.primarySoft,
    screens: [
      { frId: "M5-FR1", label: "Personalized Promotions", component: <FR1PersonalizedPromos /> },
      { frId: "M5-FR2", label: "Save Vouchers to Wishlist", component: <FR2SaveWishlist /> },
      { frId: "M5-FR3", label: "Reminder Notifications", component: <FR3ReminderNotifications /> },
      { frId: "M5-FR4", label: "Search & Filter Promos", component: <FR4SearchFilterPromos /> },
      { frId: "M5-FR5", label: "Organized Promotion Display", component: <FR5OrganizedPromos /> },
    ],
  },
];

export default function LoyaltyPoints() {
  const [selectedModule, setSelectedModule] = useState<string | null>(null);

  // Show module selector if no module selected
  if (!selectedModule) {
    return (
      <ModuleSelector
        modules={moduleDefinitions.map((m) => ({
          id: m.id,
          name: m.name,
          student: m.student,
          purpose: m.purpose,
          roles: m.roles,
          color: m.color,
          bg: m.bg,
        }))}
        onSelect={setSelectedModule}
      />
    );
  }

  // Find the selected module
  const moduleData = moduleDefinitions.find((m) => m.id === selectedModule);
  if (!moduleData) return null;

  return (
    <div
      className="min-h-screen py-10 px-6"
      style={{
        background: "#ECECEF",
        ...FONT,
      }}
    >
      {/* Header */}
      <div className="text-center mb-8 max-w-2xl mx-auto">
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
          {moduleData.name}
        </h1>

        <p
          className="text-sm"
          style={{
            color: C.muted,
            fontFamily: FONT.family,
          }}
        >
          {moduleData.student} · {moduleData.screens.length} Functional Requirements
        </p>

        <button
          onClick={() => setSelectedModule(null)}
          className="mt-4 px-4 py-2 rounded-full text-[9px] font-bold"
          style={{
            background: C.surface,
            color: C.primary,
            border: `1px solid ${C.border}`,
            fontFamily: FONT.family,
          }}
        >
          ← Back to Modules
        </button>
      </div>

      {/* Phone previews */}
      <div className="overflow-x-auto pb-5">
        <div className="flex gap-8 mx-auto w-fit px-4">
          {moduleData.screens.map((screen) => (
            <Phone
              key={screen.frId}
              frId={screen.frId}
              label={screen.label}
            >
              {screen.component}
            </Phone>
          ))}
        </div>
      </div>
    </div>
  );
}
