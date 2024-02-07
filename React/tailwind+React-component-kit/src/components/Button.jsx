const Button = (props) => {
  const varaiants = {
    primary: "bg-blue-500 text-white",
    success: "bg-green-500 text-white",
    error: "bg-red-500 text-white",
    warning: "bg-yellow-500 text-white",
  };

  return (
    <button
      className={` px-4 py-1.5  rounded-md  ${varaiants[props.btnVariant]}`}
    >
      {props.children ? props.children : props.btnName}
    </button>
  );
};

export default Button;
