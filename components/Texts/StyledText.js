import { Text } from 'react-native';

export const StyledText = ({ children, ...props }) => {
  return <Text {...props}>{children}</Text>;
};
