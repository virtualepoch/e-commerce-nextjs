import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
     <h1 className="mx-auto my-4 mb-96 px-4 text-2xl font-bold border-4">Home</h1>

     <Link href={"/add-product"} className="p-4 py-2 border-b-2 border-b-teal-300 text-slate-700">Add Product</Link>    
    </>
  );
}
