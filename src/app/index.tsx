import { ScrollView, View } from "react-native";
import { Header } from "../components/header";
import Constants from "expo-constants";
import { Banner } from "../components/banner";
import { Search } from "../components/search";
import { Section } from "../components/section";
import { Trending } from "../components/trending";
import { Restaurants } from "../components/restaurants";

export default function Index() {
  const statusBarHeight = Constants.statusBarHeight; // pega o tamanho da statusBar do celular

  return (
    <ScrollView
      style={{ flex: 1 }}
      className="bg-slate-200"
      showsVerticalScrollIndicator={false}
    >
      <View className="w-full px-4" style={{ marginTop: statusBarHeight + 8 }}>
        <Header />
        <Banner />
        <Search />
      </View>

      <Section title="Comidas em alta" label="Ver mais" size="text-2xl" />
      <Trending />

      <Section title="Famosos no DevFood" label="Veja todos" size="text-xl" />
      <Restaurants />
    </ScrollView>
  );
}
