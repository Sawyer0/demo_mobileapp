import { useContext, useState, useEffect } from "react";
import { View, Image, StyleSheet } from "react-native";
import { onboardingData } from "../config/data";
import { colors } from "../config/theme";
import { StyledText, StyledButton } from "../components";
import { ScreenWidth } from "../config/constants";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { HeaderHeightContext } from "@react-navigation/elements";
import { useNavigation } from "@react-navigation/native";

const Welcome = ({ route }) => {
  const navigation = useNavigation();
  const [activeScreen] = useState(route.params?.activeScreen || 1);
  return (
    <View style={styles.container}>
      <Image
        source={onboardingData[activeScreen - 1].image}
        style={styles.backgroundImage}
      />
      <View style={{ marginTop: useContext(HeaderHeightContext) }}>
        <View style={styles.imageContainer}>
          <Image
            source={onboardingData[activeScreen - 1].image}
            style={styles.image}
          />
        </View>

        <StyledText style={styles.title}>
          {onboardingData[activeScreen - 1].title}
        </StyledText>
        <StyledText style={styles.description}>
          {onboardingData[activeScreen - 1].description}
        </StyledText>
      </View>

      <View style={styles.bottomContent}>
        <View style={styles.pageIndicators}>
          {onboardingData.map((item) => {
            if (item.id === activeScreen) {
              return (
                <MaterialCommunityIcons
                  name="checkbox-blank-circle"
                  size={15}
                  color={colors.accent + "cc"}
                  key={item.id}
                />
              );
            }
            return (
              <MaterialCommunityIcons
                name="checkbox-blank-circle-outline"
                size={15}
                color={colors.tertiary + "33"}
                key={item.id}
              />
            );
          })}
        </View>

        <StyledButton
          icon="arrowright"
          onPress={() => {
            navigation.push("Welcome", { activeScreen: activeScreen + 1 });
          }}
        >
          Next
        </StyledButton>
      </View>
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
  imageContainer: {
    width: ScreenWidth - 70,
    height: ScreenWidth - 70,
    borderRadius: 45,
    marginBottom: 35,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 15,
  },
  description: {
    textAlign: "center",
    color: colors.tertiary,
  },
  bottomContent: {
    alignItems: "center",
    marginBottom: 25,
  },
  pageIndicators: {
    flexDirection: "row",
    marginBottom: 15,
  },
});

export default Welcome;
