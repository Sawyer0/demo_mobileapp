import { TouchableOpacity, StyleSheet, ActivityIndicator } from "react-native";
import StyledText from "../Texts/StyledText";
import { colors } from "../../config/theme";
import { AntDesign } from "@expo/vector-icons";

const StyledButton = ({ children, style, textStyle, icon, onPress, isLoading }) => {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      {isLoading ? (
        <ActivityIndicator size="small" color={textStyle?.color || colors.secondary} />
      ) : !icon ? (
        <StyledText bold style={[styles.text, textStyle]}>
          {children}
        </StyledText>
      ) : (
        <>
          <StyledText bold style={[styles.text, textStyle]}>
            {children + " "}
          </StyledText>
          <AntDesign
            name={icon}
            size={19}
            color={colors.primary}
            style={styles.icon}
          />
        </>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    backgroundColor: colors.accent + "cc",
    flexDirection: "row",
  },
  text: {
    color: colors.primary,
  },
  icon: {
    marginLeft: 10,
  },
});

export default StyledButton;

