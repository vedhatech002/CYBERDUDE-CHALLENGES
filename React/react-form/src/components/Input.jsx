import PropTypes from "prop-types";

const Input = ({ name, placeholder, value, handleOnChange, required }) => {
  return (
    <input
      className="px-6 py-1.5 bg-[#1c1a18] rounded-md border-2 border-red-700 outline-none w-full text-slate-300"
      id={name}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={handleOnChange}
      required={required}
    />
  );
};
Input.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  handleOnChange: PropTypes.func,
  required: PropTypes.bool,
};
export default Input;
