import { revalidateTag } from "next/cache";
import { addProductToDatabase } from "./actions/serverActions";

export default async function Home() {
  const results = await fetch(
    "https://64ea81b0bf99bdcc8e6796ef.mockapi.io/products",
    {
      cache: "no-cache",
      next: {
        tags: ["products"],
      },
    }
  );

  const products: Product[] = await results.json();

  return (
    <main className="">
      <h1 className="text-3xl font-bold text-center">Products Warehouse</h1>

      <form
        action={addProductToDatabase}
        className="flex flex-col gap-5 max-w-xl mx-auto p-5"
      >
        <input
          type="text"
          name="product"
          className="border border-gray-300 p-2 rounded-md"
          placeholder="Enter Product name..."
        />
        <input
          type="text"
          name="price"
          className="border border-gray-300 p-2 rounded-md"
          placeholder="Enter Price name..."
        />
        <button className="border bg-blue-500 text-white p-2 rounded-md">
          Add Product
        </button>
      </form>

      <h2 className="font-bold p-5">List of Products</h2>

      <div className="flex flex-wrap gap-5">
        {products.map((product) => (
          <div className="p-5 shadow" key={product?.id}>
            <p>{product?.product}</p>
            <p>£{product?.price}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
