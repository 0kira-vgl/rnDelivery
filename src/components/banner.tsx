import { Image, Pressable, View } from "react-native";
import PagerView from "react-native-pager-view";

export function Banner() {
  return (
    <View className="mb-4 mt-5 h-36 w-full rounded-2xl md:h-60">
      <PagerView style={{ flex: 1 }} initialPage={0} pageMargin={14}>
        <Pressable className="h-36 w-full rounded-2xl md:h-60" key="1">
          <Image
            source={require("../assets/banner1.png")}
            className="h-36 w-full rounded-2xl md:h-60"
          />
        </Pressable>
        <Pressable className="h-36 w-full rounded-2xl md:h-60" key="2">
          <Image
            source={require("../assets/banner2.png")}
            className="h-36 w-full rounded-2xl md:h-60"
          />
        </Pressable>
      </PagerView>
    </View>
  );
}
