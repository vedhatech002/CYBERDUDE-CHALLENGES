import PropTypes from "prop-types";

const TextArea = ({ name, placeholder, value, handleOnChange, required }) => {
  return (
    <textarea
      id={name}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={handleOnChange}
      className="px-6 py-1.5 bg-[#1c1a18] rounded-md border-2 border-red-700 outline-none w-full text-slate-300 h-[200px]"
      required={required}
    ></textarea>
  );
};
TextArea.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  handleOnChange: PropTypes.func,
  required: PropTypes.bool,
};
export default TextArea;
