# Corporate Hills App - User Flow Diagrams

## Application Launch Flow

```
┌──────────────────┐
│   App Launch     │
│   (index.js)     │
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│   App.js Loads   │
│  Navigation Set  │
└────────┬─────────┘
         │
         ▼
┌─────────────────────────────┐
│  Bottom Tab Navigator       │
│  ┌─────┬──────┬──────┬────┐ │
│  │Home │Comm  │Meet  │Pay │ │
│  └─────┴──────┴──────┴────┘ │
└─────────────────────────────┘
         │
         ▼
┌──────────────────┐
│   Home Screen    │
│   (Default)      │
└──────────────────┘
```

## Communication Flow

```
User selects "Communication" tab
           │
           ▼
┌──────────────────────┐
│  Communication       │
│  Screen Loads        │
│                      │
│  Default: Tenants    │
└──────────┬───────────┘
           │
    ┌──────┴──────┐
    │             │
    ▼             ▼
┌────────┐   ┌──────────────┐
│Tenants │   │   Property   │
│  Tab   │   │  Management  │
└───┬────┘   └──────┬───────┘
    │               │
    ▼               ▼
Display           Display
Tenant            Management
Messages          Messages
    │               │
    └───────┬───────┘
            │
    ┌───────┴────────┐
    │                │
    ▼                ▼
┌─────────┐    ┌──────────┐
│ Read    │    │ Compose  │
│ Message │    │ New Msg  │
└─────────┘    └────┬─────┘
                    │
                    ▼
            ┌───────────────┐
            │ Compose Modal │
            │               │
            │ • Recipient   │
            │ • Subject     │
            │ • Message     │
            └───────┬───────┘
                    │
            ┌───────┴────────┐
            │                │
            ▼                ▼
        ┌────────┐      ┌────────┐
        │ Cancel │      │  Send  │
        └────────┘      └───┬────┘
                            │
                            ▼
                    Message Sent
                    (Back to list)
```

## Meeting Room Booking Flow

```
User selects "Meetings" tab
           │
           ▼
┌──────────────────────┐
│  Meeting Room        │
│  Screen Loads        │
│                      │
│  • Select Date       │
│  • Browse Rooms      │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│  Room Cards Display  │
│                      │
│  ✓ Available Rooms   │
│  ✗ Busy Rooms        │
└──────────┬───────────┘
           │
    ┌──────┴──────┐
    │             │
    ▼             ▼
┌────────────┐  ┌──────────────┐
│ Available  │  │  Not Avail.  │
│   Room     │  │    Room      │
└─────┬──────┘  └──────┬───────┘
      │                │
      ▼                ▼
┌──────────┐     ┌──────────────┐
│ Book Now │     │ View Schedule│
│ (enabled)│     │  (disabled)  │
└─────┬────┘     └──────────────┘
      │
      ▼
┌───────────────────┐
│  Booking Modal    │
│                   │
│ 1. Select Time    │
│ 2. # Attendees    │
│ 3. Purpose        │
└─────────┬─────────┘
          │
   ┌──────┴──────┐
   │             │
   ▼             ▼
┌────────┐  ┌──────────┐
│ Cancel │  │ Confirm  │
└────────┘  └────┬─────┘
                 │
                 ▼
         Booking Created
         (Show in "My Bookings")
```

## Payment Flow

```
User selects "Payment" tab
           │
           ▼
┌──────────────────────┐
│  Payment Screen      │
│                      │
│  • Current Rent Info │
│  • Payment History   │
│  • Payment Info      │
└──────────┬───────────┘
           │
           ▼
    User clicks
    "Make Payment"
           │
           ▼
┌───────────────────┐
│  Payment Modal    │
│                   │
│  Amount: $2,500   │
└─────────┬─────────┘
          │
    ┌─────┴─────┐
    │           │
    ▼           ▼
┌────────┐  ┌──────────┐
│  Card  │  │   Bank   │
│ Payment│  │ Transfer │
└───┬────┘  └────┬─────┘
    │            │
    ▼            ▼
┌────────────┐  ┌──────────────┐
│ Card Form  │  │ Bank Details │
│            │  │              │
│• Name      │  │• Bank Name   │
│• Number    │  │• Account #   │
│• Expiry    │  │• Routing #   │
│• CVV       │  │              │
└─────┬──────┘  └──────┬───────┘
      │                │
      └────────┬───────┘
               │
        ┌──────┴──────┐
        │             │
        ▼             ▼
   ┌────────┐    ┌──────────┐
   │ Cancel │    │ Pay Now  │
   └────────┘    └────┬─────┘
                      │
                      ▼
              Payment Processed
              (Update History)
```

## Screen Navigation Map

```
┌──────────────────────────────────────────────────────────┐
│                    Bottom Tab Bar                         │
├────────────┬─────────────┬──────────────┬────────────────┤
│            │             │              │                │
│   🏢 Home  │  💬 Messages│  📅 Meetings │   💳 Payment   │
│            │             │              │                │
└─────┬──────┴──────┬──────┴───────┬──────┴───────┬────────┘
      │             │              │              │
      │             │              │              │
┌─────▼──────┐ ┌────▼─────────┐ ┌─▼──────────┐ ┌─▼─────────┐
│            │ │              │ │            │ │           │
│   Home     │ │Communication │ │  Meeting   │ │  Payment  │
│   Screen   │ │   Screen     │ │   Room     │ │  Screen   │
│            │ │              │ │   Screen   │ │           │
│            │ │              │ │            │ │           │
│ • Building │ │ • Tenants    │ │ • Rooms    │ │ • Current │
│   Info     │ │ • Management │ │ • Book     │ │   Rent    │
│ • Actions  │ │ • Messages   │ │ • My       │ │ • History │
│ • News     │ │ • Compose    │ │   Bookings │ │ • Pay     │
│            │ │              │ │            │ │           │
└────────────┘ └──────────────┘ └────────────┘ └───────────┘
```

