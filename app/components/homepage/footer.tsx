import Link from "next/link";
import ChevronRight from "../svg/icons/chevron-right";
import NavLogoDark from "../svg/logos/logo-svg-dark";

const Footer = () => {
  return (
    <footer>
      {/* Subscription Section */}

      {/* Links Section */}
      <div className="bg-primary text-black py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-3 md:grid-cols-4 md:gap-4 justify-items-center md:justify-items-start md:items-center space-y-4 md:space-y-0 px-4">
          <div className="fill-black mb-4 md:mb-0 col-span-3 md:col-span-1">
            <NavLogoDark />
          </div>

          <div className="space-y-2">
            <h4 className="font-bold mb-2">Quick Links</h4>
            <ul className="space-y-2">
              {["Privacy Policy", "Return Policy", "Disputes", "Return"].map(
                (link, index) => (
                  <li key={index}>
                    <Link href="/" className="flex items-center gap-1 pb-1">
                      <ChevronRight />
                      {link}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          <div className="space-y-2">
            <h4 className="font-bold mb-2">Menu</h4>
            <ul className="space-y-2">
              {["Home", "Shop", "My account", "Track Order"].map(
                (link, index) => (
                  <li key={index}>
                    <Link href="/" className="flex items-center gap-1 pb-1">
                      <ChevronRight />
                      {link}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          <div className="space-y-2 w-28">
            <h4 className="font-bold mb-2">Shop</h4>
            <ul className="space-y-2">
              {["Bed", "Table", "Sofa", "Lamp"].map((link, index) => (
                <li key={index}>
                  <Link href="/" className="flex items-center gap-1 pb-1">
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
