# 🚀 Corporate Office 101 Mobile App - Quick Start Guide

## ✅ What We've Built

A React Native mobile app with:
- ✅ Complete authentication (Login/Register)
- ✅ Working dashboard with real API data
- ✅ Professional UI design
- ✅ Bottom tab navigation
- ✅ API service layer connected to your backend
- ✅ Async storage for auth tokens

## 📱 Get Started in 5 Minutes

### Step 1: Install Expo CLI & Dependencies

```bash
# Install Expo CLI globally (if not already installed)
npm install -g expo-cli

# Navigate to the project folder
cd corporate-office-101-mobile

# Install dependencies
npm install
```

### Step 2: Start the Development Server

```bash
npm start
```

or

```bash
expo start
```

This will:
- Start the Metro bundler
- Show a QR code in your terminal
- Open a browser with Expo DevTools

### Step 3: Run on Your Phone (Easiest!)

1. **Download Expo Go**
   - iOS: App Store
   - Android: Google Play Store

2. **Scan the QR Code**
   - iOS: Use Camera app
   - Android: Use Expo Go app

3. **App loads on your phone!** 🎉

### Step 4: Test the App

1. **Register a new tenant:**
   - Business Name: "Test Business"
   - Suite Number: "TEST-001"
   - Email: "test@example.com"
   - Password: "password123"

2. **Explore the dashboard:**
   - See your business name
   - View stats
   - Check upcoming payments/events

## 📂 Project Files

```
corporate-office-101-mobile/
├── App.js                          ← Main navigation
├── package.json                    ← Dependencies
├── app.json                        ← Expo config
├── README.md                       ← Full documentation
└── src/
    ├── services/
    │   └── ApiService.js          ← API calls to backend
    └── screens/
        ├── Auth/
        │   ├── LoginScreen.js     ← ✅ Complete
        │   └── RegisterScreen.js  ← ✅ Complete
        ├── Dashboard/
        │   └── DashboardScreen.js ← ✅ Complete
        ├── Payments/
        │   └── PaymentsScreen.js  ← 🔜 Next iteration
        ├── Events/
        │   └── EventsScreen.js    ← 🔜 Next iteration
        ├── Directory/
        │   └── DirectoryScreen.js ← 🔜 Next iteration
        └── Profile/
            └── ProfileScreen.js   ← 🔜 Next iteration
```

## 🔗 API Connection

The app connects to your deployed backend:
```
https://corporate-office-api.azurewebsites.net/api
```

All API calls are handled in `src/services/ApiService.js`

## 🎨 Current Features

### ✅ Authentication
- Login with email/password
- Register new tenant accounts
- Secure token storage
- Auto-login on app restart

### ✅ Dashboard
- Welcome message with business name
- Quick stats (payments, events, tenants)
- Upcoming payments list
- Upcoming events list
- Quick action buttons
- Pull to refresh
- Loading states

### 🔜 Coming Next (Ready to Build)
- Payments screen with history
- Events screen with creation
- Directory with tenant search
- Profile with edit functionality

## 🐛 Troubleshooting

### "Cannot find module" errors
```bash
rm -rf node_modules
npm install
expo start -c
```

### QR code not scanning
- Ensure phone and computer are on same WiFi
- Try "Tunnel" connection in Expo DevTools

### API not connecting
- Check: https://corporate-office-api.azurewebsites.net/api/health
- Should return: `{"status":"healthy"}`

## 🎯 Next Steps

Now that you have a working app with authentication and dashboard, we can:

1. **Build Payments Screen** - View payment history, initiate payments with Stripe
2. **Build Events Screen** - Browse events, create new events, RSVP
3. **Build Directory Screen** - Search tenants, view building map
4. **Build Profile Screen** - Edit profile, update settings, logout
5. **Add Advanced Features** - Push notifications, offline mode, etc.

## 📞 Testing Tips

**Test the Dashboard:**
- Pull down to refresh data
- Tap "See all" to navigate to other screens
- Try quick action buttons

**Test Authentication:**
- Register a new user
- Logout and login again
- Check if token persists after app restart

## 🚀 Ready to Continue?

The foundation is solid! Let me know which screen you want to build next:
- **Payments** (with Stripe integration)
- **Events** (create & browse)
- **Directory** (search & map)
- **Profile** (edit & settings)

All API endpoints are ready and working on the backend! 🎉
