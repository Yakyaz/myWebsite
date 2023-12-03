import ProductCart from "./components/ProductCart";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 className=" text-black">Hello World</h1>
      <Link href="/users" className=" text-black">
        Users
      </Link>
      <ProductCart />
    </main>
  );
}
