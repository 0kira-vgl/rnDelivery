import { Image, Pressable, Text } from "react-native";
import { RestaurantProps } from "./restaurants";

type Props = {
  item: RestaurantProps;
};

export function Restaurant({ item }: Props) {
  return (
    <Pressable className="flex-col items-center justify-center">
      <Image source={{ uri: item.image }} className="size-20 rounded-full" />
      <Text
        className="mt-2 w-20 text-center text-sm leading-4 text-black"
        numberOfLines={2}
      >
        {item.name}
      </Text>
    </Pressable>
  );
}
