import { toastMessage } from "@/constants/variables";
import { getProducts } from "@/services/products";
import { TypeProduct } from "@/types";
import { useEffect, useState } from "react";

export default function useProducts() {
  const [products, setProducts] = useState<TypeProduct[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const getAllProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data.data);
        setLoading(false);
      } catch (err: any) {
        toastMessage("error", err.message);
      }
    };
    getAllProducts();
  }, []);

  return { products, loading };
}
