import { Image, Pressable, Text, View } from "react-native";
import { FoodProps } from "./trending";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  food: FoodProps;
};

export function Food({ food }: Props) {
  return (
    <Pressable className="relative flex-col rounded-xl">
      <Image source={{ uri: food.image }} className="h-36 w-44 rounded-xl" />

      <View className="absolute right-3 top-2 flex-row items-center justify-center gap-1 rounded-full bg-neutral-900/90 px-2 py-1">
        <Ionicons name="star" size={14} color="#ca8a04" />
        <Text className="text-sm text-white">{food.rating}</Text>
      </View>

      <Text className="text-lg font-medium text-green-700">R${food.price}</Text>
      <Text className="mt-1 text-black">{food.name}</Text>
      <Text className="text-sm text-neutral-600">
        {food.time} - R$ {food.delivery}
      </Text>
    </Pressable>
  );
}
