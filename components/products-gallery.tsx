import { productStyles } from "@/styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { FlatList, Text, View } from "react-native";
import Product from "./product";
import AppButton from "./ui/app-button";

interface Props {
  title: string;
  products: any;
}

export default function ProductsGallery({ title, products }: Props) {
  const logout = async () => {
    await AsyncStorage.removeItem("token");
    router.push("/");
  };

  return (
    <View>
      <AppButton func={() => logout()} buttonText="Logout" />
      <Text style={productStyles.title}>{title}</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ padding: 16 }}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        renderItem={({ item }) => (
          <Product
            title={item.title}
            description={item.description}
            image={item.thumbnail}
            price={item.price}
          />
        )}
      />
    </View>
  );
}
