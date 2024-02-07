import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <div className="w-full h-fit bg-[#1b1b1d] rounded-md">
      {props.cardImg ? (
        <img className="w-full h-fit" src={props.cardImg} alt="blog1" />
      ) : (
        ""
      )}
      {props.cardTitle ? (
        <h1 className="text-lg font-semibold text-slate-300 my-3 mx-2">
          {props.cardTitle}
        </h1>
      ) : (
        ""
      )}
      {props.cardDesc ? (
        <p className="text-slate-400 text-sm my-3 mx-2">{props.cardDesc}</p>
      ) : (
        ""
      )}
      {props.cardBtn ? (
        <button className="bg-blue-500 text-white px-4 py-1.5 text-sm rounded my-3 mx-2 font-semibold">
          {props.cardBtn}
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default Card;
