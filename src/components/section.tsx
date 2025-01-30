import { Text, TextProps, TouchableOpacity, View } from "react-native";

type SectionProps = TextProps & {
  title: string;
  size: "text-lg" | "text-xl" | "text-2xl";
  label: string;
};

export function Section({ title, size, label }: SectionProps) {
  return (
    <View className="w-full flex-row items-center justify-between px-4">
      <Text className={`${size} my-4 self-start font-semibold`}>{title}</Text>

      <TouchableOpacity>
        <Text>{label}</Text>
      </TouchableOpacity>
    </View>
  );
}
