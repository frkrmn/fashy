# Installation & Setup Guide

This guide provides detailed instructions to set up the PickTogether development environment.

## 📋 Prerequisites

Before starting, ensure you have the following installed:

- **Node.js** (LTS version recommended)
- **npm** or **Yarn**
- **Git**
- **Expo Go App** (on your physical mobile device)
- **Watchman** (MacOS users): `brew install watchman`

## 🛠 Step-by-Step Setup

### 1. Clone the project
```bash
git clone https://github.com/frkrmn/fashy.git
cd fashy
```

### 2. Install Project Dependencies
We use `npm` for dependency management. Run:
```bash
npm install
```

### 3. Setup Expo environment
If you haven't installed the Expo CLI globally, you can use `npx` (recommended):
```bash
npx expo start
```

### 4. Native Modules (Optional)
If you plan to build for production or use development builds, ensure you have the appropriate native toolchains:
- **iOS**: Xcode installed.
- **Android**: Android Studio & SDK installed.

## 🔧 Troubleshooting

### Font Loading Issues
If fonts are not appearing, ensure the font names in `src/theme/index.js` exactly match the aliases defined in `App.js`.

### Cache Clearing
If the app crashes or doesn't reflect changes in `app.json`, clear the Expo cache:
```bash
npx expo start -c
```

### Dependency Conflicts
If you encounter "Render Errors" related to native modules, run:
```bash
npx expo install --check
```
This ensures all packages are compatible with the installed Expo SDK version.

## 📦 Deployment

To publish your app for testing via Expo:
```bash
npx expo publish
```

To create a production build (EAS):
```bash
npm install -g eas-cli
eas build --profile production
```
