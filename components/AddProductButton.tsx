"use client";

import { addProductToDatabase } from "@/actions/serverActions";
import { useTransition } from "react";

function AddProductButton() {
  const [isPending, startTransition] = useTransition();

  const formData = new FormData();
  formData.append("product", "Apple keyboard");
  formData.append("price", "149.99");

  return (
    <button
      onClick={() => startTransition(() => addProductToDatabase(formData))}
      className="fixed bottom-10 right-10 border bg-green-500 text-white p-2 rounded-md w-48"
    >
      {isPending ? "Adding..." : "Add Mac Keyboard"}
    </button>
  );
}

export default AddProductButton;
