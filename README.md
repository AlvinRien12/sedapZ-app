# SedapZ Loyalty System

A modular React + TypeScript UI prototype for the SedapZ loyalty platform. Each module contains 5 functional requirement (FR) screens displayed as phone mockups.

## Modules

### Module 1: User Login / Registration (YAP KOK HONG)
- **FR1** — Name Registration: Collect user name, email, and password with strength meter
- **FR2** — OTP Verification & Resend: 6-digit OTP input with resend capability
- **FR3** — Strong Password Creation: Enforce 8+ chars, uppercase, lowercase, numbers, symbols
- **FR4** — Same Password Rules (Change): Apply identical rules for password changes
- **FR5** — Forgot Password: Email-based reset flow with OTP and new password setup

### Module 2: Loyalty Points Management (YAP HONG BING)
- **FR1** — View Points Balance: Customer dashboard showing total points, tier progress, and transaction history
- **FR2** — Redeem Points for Vouchers: Browse and redeem reward vouchers with point costs
- **FR3** — Scan Customer QR Code: Staff scanner UI with QR frame, scan animation, and member verification
- **FR4** — Manage Points Settings: Admin panel for earning rules, tier thresholds, and feature toggles
- **FR5** — Generate Reports: Admin reports with bar charts, stats cards, and export options

### Module 3: Feedback & Support (YAP WEI ZHANG)
- **FR1** — View Feedback History: Customer ticket list with status tabs (All, Open, Resolved)
- **FR2** — Staff Respond to Feedback: Support agent response UI with SLA timer
- **FR3** — Select Feedback Categories: Category picker (Food, Service, App, Other) with urgency level
- **FR4** — Attach Screenshots: Image upload grid with file attachment support
- **FR5** — In-App Support: Chat, call, and email support options with live chat interface

### Module 4: Outlet Locator (THAN SOON RIEN)
- **FR1** — View Outlet Details: Address, contact, rating, hours, and facilities tabs
- **FR2** — Update Operating Hours: Admin form to edit weekly hours and special notices
- **FR3** — Display Outlet Status: Real-time open/closed/temp-closed status with filtering
- **FR4** — Search & Filter Outlets: Search bar, category filters, and outlet cards
- **FR5** — Route Guidance: Map placeholder, transport mode selector, and turn-by-turn steps

### Module 5: Promotion Management (KARLSON TAN ZHI MING)
- **FR1** — Personalized Promotions: AI-suggested deals based on user preferences
- **FR2** — Save Vouchers to Wishlist: Heart/save toggle on voucher cards
- **FR3** — Reminder Notifications: Push/email notification toggles with expiry alerts
- **FR4** — Search & Filter Promos: Search bar, category pills, and promotion cards
- **FR5** — Organized Promotion Display: Tabbed view (Active, Ending Soon, Expired) with details

## How to Run

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm dev

# Open browser
http://localhost:5174
```

## Tech Stack

- React 18 + TypeScript
- Vite
- Tailwind CSS
- Lucide React icons
