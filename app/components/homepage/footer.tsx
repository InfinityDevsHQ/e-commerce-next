import Link from "next/link";
import ChevronRight from "../svg/icons/chevron-right";
import NavLogoDark from "../svg/logos/logo-svg-dark";

const Footer = () => {
  return (
    <footer>
      <div className="bg-primary text-black sm:px-6 md:px-12 py-12">
        <div className="grid grid-cols-3 md:grid-cols-4 md:gap-4 lg:gap-12  justify-items-center md:justify-items-start md:items-center space-y-4 md:space-y-0 px-4">
          <div className="fill-black mb-4 md:mb-0 col-span-3 md:col-span-1">
            <NavLogoDark />
          </div>

          <div className="space-y-2.5">
            <h4 className="font-bold text-base md:text-xl">Quick Links</h4>
            <ul>
              {["Privacy Policy", "Return Policy", "Disputes", "FAQs"].map(
                (link, index) => (
                  <li key={index}>
                    <Link
                      href="#"
                      className="flex items-center gap-1 p-2.5 text-xs font-medium hover:tracking-wide transition duration-300 ease-in-out"
                    >
                      <ChevronRight />
                      {link}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          <div className="space-y-2.5">
            <h4 className="font-bold text-base md:text-xl">Menu</h4>
            <ul>
              {["Home", "Shop", "My account", "Track Order"].map(
                (link, index) => (
                  <li key={index}>
                    <Link
                      href="#"
                      className="flex items-center gap-1 p-2.5 text-xs font-medium hover:tracking-wide transition duration-300 ease-in-out"
                    >
                      <ChevronRight />
                      {link}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          <div className="space-y-2.5 w-28">
            <h4 className="font-bold text-base md:text-xl">Shop</h4>
            <ul>
              {["Bed", "Table", "Sofa", "Lamp"].map((link, index) => (
                <li key={index}>
                  <Link
                    href="#"
                    className="flex items-center gap-1 p-2.5 text-xs font-medium hover:tracking-wide transition duration-300 ease-in-out"
                  >
                    <ChevronRight />
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
