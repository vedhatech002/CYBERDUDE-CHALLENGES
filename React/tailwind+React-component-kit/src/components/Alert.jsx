const Alert = (props) => {
  const AlertVariants = {
    success: "border-t-green-500 text-green-500",
    error: "border-t-red-600 text-red-600",
    warning: "border-t-yellow-500 text-yellow-500",
  };
  return (
    <div
      className={
        "bg-slate-800 w-full py-3 px-6 border-t-[6px] rounded-md " +
        AlertVariants[props.alert]
      }
    >
      {props.children ? props.children : <p> {props.description}</p>}
    </div>
  );
};

export default Alert;
