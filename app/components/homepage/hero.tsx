import Link from "next/link";

export default function Hero() {
  return (
    <div className="text-primary">
      <div className="flex flex-col items-center gap-2 md:gap-3 px-4 py-16 sm:py-24 md:py-32 lg:py-40 max-w-7xl mx-auto">
        <h4 className="font-bold uppercase tracking-wider">
          Exclusive Furniture
        </h4>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase">
          Comfortable
        </h2>
        <p className="text-center max-w-4xl">
          Lorem ipsum dolor sit amet consectetur. Lacus lectus senectus quisque
          orci vel enim facilisis. Egestas egestas egestas orci arcu nibh. Purus
          semper est odio sed nisl cras a arcu tellus. Et duis eu dolor augue
          imperdiet eget leo interdum feugiat.
        </p>
        <Link
          href="/"
          className="bg-secondary font-bold mt-4 md:mt-0 uppercase px-4 py-2 text-lg hover:bg-secondary/90 transition duration-300 ease-in-out"
        >
          Shop Now
        </Link>
      </div>
    </div>
  );
}
