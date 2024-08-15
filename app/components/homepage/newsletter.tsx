import SendIcon from "../svg/icons/send-icon";

export default function Newsletter() {
  return (
    <div className="bg-white px-4 py-12 sm:p-8 md:p-12">
      <h2 className="text-3xl font-bold uppercase text-center text-dark">
        KEEP UPDATED & GET UNLIMITED DISCOUNT
      </h2>
      <p className="text-darkLight max-w-7xl mx-auto text-center py-6 md:py-12">
        Lorem ipsum dolor sit amet consectetur. Lacus lectus senectus quisque
        orci vel enim facilisis. Egestas egestas egestas orci arcu nibh. Purus
        semper est odio sed nisl eras a arcu tellus. Et duis eu dolor augue
        imperdiet eget leo interdum feugiat.
      </p>
      <div className="max-w-[702px] mx-auto relative">
        <input
          type="email"
          placeholder="Enter email to Subscribe to newsletter"
          className="w-full py-3 px-4 md:px-7 md:py-4 rounded-full bg-primaryHalfWhite focus:outline-none focus:ring-2 focus:ring-black/40 placeholder:text-darkLight"
        />
        <button
          type="submit"
          className="absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-400"
        >
          <span>
            <SendIcon />
          </span>
        </button>
      </div>
    </div>
  );
}