## State Management Flow

```
┌─────────────────────────────────────┐
│        Component State              │
│          (useState)                 │
└────────────┬────────────────────────┘
             │
    ┌────────┼────────┐
    │        │        │
    ▼        ▼        ▼
┌────────┐ ┌────────┐ ┌────────┐
│ Local  │ │  Form  │ │ Modal  │
│ State  │ │ State  │ │ State  │
└────────┘ └────────┘ └────────┘

Examples:
┌─────────────────────────────┐
│  Communication Screen       │
│                             │
│  • selectedTab: string      │
│  • showModal: boolean       │
│  • newMessage: object       │
└─────────────────────────────┘

┌─────────────────────────────┐
│  Meeting Room Screen        │
│                             │
│  • selectedDate: string     │
│  • showModal: boolean       │
│  • selectedRoom: object     │
│  • bookingDetails: object   │
└─────────────────────────────┘

┌─────────────────────────────┐
│  Payment Screen             │
│                             │
│  • showModal: boolean       │
│  • paymentMethod: string    │
│  • paymentDetails: object   │
└─────────────────────────────┘
```

## Data Flow (Future with Backend)

```
┌──────────────┐         ┌──────────────┐         ┌──────────────┐
│              │         │              │         │              │
│  Mobile App  │◄────────┤  REST API    │◄────────┤  Database    │
│              │────────►│              │────────►│              │
│              │         │              │         │              │
└──────────────┘         └──────────────┘         └──────────────┘
      │                         │                         │
      │                         │                         │
      ▼                         ▼                         ▼
  User Actions            • Authentication          • Users
  • Login                 • Authorization           • Messages
  • Send Message          • Data Validation         • Bookings
  • Book Room             • Business Logic          • Payments
  • Make Payment          • Error Handling          • Transactions
```

## Error Handling Flow (Future)

```
User Action
    │
    ▼
Try Operation
    │
    ├──► Success ──────────► Update UI
    │                        Show Confirmation
    │
    └──► Error
            │
            ├──► Network Error ──► Show "Check Connection"
            │
            ├──► Validation Error ──► Show Error Message
            │
            ├──► Auth Error ──► Redirect to Login
            │
            └──► Server Error ──► Show "Try Again"
```

## Authentication Flow (Future Enhancement)

```
┌──────────────┐
│ App Launch   │
└──────┬───────┘
       │
       ▼
┌──────────────┐
│ Check Token  │
└──────┬───────┘
       │
   ┌───┴────┐
   │        │
   ▼        ▼
Valid?    Invalid
   │        │
   ▼        ▼
┌────┐   ┌─────┐
│Home│   │Login│
└────┘   └──┬──┘
            │
       ┌────┴─────┐
       │          │
       ▼          ▼
   ┌──────┐   ┌──────┐
   │Login │   │Signup│
   └───┬──┘   └───┬──┘
       │          │
       └────┬─────┘
            │
            ▼
      Authenticate
            │
       ┌────┴────┐
       │         │
       ▼         ▼
   Success    Failure
       │         │
       ▼         ▼
   ┌────┐   ┌─────┐
   │Home│   │Error│
   └────┘   └─────┘
```

## Push Notification Flow (Future)

```
┌──────────────┐         ┌──────────────┐
│   Backend    │         │    Device    │
│   Server     │────────►│              │
│              │ Push    │  App (BG)    │
└──────────────┘         └──────┬───────┘
                                │
                                ▼
                         ┌──────────────┐
                         │ Notification │
                         │   Received   │
                         └──────┬───────┘
                                │
                         ┌──────┴──────┐
                         │             │
                         ▼             ▼
                    User Taps     User Ignores
                         │             │
                         ▼             ▼
                    Open App      Dismissed
                    Navigate to
                    Relevant Screen
```

## Offline Support Flow (Future)

```
User Action
    │
    ▼
Check Network
    │
    ├──► Online ──────────► Send to Server
    │                       Update Local Cache
    │
    └──► Offline
            │
            ▼
        Save to Queue
        Show Offline Indicator
            │
            ▼
      Network Restored
            │
            ▼
        Sync Queue
        Process Actions
        Update UI
```

## Component Hierarchy

```
App (Navigation Container)
│
├── Tab Navigator
│   │
│   ├── Home Screen
│   │   ├── Header
│   │   ├── Info Cards
│   │   ├── Action Buttons
│   │   └── Announcement Cards
│   │
│   ├── Communication Screen
│   │   ├── Tab Selector
│   │   ├── Message List
│   │   │   └── Message Cards
│   │   ├── Compose Button
│   │   └── Compose Modal
│   │       ├── Input Fields
│   │       └── Action Buttons
│   │
│   ├── Meeting Room Screen
│   │   ├── Date Selector
│   │   ├── Room List
│   │   │   └── Room Cards
│   │   ├── My Bookings Section
│   │   └── Booking Modal
│   │       ├── Time Slot Selector
│   │       ├── Input Fields
│   │       └── Action Buttons
│   │
│   └── Payment Screen
│       ├── Rent Info Card
│       ├── Payment History
│       ├── Payment Info
│       └── Payment Modal
│           ├── Payment Method Selector
│           ├── Payment Form
│           │   ├── Card Form
│           │   └── Bank Info
│           └── Action Buttons
│
└── (Future: Auth Screen, Profile, Settings)
```

---

These diagrams illustrate the complete user journey and technical flow through the Corporate Hills mobile application.
