import PropTypes from "prop-types";

const Input = ({ name, type = "text", placeholder, register, error }) => {
  return (
    <>
      <input
        className={`bg-[#1f1f1f] px-4 py-1 rounded w-full  outline-none`}
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        {...register}
      />
      {error && (
        <small className="text-sm text-red-500 ml-1">{error.message}</small>
      )}
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
