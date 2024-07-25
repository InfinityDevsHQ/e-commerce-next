import Link from "next/link";
import Heading from "./heading";
import Image from "next/image";

export default function BestSelling() {
  const products = Array(8).fill({
    name: "ANTIQUE SOFA",
    price: 200,
    category: "SOFA",
    image: "/collection-sofa.png",
  });

  return (
    <div className="max-w-7xl mx-auto bg-white px-4 py-12 md:py-16">
      <Heading>Best Selling Products</Heading>
      <div className="flex space-x-2 sm:space-x-4 mb-3 md:mb-6">
        {["ALL", "BED", "SOFA", "TABLE"].map((filter, index) => (
          <Link
            href="/"
            key={index}
            className={`p-2 hover:border-b-2 border-b-2  border-white hover:border-black text-sm hover:font-semibold ${
              filter === "ALL" ? "font-semibold border-black" : ""
            }`}
          >
            {filter}
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div key={index} className="flex flex-col">
            <div className="group bg-gray-100 p-4 rounded-lg relative">
              <Image
                width={300}
                height={300}
                src={product.image}
                alt={product.name}
                className="w-full mb-4"
              />
              <div className="absolute inset-0 text-white flex items-end justify-center  opacity-0 group-hover:opacity-100 hover:cursor-pointer transition-opacity duration-300">
                <Link
                  href="/"
                  className="bg-secondary py-1 sm:py-2 mb-2 px-6 sm:px-10 font-bold hover:bg-secondary/90"
                >
                  ADD TO CART
                </Link>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-gray-500 text-sm">{product.category}</p>
                <h3 className="font-semibold">{product.name}</h3>
                <p className="text-gray-700">${product.price}</p>
              </div>
              <Link href="/" className="text-gray-400">
                ♡
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="text-end mt-6">
        <Link
          href="/"
          className="bg-secondary mb-2 p-1.5 sm:p-2 text-white font-medium hover:bg-secondary/90"
        >
          VIEW MORE
        </Link>
      </div>
    </div>
  );
}
