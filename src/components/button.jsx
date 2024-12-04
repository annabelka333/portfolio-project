import PropTypes from "prop-types";

const Button = ({children}) => {
  return (
    <button
      className="rounded-md py-4 px-8 text-lg border-violet-500 text-violet-500"
    >
      {children}
    </button>
  )
}
Button.propTypes = {
  children: PropTypes.element.isRequired,
}

export default Button;