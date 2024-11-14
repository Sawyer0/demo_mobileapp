import { createStackNavigator } from "@react-navigation/stack";
import { Welcome } from "../screens";
import { colors } from "../config/theme";
import { StyledButton } from "../components";

const Stack = createStackNavigator();

const OnBoardingStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerTintColor: colors.tint,
        headerRight: () => (
          <StyledButton
            style={{
              height: "auto",
              width: "auto",
              padding: 10,
              backgroundColor: "transparent",
            }}
            textStyle={{
              color: colors.accent,
              fontSize: 14,
              fontWeight: "normal",
            }}
          >
            Skip
          </StyledButton>
        ),
        headerRightContainerStyle: {
          right: 25,
        },
        headerTransparent: true,
      }}
    >
      <Stack.Screen name="Welcome" component={Welcome} />
    </Stack.Navigator>
  );
};

export default OnBoardingStack;
