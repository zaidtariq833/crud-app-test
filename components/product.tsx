import { productStyles } from "@/styles";
import { Image, Text, View } from "react-native";

interface Props {
  image: string;
  title: string;
  description: string;
  price: any;
}

export default function Product({ image, title, description, price }: Props) {
  return (
    <View style={productStyles.productCard}>
      <Image
        source={{ uri: image }}
        style={{ width: "100%", height: 200, borderRadius: 10 }}
        resizeMode="cover"
      />
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
        }}
      >
        {title}
      </Text>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
        }}
      >
        ${price}
      </Text>
      <Text style={{ fontSize: 15 }}>{description}</Text>
    </View>
  );
}
