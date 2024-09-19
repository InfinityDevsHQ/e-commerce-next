import Link from "next/link";

export default function Hero() {
  return (
    <div className="text-primary" id="home">
      <div className="flex flex-col items-center gap-2 md:gap-5 px-4 py-16 sm:py-24 md:px-14 md:py-14 lg:p-24">
        <h4 className="font-bold uppercase tracking-wider md:tracking-[0.5em]">
          Exclusive Furniture
        </h4>
        <h2 className="text-4xl md:text-5xl lg:text-[64px] font-bold uppercase text-white">
          Comfortable
        </h2>
        <p className="text-center text-white">
          Lorem ipsum dolor sit amet consectetur. Lacus lectus senectus quisque
          orci vel enim facilisis. Egestas egestas egestas orci arcu nibh. Purus
          semper est odio sed nisl cras a arcu tellus. Et eu dolor augue
          imperdiet eget leo interdum feugiat.
        </p>
        <Link
          href="/"
          className="bg-secondary font-bold mt-4 md:mt-0 uppercase px-4 py-2 md:py-3 text-lg hover:bg-secondary/90 transition duration-300 ease-in-out"
        >
          Shop Now
        </Link>
      </div>
    </div>
  );
}
