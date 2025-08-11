import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Pressable,
  Alert,
} from "react-native";
import { theme } from "../theme";
import AntDesign from '@expo/vector-icons/AntDesign';

type Props = {
  name: string;
  isCompleted?: boolean;
};

export function ShoppingListItem({ name, isCompleted }: Props) {
  const handleDelete = () => {
    Alert.alert(
      "Delete Item",
      `Are you sure you want to delete this ${name}?`,
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Delete",
          style: "destructive",
          onPress: () => console.log("Item deleted"),
        },
      ]
    );
  };

  return (
    <View style={[styles.itemContainer, isCompleted ? styles.completedContainer : undefined]}>
      <Text style={[styles.itemText, isCompleted ? styles.completedText : undefined]}>{name}</Text>
      <TouchableOpacity
        onPress={handleDelete}
        activeOpacity={0.7}
      >
        <AntDesign name="closecircle" size={24} color={isCompleted ? theme.colorGrey : theme.colorRed} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    borderBottomColor: theme.colorCerulean,
    borderBottomWidth: 1,
    paddingHorizontal: 8,
    paddingVertical: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  completedContainer: {
    backgroundColor: theme.colorLightGrey,
    borderBottomColor: theme.colorLightGrey,
  },
  itemText: {
    fontSize: 16,
    fontWeight: "400",
    color: theme.colorBlack,
  },
  buttonText: {
    color: theme.colorWhite,
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  completedText: {
    color: theme.colorGrey,
    textDecorationLine: "line-through",
    textDecorationColor: theme.colorGrey,
  },
});
