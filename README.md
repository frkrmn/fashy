# PickTogether - Social Shopping Mobile App

PickTogether is a premium social shopping mobile application built with **React Native** and **Expo**. It allows users to create decision rooms, invite friends, and vote on fashion choices instantly.

## ✨ Features

- **Onboarding Experience**: A visually stunning intro with interactive image grids.
- **Decision Rooms**: Collaborative spaces where friends help you decide what to buy.
- **Voter Verdicts**: Real-time progress bars showing the group's consensus.
- **Universal Search & Scan**: Quickly find items or scan barcodes in-store.
- **Chat Integration**: Discuss finds directly within the app.

## 🛠 Tech Stack

- **Framework**: [Expo SDK 54](https://expo.dev/)
- **Core**: [React Native](https://reactnative.dev/)
- **Navigation**: [React Navigation 7](https://reactnavigation.org/)
- **Icons**: [Lucide React Native](https://lucide.dev/guide/packages/lucide-react-native)
- **Styling**: Vanilla React Native Stylesheet (Tailwind-inspired design tokens)
- **Fonts**: Inter via Google Fonts

## 📁 Project Structure

```text
├── App.js                 # Entry point & Font Loading
├── src/
│   ├── components/        # Reusable UI Components
│   │   └── Common/        # Shared elements (Buttons, Cards, Nav)
│   ├── navigation/        # Stack & Tab Navigators
│   ├── screens/           # Main Screen Components
│   └── theme/             # Design Tokens (Colors, Typography)
├── assets/                # App icons and splash screens
└── mockup/                # Original HTML prototype
```

## 🚀 Quick Start

1. **Clone the repository**:
   ```bash
   git clone https://github.com/frkrmn/fashy.git
   cd fashy
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npx expo start -c
   ```

4. **Open the app**:
   - Use the **Expo Go** app on iOS/Android to scan the QR code.
   - Or press `i` for iOS simulator / `a` for Android emulator.

## 📝 License

This project is for demonstration purposes.
