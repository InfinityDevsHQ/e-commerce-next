import ChatSupportIcon from "../svg/icons/chat-support-icon";
import CreditCardIcon from "../svg/icons/credit-card-icon";
import ParcelIcon from "../svg/icons/parcel-icon";
import ShirtIcon from "../svg/icons/shirt-icon";

export default function InfoSection() {
  const features = [
    {
      icon: <ParcelIcon />,
      title: "FREE SHIPPING",
      description: "Orci volutpat pharetra at curabitu",
    },
    {
      icon: <ShirtIcon />,
      title: "90 DAYS RETURN",
      description: "Orci volutpat pharetra at curabitu",
    },
    {
      icon: <CreditCardIcon />,
      title: "SECURE PAYMENTS",
      description: "Orci volutpat pharetra at curabitu",
    },
    {
      icon: <ChatSupportIcon />,
      title: "24/7 Support",
      description: "Orci volutpat pharetra at curabitu",
    },
  ];

  return (
    <div className="bg-primaryHalfWhite p-4 py-12 sm:p-8 md:p-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center lg:justify-items-start gap-8 md:gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center justify-center gap-2.5 md:max-w-[227px]"
            >
              <div className="flex-shrink-0 text-2xl">{feature.icon}</div>
              <div>
                <h3 className="font-bold text-dark">{feature.title}</h3>
                <p className="text-sm text-darkLight">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
