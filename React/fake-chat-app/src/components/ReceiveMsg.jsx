export const ReceiveMsg = (props) => {
  return (
    <div
      className="jackie-message bg-white mt-2 w-fit px-2  rounded-tr-lg 
rounded-br-lg rounded-bl-lg me-auto flex mb-8 "
    >
      {/* <!-- chat tail --> */}
      <div className="relative">
        <svg
          viewBox="0 0 8 13"
          height="13"
          width="8"
          preserveAspectRatio="xMidYMid meet"
          version="1.1"
          x="0px"
          y="0px"
          className="absolute right-[0.4rem]"
        >
          <path
            opacity="0.13"
            fill="red"
            d="M1.533,3.568L8,12.193V1H2.812 C1.042,1,0.474,2.156,1.533,3.568z"
          ></path>
          <path
            fill="white"
            d="M1.533,2.568L8,11.193V0L2.812,0C1.042,0,0.474,1.156,1.533,2.568z"
          ></path>
        </svg>
      </div>
      <div className="flex items-center ">
        <div className="text-xs text-black">{props.msg}</div>
        <div className="text-[8px]  pt-4 pb-0.5 flex gap-x-2">
          <span className="text-[#128c7e]"> &nbsp; 12:13 pm</span>
        </div>
      </div>
    </div>
  );
};
