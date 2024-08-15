import Image from "next/image";
import Heading from "./heading";

const CollectionItems = [
  {
    id: 1,
    title: "Chair",
    image: "/collection-1.png",
  },
  {
    id: 2,
    title: "Lamp",
    image: "/collection-2.png",
  },
  {
    id: 3,
    title: "Table",
    image: "/collection-3.png",
  },
  {
    id: 4,
    title: "Bed",
    image: "/collection-4.png",
  },
];

export default function Collection() {
  return (
    <div className="bg-white px-4 py-12 md:p-12">
      <Heading>OUR COLLECTION</Heading>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-2.5">
        <div className="col-span-2 row-span-2 p-3 md:p-5 bg-dark relative h-80 sm:h-96 lg:h-[427px]">
          <h3 className="text-xl font-bold text-primaryLight pb-2.5">SOFA</h3>
          <p className="text-primaryLight">
            Lorem ipsum dolor sit amet consectetur. Orci volutpat pharetra at
            curabitor nec magnis
          </p>
          <Image
            width={427}
            height={293}
            src="/collection-sofa.png"
            alt="Yellow Sofa"
            className="absolute bottom-0 right-0 lg:w-[427px] lg:h-[293px]"
          />
        </div>
        {CollectionItems.map((item) => (
          <div
            key={item.id}
            className={`p-3 md:p-5 ${
              item.id === 2 || item.id === 3
                ? "bg-primaryHalfWhite"
                : "bg-primary "
            }`}
          >
            <h3 className="text-xl font-bold pb-2.5 text-dark">{item.title}</h3>
            <p className="text-darkLight">
              Lorem ipsum dolor sit amet consectetur.
            </p>
            <div className="flex justify-end items-end">
              <Image
                src={item.image}
                alt={item.title}
                className="lg:w-1/2"
                width={165}
                height={113}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
