import PropTypes from "prop-types";

const Input = ({ name, type = "text", placeholder, register, error }) => {
  return (
    <>
      <input
        className="px-6 py-1.5 bg-[#1c1a18] rounded-md border-2 border-red-700 outline-none w-full text-slate-300"
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        {...register}
      />
      {error && <small>{error.message}</small>}
    </>
  );
};
Input.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  handleOnChange: PropTypes.func,
  required: PropTypes.bool,
  register: PropTypes.object,
  error: PropTypes.object,
};
export default Input;
