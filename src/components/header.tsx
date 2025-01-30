import { Pressable, View, Text } from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";

export function Header() {
  return (
    <View className="w-full flex-row items-center justify-between">
      <Pressable className="size-10 flex-row items-center justify-center rounded-full bg-white">
        <Ionicons name="menu" size={20} color="#121212" />
      </Pressable>

      <View className="flex-col items-center justify-center">
        <Text className="text-center text-sm text-slate-700">Localização</Text>

        <View className="flex-row items-center justify-center gap-1">
          <Feather name="map-pin" size={14} color="#FF0000" />
          <Text className="text-lg font-bold">Sorocaba</Text>
        </View>
      </View>

      <Pressable className="size-10 flex-row items-center justify-center rounded-full bg-white">
        <Ionicons name="notifications-outline" size={20} color="#121212" />
      </Pressable>
    </View>
  );
}
