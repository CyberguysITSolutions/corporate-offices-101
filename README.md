# Corporate Hills Mobile App

A mobile application for the Corporate Hills building that enables tenants and property management to communicate, book meeting rooms, and make rental payments.

## Features

### 🏢 Home Dashboard
- Building information and contact details
- Quick actions for common tasks
- Important announcements and updates
- Office hours and building status

### 💬 Communication
- **Tenant Communication**: Message other tenants in the building
- **Property Management**: Direct messaging with property management team
- Compose and send messages
- View message history
- Real-time notifications for new messages

### 📅 Meeting Room Booking
- View available meeting rooms with capacity and amenities
- Real-time availability status
- Book meeting rooms for specific time slots
- View and manage your upcoming bookings
- Cancel existing reservations
- Meeting room features include:
  - Conference Room A (12 people) - Projector, Whiteboard, Video Conferencing
  - Conference Room B (8 people) - TV Screen, Whiteboard
  - Small Meeting Room (4 people) - TV Screen
  - Board Room (20 people) - Full amenities including catering service

### 💳 Rental Payments
- View current rent information and due dates
- Make secure online payments
- Payment history tracking
- Multiple payment methods:
  - Credit/Debit Card
  - Bank Transfer
- Payment reminders and status updates

## Technology Stack

- **Framework**: React Native 0.72.6
- **Navigation**: React Navigation v6
- **UI Components**: React Native core components
- **State Management**: React Hooks (useState)

## Installation

### Prerequisites
- Node.js (v14 or higher)
- React Native development environment set up
- For iOS: Xcode and CocoaPods
- For Android: Android Studio and Android SDK

### Setup

1. Clone the repository:
```bash
git clone https://github.com/CyberguysITSolutions/corporate-offices-101.git
cd corporate-offices-101
```

2. Install dependencies:
```bash
npm install
```

3. For iOS (Mac only):
```bash
cd ios
pod install
cd ..
```

4. Run the application:

For iOS:
```bash
npm run ios
```

For Android:
```bash
npm run android
```

## Project Structure

```
corporate-offices-101/
├── src/
│   ├── App.js                    # Main app component with navigation
│   ├── screens/
│   │   ├── HomeScreen.js         # Home dashboard
│   │   ├── CommunicationScreen.js # Messaging interface
│   │   ├── MeetingRoomScreen.js  # Meeting room booking
│   │   └── PaymentScreen.js      # Rental payment
│   └── components/               # Reusable components (future)
├── app.json                      # App configuration
├── package.json                  # Dependencies and scripts
├── index.js                      # App entry point
└── README.md                     # Project documentation
```

## Development

### Running Tests
```bash
npm test
```

### Linting
```bash
npm run lint
```

### Starting Metro Bundler
```bash
npm start
```

## Future Enhancements

- Push notifications for messages and announcements
- Integration with building access control systems
- Maintenance request submission
- Package delivery notifications
- Visitor management system
- Event calendar for building activities
- Emergency alerts and procedures
- Tenant directory
- Building amenities reservation (gym, pool, etc.)
- Analytics dashboard for property management

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is proprietary software owned by CyberguysIT Solutions.

## Support

For support and questions, please contact:
- Email: support@cyberguysit.com
- Phone: (555) 123-4567
- Property Management Office: Room 101, Corporate Hills Building

## Version History

- **v1.0.0** (October 2025) - Initial release
  - Tenant and property management communication
  - Meeting room booking system
  - Rental payment processing
  - Home dashboard with announcements
