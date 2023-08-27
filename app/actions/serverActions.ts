"use server";

import { revalidateTag } from "next/cache";

export const addProductToDatabase = async (e: FormData) => {
  const product = e.get("product")?.toString();
  const price = e.get("price")?.toString();

  if (!price || !product) return;

  const newProduct: Product = {
    product,
    price,
  };

  await fetch("https://64ea81b0bf99bdcc8e6796ef.mockapi.io/products", {
    method: "POST",
    body: JSON.stringify(newProduct),
    headers: {
      "Content-Type": "application/json",
    },
  });

  revalidateTag("products");
};
