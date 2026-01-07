import { TouchableOpacity, Text, StyleSheet } from "react-native";

type Props = {
  onPress: () => void;
};

export default function ClearButton({ onPress }: Props) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>X</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "rgba(247, 199, 242, 0.3)",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 6,
    marginLeft: 8,
  },
  text: {
    fontSize: 15,
    color: "#333",
    fontWeight: "bold"
  },
});
