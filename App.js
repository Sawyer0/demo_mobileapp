import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { Home } from "./screens";


export default function App() {
  return (
    <NavigationContainer>
      <Home/>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
