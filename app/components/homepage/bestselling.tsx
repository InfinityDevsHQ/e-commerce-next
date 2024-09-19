import Link from "next/link";
import Heading from "./heading";
import Image from "next/image";
import HeartSvgBlack from "../svg/icons/heart-svg-black";

export default function BestSelling() {
  const products = Array(8).fill({
    name: "ANTIQUE SOFA",
    price: 200,
    category: "SOFA",
    image: "/collection-sofa.png",
  });

  return (
    <div className="bg-white text-dark px-4 py-12 md:p-12" id="services">
      <Heading>Best Selling Products</Heading>
      <div className="flex gap-2.5 mb-4 md:mb-8 lg:mb-12">
        {["ALL", "BED", "SOFA", "TABLE"].map((filter) => (
          <Link
            href="/"
            key={filter}
            className={`p-2.5 hover:border-b-2 border-b-2  border-white hover:border-black text-xs hover:font-semibold ${
              filter === "ALL" ? "font-bold border-black" : ""
            }`}
          >
            {filter}
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-between gap-2 sm:gap-4 md:gap-5  mb-6 md:mb-12">
        {products.map((product, index) => (
          <div key={index} className="flex flex-col lg:w-[280px]">
            <div className="group p-4 md:p-5 relative bg-primaryHalfWhite xl:h-[300px]">
              <Image
                width={300}
                height={300}
                src={product.image}
                alt={product.name}
                className="w-full md:pt-10"
              />
              <div className="absolute inset-0 lg:bottom-5 text-white flex items-end justify-center  opacity-0 group-hover:opacity-100 hover:cursor-pointer transition-opacity duration-300">
                <Link
                  href="/"
                  className="bg-secondary py-1 sm:py-2 mb-2 px-6 sm:px-10 lg:text-lg font-bold hover:bg-secondary/90"
                >
                  ADD TO CART
                </Link>
              </div>
            </div>
            <div className="flex justify-between p-2.5 gap-2.5">
              <div>
                <p className="text-darkLight text-xs md:text-sm">
                  {product.category}
                </p>
                <h3 className="font-bold md:text-xl text-dark">
                  {product.name}
                </h3>
                <p className="text-darkLight font-semibold text-sm md:text-base">
                  ${product.price}
                </p>
              </div>
              <Link href="/" className="text-dark text-sm">
                <HeartSvgBlack />
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <Link
          href="/"
          className="bg-secondary mb-2 p-1.5 md:p-2.5 text-white font-bold text-xs hover:bg-secondary/90"
        >
          VIEW MORE
        </Link>
      </div>
    </div>
  );
}
