import PropTypes from "prop-types";

export default function Heading({ children }) {
  return (
    <h2 className="text-3xl mb-8 md:mb-10 uppercase font-bold text-start">
      {children}
    </h2>
  );
}
Heading.propTypes = {
  children: PropTypes.node,
};
