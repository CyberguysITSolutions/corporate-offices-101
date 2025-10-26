# 📁 Folder Setup Instructions

## How to Set Up the Project

### Option 1: Download All Files (Recommended)

1. **Download all files from this chat:**
   - App.js
   - package.json
   - app.json
   - README.md
   - All files in the `src` folder

2. **Create project structure:**

```bash
# Create main project folder
mkdir corporate-office-101-mobile
cd corporate-office-101-mobile

# Copy downloaded files here:
# - App.js
# - package.json
# - app.json
# - README.md

# Create src folder structure
mkdir -p src/services
mkdir -p src/screens/Auth
mkdir -p src/screens/Dashboard
mkdir -p src/screens/Payments
mkdir -p src/screens/Events
mkdir -p src/screens/Directory
mkdir -p src/screens/Profile

# Copy downloaded screen files to their folders
# src/services/ApiService.js
# src/screens/Auth/LoginScreen.js
# src/screens/Auth/RegisterScreen.js
# src/screens/Dashboard/DashboardScreen.js
# etc.
```

3. **Install dependencies:**

```bash
npm install
```

4. **Start the app:**

```bash
expo start
```

### Option 2: Manual File-by-File Setup

If downloading is difficult, I can create each file one at a time and you can copy-paste the content.

## Complete Folder Structure

```
corporate-office-101-mobile/
│
├── App.js                          # Main app entry point
├── app.json                        # Expo configuration
├── package.json                    # Dependencies
├── README.md                       # Documentation
│
└── src/
    ├── services/
    │   └── ApiService.js          # API service layer
    │
    └── screens/
        ├── Auth/
        │   ├── LoginScreen.js     # Login screen
        │   └── RegisterScreen.js  # Registration screen
        │
        ├── Dashboard/
        │   └── DashboardScreen.js # Dashboard screen
        │
        ├── Payments/
        │   └── PaymentsScreen.js  # Payments (placeholder)
        │
        ├── Events/
        │   └── EventsScreen.js    # Events (placeholder)
        │
        ├── Directory/
        │   └── DirectoryScreen.js # Directory (placeholder)
        │
        └── Profile/
            └── ProfileScreen.js   # Profile (placeholder)
```

## Files Checklist

### Root Level (4 files)
- [ ] App.js
- [ ] package.json
- [ ] app.json
- [ ] README.md

### src/services/ (1 file)
- [ ] ApiService.js

### src/screens/Auth/ (2 files)
- [ ] LoginScreen.js
- [ ] RegisterScreen.js

### src/screens/Dashboard/ (1 file)
- [ ] DashboardScreen.js

### src/screens/Payments/ (1 file)
- [ ] PaymentsScreen.js

### src/screens/Events/ (1 file)
- [ ] EventsScreen.js

### src/screens/Directory/ (1 file)
- [ ] DirectoryScreen.js

### src/screens/Profile/ (1 file)
- [ ] ProfileScreen.js

**Total: 13 files**

## After Setup

Once you have all files in place:

1. **Install Expo CLI:**
```bash
npm install -g expo-cli
```

2. **Install project dependencies:**
```bash
npm install
```

3. **Start the development server:**
```bash
npm start
```

4. **Download Expo Go on your phone:**
   - iOS: App Store
   - Android: Google Play

5. **Scan the QR code** and the app will load!

## Verification

Your project should look like this:

```
corporate-office-101-mobile/
├── node_modules/              ← Created after npm install
├── src/
│   ├── services/
│   │   └── ApiService.js
│   └── screens/
│       ├── Auth/
│       │   ├── LoginScreen.js
│       │   └── RegisterScreen.js
│       ├── Dashboard/
│       │   └── DashboardScreen.js
│       ├── Payments/
│       │   └── PaymentsScreen.js
│       ├── Events/
│       │   └── EventsScreen.js
│       ├── Directory/
│       │   └── DirectoryScreen.js
│       └── Profile/
│           └── ProfileScreen.js
├── App.js
├── app.json
├── package.json
└── README.md
```

## Need Help?

If you're having trouble with the folder structure, let me know and I can:
1. Create a ZIP file
2. Provide step-by-step file-by-file instructions
3. Create an alternative setup method
