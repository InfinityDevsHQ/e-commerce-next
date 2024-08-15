import PropTypes from "prop-types";

export default function Heading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-[32px] pb-8 md:pb-12 uppercase font-bold text-start text-dark">
      {children}
    </h2>
  );
}
Heading.propTypes = {
  children: PropTypes.node,
};
