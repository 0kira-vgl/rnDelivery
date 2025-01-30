import { useEffect, useState } from "react";
import { Alert, FlatList } from "react-native";
import { Restaurant } from "./restaurant";

export type RestaurantProps = {
  id: number;
  name: string;
  image: string;
};

export function Restaurants() {
  const [restaurants, setRestaurants] = useState<RestaurantProps[]>([]);

  async function get() {
    try {
      const response = await fetch("http://192.168.1.14:3000/restaurants");
      const data = await response.json(); // transforma em json
      setRestaurants(data);
    } catch (error) {
      Alert.alert("Erro", "Não foi possível carregar as refeições.");
      console.log(error);
    }
  }

  useEffect(() => {
    get();
  }, []);

  return (
    <FlatList
      data={restaurants}
      renderItem={({ item }) => <Restaurant item={item} />}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        gap: 14,
        paddingLeft: 16,
        paddingRight: 16,
      }}
    />
  );
}
