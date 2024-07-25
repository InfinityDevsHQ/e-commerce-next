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
    <div className="max-w-7xl mx-auto bg-white px-4 py-12 md:py-16">
      <Heading>OUR COLLECTION</Heading>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4">
        <div className="col-span-2 row-span-2  p-4 bg-[#0F172A] relative h-80 md:h-auto">
          <h3 className="text-xl font-bold text-white mb-2">SOFA</h3>
          <p className="text-gray-300 mb-4">
            Lorem ipsum dolor sit amet consectetur. Orci volutpat pharetra at
            curabitor nec magnis
          </p>
          <img
            src="/collection-sofa.png"
            alt="Yellow Sofa"
            className="w-3/4 absolute bottom-0 right-0"
          />
        </div>
        {CollectionItems.map((item) => (
          <div key={item.id} className="bg-primary p-2 sm:p-4">
            <h3 className="text-lg font-bold mb-2">{item.title}</h3>
            <p className="text-gray-600 mb-2">
              Lorem ipsum dolor sit amet consectetur.
            </p>
            <div className="flex justify-end items-end">
              <img src={item.image} alt={item.title} className="lg:w-1/2" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
