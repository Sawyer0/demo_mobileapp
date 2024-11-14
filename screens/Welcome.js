import { View, Image, StyleSheet } from "react-native";
import { onboardingData } from "../config/data";
import { colors } from "../config/theme";

const Welcome = () => {
  const activeScreen = 1;
  return (
    <View style={styles.container}>
      <Image
        source={onboardingData[activeScreen - 1].image}
        style={styles.backgroundImage}
      />
      <View></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    backgroundColor: colors.primary,
    paddingHorizontal: 35,
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
    height: "100%",
    opacity: 0.1,
  },
});

export default Welcome;
