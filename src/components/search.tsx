import { TextInput, View } from "react-native";
import { Feather } from "@expo/vector-icons";

export function Search() {
  return (
    <View className="h-14 w-full flex-row items-center gap-2 rounded-full border border-slate-500 bg-transparent px-4">
      <Feather name="search" size={24} color="#64748b" />

      <TextInput
        placeholder="Procure sua comida..."
        placeholderTextColor="#64748b"
        className="w-full flex-1 bg-transparent"
      />
    </View>
  );
}
