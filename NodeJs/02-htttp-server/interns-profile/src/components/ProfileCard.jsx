const ProfileCard = (props) => {
  const { name, github } = props.internsData;

  return (
    <section className="bg-white shadow-lg p-6 rounded-md">
      <div className="flex justify-center">
        <img
          className="rounded-full object-cover size-28 border-4 border-[#0dba4b]"
          src={github + ".png"}
          alt=""
        />
      </div>

      <div className="flex flex-col items-center justify-center gap-4 mt-2">
        <div className="flex flex-col items-center gap-1">
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-xs font-normal">FullStack devloper</p>
        </div>
        <div className="flex items-center gap-3">
          <a
            href={github}
            target="_blank"
            className="border-[#0dba4b] border-2 font-inter text-black text-sm font-semibold px-4 py-1 rounded-md flex items-center gap-1"
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 16 16"
                id="github"
              >
                <path d="M7.999 0C3.582 0 0 3.596 0 8.032a8.031 8.031 0 0 0 5.472 7.621c.4.074.546-.174.546-.387 0-.191-.007-.696-.011-1.366-2.225.485-2.695-1.077-2.695-1.077-.363-.928-.888-1.175-.888-1.175-.727-.498.054-.488.054-.488.803.057 1.225.828 1.225.828.714 1.227 1.873.873 2.329.667.072-.519.279-.873.508-1.074-1.776-.203-3.644-.892-3.644-3.969 0-.877.312-1.594.824-2.156-.083-.203-.357-1.02.078-2.125 0 0 .672-.216 2.2.823a7.633 7.633 0 0 1 2.003-.27 7.65 7.65 0 0 1 2.003.271c1.527-1.039 2.198-.823 2.198-.823.436 1.106.162 1.922.08 2.125.513.562.822 1.279.822 2.156 0 3.085-1.87 3.764-3.652 3.963.287.248.543.738.543 1.487 0 1.074-.01 1.94-.01 2.203 0 .215.144.465.55.386A8.032 8.032 0 0 0 16 8.032C16 3.596 12.418 0 7.999 0z"></path>
              </svg>
            </span>
            Profile
          </a>

          <a
            target="_blank"
            href={github + "?tab=repositories"}
            className="bg-[#0dba4b] border-[#0dba4b] border-2 font-inter text-white text-sm font-semibold px-5 py-1 rounded-md flex items-center gap-1"
          >
            <span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 92 114"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M76 67C61.1667 67 31.1 67 27.5 67C23 67 16 68 15 75.5"
                  stroke="currentcolor"
                  stroke-width="10"
                />
                <path
                  d="M29 82C29 80.8954 29.8954 80 31 80H49C50.1046 80 51 80.8954 51 82V101.89C51 102.733 50.0197 103.198 49.3668 102.664L41.2665 96.0362C40.5298 95.4334 39.4703 95.4334 38.7335 96.0362L30.6332 102.664C29.9803 103.198 29 102.733 29 101.89V82Z"
                  fill="currentcolor"
                />
                <path
                  d="M62 87L75 87C75.5523 87 76 86.5523 76 86L76 17C76 16.4477 75.5523 16 75 16L28 16C18.5 16 15 23 15 28C15 43.8334 15 59.6667 15 75.5C15 78.6619 16.3997 82.6236 19.8312 85.1091"
                  stroke="currentcolor"
                  stroke-width="10"
                  stroke-linecap="round"
                />
              </svg>
            </span>
            repos
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProfileCard;
