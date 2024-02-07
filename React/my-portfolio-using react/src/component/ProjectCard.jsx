export const ProjectCard = (props) => {
  return (
    <div className="py-8 px-6 bg-[#1a1a1a] rounded-md font-['Inter'] shadow-md ">
      <img src={props.project?.img} />
      <div className="mt-3 flex flex-col gap-4">
        <h1 className="text-slate-300 text-lg font-semibold">
          {props.project?.name}
        </h1>
        <p className="text-slate-400 text-xs font-normal">
          {props.project?.description}
        </p>
        <div className="flex items-center gap-3">
          <button className="px-4 py-1 bg-[#F1875E] text-white text-sm font-semibold rounded-md">
            <a href={props.project?.source} target="_blank">
              Source Code
            </a>
          </button>
          <a
            className="text-[#F1875E] text-sm flex items-center gap-1 font-semibold"
            href={props.project?.live}
            target="_blank"
          >
            <span>Live Site</span>
            <span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24 0V11.0769H20.3077V6.29538L9.98769 16.6154L7.38462 14.0123L17.7046 3.69231H12.9231V0H24ZM16.6154 18.4615C16.6154 18.9512 16.4209 19.4207 16.0747 19.767C15.7284 20.1132 15.2589 20.3077 14.7692 20.3077H5.53846C5.04883 20.3077 4.57926 20.1132 4.23303 19.767C3.88681 19.4207 3.69231 18.9512 3.69231 18.4615V9.23077C3.69231 8.74114 3.88681 8.27156 4.23303 7.92534C4.57926 7.57912 5.04883 7.38462 5.53846 7.38462H9.23077V3.69231H5.53846C4.06957 3.69231 2.66084 4.27582 1.62218 5.31449C0.583515 6.35315 0 7.76188 0 9.23077V18.4615C0 19.9304 0.583515 21.3392 1.62218 22.3778C2.66084 23.4165 4.06957 24 5.53846 24H14.7692C16.2381 24 17.6469 23.4165 18.6855 22.3778C19.7242 21.3392 20.3077 19.9304 20.3077 18.4615V14.7692H16.6154V18.4615Z"
                  fill="#F1875E"
                />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};
