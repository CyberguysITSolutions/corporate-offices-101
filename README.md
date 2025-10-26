# Corporate Office 101 - Mobile App

React Native mobile app for tenant portal management, connecting to the Corporate Office 101 API.

## 🚀 Features

- **Authentication** - Login/Register for tenants
- **Dashboard** - Overview of payments, events, and quick actions
- **Payments** - View payment history and make payments (Coming soon)
- **Events** - Browse and create community events (Coming soon)
- **Directory** - View all tenants and building map (Coming soon)
- **Profile** - Manage user settings (Coming soon)

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Expo CLI (`npm install -g expo-cli`)
- Expo Go app on your phone (iOS/Android)

## 🛠️ Installation

### 1. Install Dependencies

```bash
npm install
```

### 2. Start the Development Server

```bash
npm start
```

or

```bash
expo start
```

### 3. Run on Your Device

**Option A: Using Expo Go App (Recommended for testing)**

1. Download "Expo Go" from App Store (iOS) or Google Play (Android)
2. Scan the QR code shown in the terminal with your phone
3. App will load on your device

**Option B: Using Simulators**

For iOS:
```bash
npm run ios
```
(Requires Xcode on Mac)

For Android:
```bash
npm run android
```
(Requires Android Studio)

## 📁 Project Structure

```
corporate-office-101-mobile/
├── App.js                          # Main entry point with navigation
├── app.json                        # Expo configuration
├── package.json                    # Dependencies
├── src/
│   ├── screens/
│   │   ├── Auth/
│   │   │   ├── LoginScreen.js     # Login page
│   │   │   └── RegisterScreen.js  # Registration page
│   │   ├── Dashboard/
│   │   │   └── DashboardScreen.js # Main dashboard
│   │   ├── Payments/
│   │   │   └── PaymentsScreen.js  # Payment history & payment
│   │   ├── Events/
│   │   │   └── EventsScreen.js    # Events list & creation
│   │   ├── Directory/
│   │   │   └── DirectoryScreen.js # Tenant directory
│   │   └── Profile/
│   │       └── ProfileScreen.js   # User profile
│   └── services/
│       └── ApiService.js          # API integration service
```

## 🔗 API Configuration

The app connects to:
```
https://corporate-office-api.azurewebsites.net/api
```

To change the API endpoint, edit `src/services/ApiService.js`:
```javascript
const API_BASE_URL = 'https://your-api-url.com/api';
```

## 🧪 Testing the App

### Test User Credentials

You can register a new user or use existing credentials:

**Register a new tenant:**
- Business Name: Your business
- Suite Number: Your suite
- Email: your@email.com
- Password: (your password)

### Available API Endpoints

- ✅ `POST /auth/login` - User login
- ✅ `POST /auth/register` - User registration  
- ✅ `GET /auth/profile` - Get user profile
- ✅ `GET /payments` - Get payment history
- ✅ `GET /events` - Get all events
- ✅ `GET /directory` - Get tenant directory

## 📱 Screens Overview

### 1. Login Screen
- Email/password authentication
- Navigate to registration
- Password visibility toggle

### 2. Register Screen
- Business name and suite number
- Email and password
- Form validation
- Auto-login after registration

### 3. Dashboard Screen ⭐
- Welcome message with business name
- Quick stats (payments, events, tenants)
- Upcoming payments list
- Upcoming events list
- Quick action buttons

### 4. Other Screens (Coming Soon)
- Payments - Full payment management
- Events - Event creation and RSVP
- Directory - Searchable tenant list with map
- Profile - Edit profile and settings

## 🎨 Design System

**Colors:**
- Primary: `#2563eb` (Blue)
- Success: `#10b981` (Green)
- Warning: `#f59e0b` (Orange)
- Text: `#1f2937` (Dark Gray)
- Background: `#f9fafb` (Light Gray)

**Typography:**
- Headers: 24-28px, Bold
- Body: 14-16px, Regular
- Captions: 12-14px, Regular

## 🔧 Troubleshooting

### "Unable to resolve module"
```bash
npm install
expo start -c  # Clear cache
```

### API Connection Issues
1. Check your internet connection
2. Verify API is running: https://corporate-office-api.azurewebsites.net/api/health
3. Check API_BASE_URL in `ApiService.js`

### Expo Go Issues
1. Make sure phone and computer are on same WiFi
2. Try scanning QR code again
3. Restart Expo Go app

## 📦 Building for Production

### iOS (Requires Mac + Apple Developer Account)
```bash
expo build:ios
```

### Android
```bash
expo build:android
```

### Using EAS Build (Recommended)
```bash
npm install -g eas-cli
eas build --platform android
eas build --platform ios
```

## 🚀 Next Steps

1. **Complete remaining screens:**
   - Payments screen with Stripe integration
   - Events screen with creation form
   - Directory screen with search
   - Profile screen with edit functionality

2. **Add features:**
   - Push notifications
   - Offline mode
   - Image uploads
   - Dark mode

3. **Testing:**
   - Unit tests
   - Integration tests
   - E2E tests

## 📄 License

Private - Corporate Office 101

## 👥 Support

For issues or questions, contact the development team.
