import { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { Home, Welcome } from "./screens";
import * as SplashScreen from "expo-splash-screen";
import OnboardingStack from "./navigators/OnboardingStack";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const prepareApp = async () => {
    try {
      //fetch data from "backend"
    } catch (e) {
      console.warn(e);
    } finally {
      await SplashScreen.hideAsync();
    }
  };
  useEffect(() => {
    prepareApp();
  }, []);
  return (
    <NavigationContainer>
      <OnboardingStack />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
