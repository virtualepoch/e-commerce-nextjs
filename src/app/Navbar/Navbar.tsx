import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo-512.png";
import { redirect } from "next/navigation";
import { getCart } from "@/lib/db/cart";
import BtnShoppingCart from "./BtnShoppingCart";
import BtnUserMenu from "./BtnUserMenu";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

async function searchProducts(formData: FormData) {
  "use server";

  const searchQuery = formData.get("searchQuery")?.toString();

  if (searchQuery) redirect("/search?query=" + searchQuery);
}

export default async function Navbar() {
  const session = await getServerSession(authOptions);
  const cart = await getCart();

  return (
    <div className="fixed top-0 w-full z-50">
      <div className="navbar max-w-7xl m-auto flex-col sm:flex-row gap-2">
        <div className="flex-1 drop-shadow-2xl">
          <Link href="/" className="btn btn-ghost text-2xl">
            <Image src={logo} width={40} height={40} alt="Agitite Logo" />
            Agitite
          </Link>
        </div>

        <div className="flex-none gap-2">
          <form action={searchProducts}>
            <div className="form-control">
              <input
                name="searchQuery"
                placeholder="Search"
                className="input input-bordered w-full min-w-[100px] border-1 border-neutral-300 bg-white shadow-lg"
              />
            </div>
          </form>

          <BtnShoppingCart cart={cart} />

          <BtnUserMenu session={session} />
        </div>
      </div>
    </div>
  );
}
