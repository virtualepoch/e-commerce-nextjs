import Link from "next/link";
import { Metadata } from "next";
import prisma from "@/lib/db/prisma";
import { redirect } from "next/navigation";
import BtnFormSubmit from "@/components/BtnFormSubmit";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

export const metadata: Metadata = {
  title: "Add Product - E-Commerce App Template",
};

async function addProduct(formData: FormData) {
  "use server";

  const session = getServerSession(authOptions);
  
  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/add-product");
  }

  const name = formData.get("name")?.toString();
  const description = formData.get("description")?.toString();
  const imageUrl = formData.get("imageUrl")?.toString();
  const price = Number(formData.get("price") || 0);

  if (!name || !description || !imageUrl || !price) {
    throw Error("Missing required fields");
  }

  await prisma.product.create({
    data: { name, description, imageUrl, price },
  });

  redirect("/");
}

export default async function AddProductPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/add-product");
  }
  
  return (
    <>
      <h1 className="page-header">Add Product</h1>

      <form
        action={addProduct}
        className="w-full max-w-[700px] h-fit p-6 flex flex-col items-center gap-6 text-black border border-slate-200 rounded bg-neutral-100"
      >
        <input
          required
          name="name"
          placeholder="Name"
          type="text"
          className="w-full input input-bordered mx-auto text-black border border-slate-300 bg-transparent focus:border-teal-400"
        />

        <textarea
          required
          name="description"
          placeholder="Description"
          className="w-full textarea-bordered textarea mx-auto border-slate-300 bg-transparent focus:border-teal-400"
        />

        <input
          required
          name="imageUrl"
          placeholder="Image URL"
          type="url"
          className="w-full input input-bordered mx-auto border-slate-300 bg-transparent focus:border-teal-400"
        />

        <input
          required
          name="price"
          placeholder="Price"
          type="number"
          className="w-full input input-bordered mx-auto border-slate-300 bg-transparent focus:border-teal-400"
        />

        <BtnFormSubmit className="btn-block">Add Product</BtnFormSubmit>
      </form>
    </>
  );
}
