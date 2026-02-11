import ProductsGallery from "@/components/products-gallery";
import useProducts from "@/hooks/use-products";
import { ActivityIndicator } from "react-native";

export default function Products() {
  const { products, loading } = useProducts();

  if (loading) {
    return <ActivityIndicator size="large" style={{ marginTop: 40 }} />;
  }

  return <ProductsGallery title="All Products" products={products} />;
}
