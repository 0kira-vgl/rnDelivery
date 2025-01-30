import { useEffect, useState } from "react";
import { Alert, FlatList } from "react-native";
import { Food } from "./food";

export type FoodProps = {
  id: string;
  name: string;
  price: number;
  time: string;
  delivery: number;
  rating: number;
  image: string;
  restaurantId: string;
};

export function Trending() {
  const [foods, setFoods] = useState<FoodProps[]>([]);

  async function get() {
    try {
      const response = await fetch("http://192.168.1.14:3000/foods");
      const data = await response.json(); // transforma em json
      setFoods(data);
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
      data={foods}
      renderItem={({ item }) => <Food food={item} />}
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
