export const SendMsg = (props) => {
  return (
    <div
      className="jackieson-message bg-[#dcf8c6] mt-2 w-fit px-2  rounded-tl-lg 
 rounded-br-lg rounded-bl-lg ms-auto flex py-1 "
    >
      <div className="flex items-center">
        <div className="text-xs text-black">{props.msg}</div>
        <div className="text-[8px]  pt-4 pb-0.5 flex gap-x-2">
          <span className="text-[#128c7e]"> &nbsp;</span>
          <span>
            <svg
              className="text-blue-400"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
            >
              <path
                fill="#03a9f4"
                d="m18 7l-1.41-1.41l-6.34 6.34l1.41 1.41L18 7zm4.24-1.41L11.66 16.17L7.48 12l-1.41 1.41L11.66 19l12-12l-1.42-1.41zM.41 13.41L6 19l1.41-1.41L1.83 12L.41 13.41z"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};
