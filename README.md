# Wine Down 🍷

A React Native mobile application built with Expo, offering a modern and intuitive interface for wine enthusiasts.

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Expo CLI (`npm install -g expo-cli`)
- iOS Simulator (for Mac users) or Android Emulator

### Installation

1. Clone the repository

- bash
- git clone ["repo url"]
- cd demo-mobileapp

2. Install dependencies

- bash
- npm install

3. Start the development server

- bash
- npm start

4. Run on your preferred platform

- bash
- # For iOS
- npm run ios

- bash
- # For Android
- npm run android

## 📱 Features

- Custom UI Components with consistent theming
- Cross-platform compatibility (iOS & Android)
- Keyboard-aware layouts
- Splash screen with app initialization
- Navigation system
- Responsive design

## 🏗️ Project Structure

```
demo-app/
├── App.js                  # Application entry point
├── components/            # Reusable UI components
│   ├── Buttons/          # Button components
│   ├── Texts/            # Typography components
│   ├── Inputs/           # Input field components
│   ├── Container/        # Layout containers
│   └── index.js          # Component exports
├── config/               # App configuration
│   ├── theme.js          # Theme configuration
│   └── constants.js      # App constants
├── screens/              # Application screens
│   ├── Home.js          # Home screen
│   └── index.js         # Screen exports
├── utils/               # Utility functions
│   ├── storage.js       # AsyncStorage utilities
│   └── context.js       # React Context utilities
└── assets/             # Static assets
```

## 🎨 UI Components

### StyledButton

- Custom button component with loading states
- Icon support using AntDesign icons
- Configurable styling

### StyledText

- Typography component with preset styles
- Support for different text sizes
- Customizable through props

### StyledTextInput

- Input component with icon support
- Dynamic focus states
- Keyboard-aware behavior

### Containers

- `MainContainer`: Basic keyboard-aware container
- `ScrollableMainContainer`: Scrollable content container
- Platform-specific keyboard handling

## 🛠️ Technical Stack

- **React Native**: Mobile app framework
- **Expo**: Development platform
- **React Navigation**: Navigation library
- **AsyncStorage**: Local storage solution
- **@expo/vector-icons**: Icon library

## 📦 Dependencies

```json
{
  "@react-native-async-storage/async-storage": "1.23.1",
  "@react-navigation/elements": "^2.0.0",
  "@react-navigation/native": "^7.0.0",
  "expo": "~52.0.4",
  "expo-splash-screen": "~0.29.7",
  "expo-status-bar": "~2.0.0",
  "react": "18.3.1",
  "react-native": "^0.76.1"
}
```

## 🔧 Configuration

The app uses various configuration files:

- `theme.js`: Contains color schemes and styling constants
- `constants.js`: Platform-specific constants and dimensions

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch

```bash
git checkout -b feature/AmazingFeature
```

3. Commit your changes

```bash
git commit -m 'feat: Add some AmazingFeature'
```

4. Push to the branch

```bash
git push origin feature/AmazingFeature
```

5. Open a Pull Request

Please make sure to update tests as appropriate and follow the existing code style.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## 👥 Authors

- Dawan Sawyer - _Initial work_ - [Sawyer0]
  (https://github.com/Sawyer0)

## 🙏 Acknowledgments

- Hat tip to anyone whose code was used
- Inspiration
- etc

## 📱 Screenshots

[Coming Soon]

---

Made with ❤️ and React Native