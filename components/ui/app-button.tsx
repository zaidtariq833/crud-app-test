import { sharedStyles } from "@/styles";
import { Pressable, Text } from "react-native";

interface Props {
  buttonText?: string;
  func?: () => void;
}

export default function AppButton({ buttonText, func }: Props) {
  return (
    <Pressable style={sharedStyles.button} onPress={func}>
      <Text style={sharedStyles.buttonText}>{buttonText}</Text>
    </Pressable>
  );
}
