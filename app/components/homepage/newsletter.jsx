import SendIcon from "../svg/icons/send-icon";

export default function Newsletter() {
  return (
    <div className="max-w-7xl mx-auto bg-white px-4 py-12 md:py-16">
      <h2 className="text-3xl font-bold mb-6 md:mb-10 uppercase text-center">
        KEEP UPDATED & GET UNLIMITED DISCOUNT
      </h2>
      <p className="text-gray-600 mb-8 max-w-4xl mx-auto text-center">
        Lorem ipsum dolor sit amet consectetur. Lacus lectus senectus quisque
        orci vel enim facilisis. Egestas egestas egestas orci arcu nibh. Purus
        semper est odio sed nisl eras a arcu tellus. Et duis eu dolor augue
        imperdiet eget leo interdum feugiat.
      </p>
      <div className="max-w-xl mx-auto relative">
        <input
          type="email"
          placeholder="Enter email to Subscribe to newsletter"
          className="w-full py-3 px-4 rounded-full bg-primary focus:outline-none focus:ring-2 focus:ring-black/40"
        />
        <a
          href="/"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400"
        >
          <span className="mx-4 md:mx-7">
            <SendIcon />
          </span>
        </a>
      </div>
    </div>
  );
}
