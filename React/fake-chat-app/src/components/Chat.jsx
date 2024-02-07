import { useState } from "react";
import { SendMsg } from "./SendMsg";
import { ReceiveMsg } from "./ReceiveMsg";

export const Chat = () => {
  const [msgs, setMsgs] = useState([]);

  return (
    <section className=" max-w-md mx-auto h-[800px]">
      <div className="bg-[#075e54] text-white  flex px-3 py-3  items-center justify-between">
        {/* <!-- wrapping profile details --> */}
        <div className="wrap-profile-desc flex gap-x-2 items-center">
          {/* <!-- back icon --> */}
          <a href="./index.html" className="back_icon text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="white"
                d="M20 11H7.83l5.59-5.59L12 4l-8 8l8 8l1.41-1.41L7.83 13H20v-2z"
              />
            </svg>
          </a>
          {/* <!-- profile picture --> */}
          <div className="">
            <img
              className="rounded-full w-8 h-8 object-cover"
              src="/profile.png"
              alt="jackie"
            />
          </div>
          {/* <!-- profile name --> */}
          <div className="">
            <p className="text-lg">user</p>
          </div>
        </div>

        {/* <!-- wrapping menus  --> */}
        <div className="wrap-profile-options flex items-center gap-x-4">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="23"
              viewBox="0 0 24 24"
            >
              <path
                fill="white"
                d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l2.29 2.29c.63.63 1.71.18 1.71-.71V8.91c0-.89-1.08-1.34-1.71-.71L17 10.5z"
              />
            </svg>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="white"
                d="m19.23 15.26l-2.54-.29a1.99 1.99 0 0 0-1.64.57l-1.84 1.84a15.045 15.045 0 0 1-6.59-6.59l1.85-1.85c.43-.43.64-1.03.57-1.64l-.29-2.52a2.001 2.001 0 0 0-1.99-1.77H5.03c-1.13 0-2.07.94-2 2.07c.53 8.54 7.36 15.36 15.89 15.89c1.13.07 2.07-.87 2.07-2v-1.73c.01-1.01-.75-1.86-1.76-1.98z"
              />
            </svg>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="white"
                d="M12 20q-.825 0-1.413-.588T10 18q0-.825.588-1.413T12 16q.825 0 1.413.588T14 18q0 .825-.588 1.413T12 20Zm0-6q-.825 0-1.413-.588T10 12q0-.825.588-1.413T12 10q.825 0 1.413.588T14 12q0 .825-.588 1.413T12 14Zm0-6q-.825 0-1.413-.588T10 6q0-.825.588-1.413T12 4q.825 0 1.413.588T14 6q0 .825-.588 1.413T12 8Z"
              />
            </svg>
          </div>
        </div>
      </div>
      {/* <!-- ====================chat Area====================== --> */}
      <section className="chat-area  bg-chatarea-background bg-contain xl:px-4 xl:py-4 lg:px-4 lg:py-3 md:px-4 md:pt-3 md:pb-5 sm:px-3 sm:pt-3 sm:pb-5 px-3 pt-3 pb-8 overscroll-auto overflow-y-auto w-auto lg:h-[594px] md:h-[700px] sm:h-[700px] h-[700px] no-scrollbar relative">
        {msgs.map((msg, index) => {
          if (index % 2 == 0) {
            return <ReceiveMsg msg={msg} />;
          } else {
            return <SendMsg msg={msg} />;
          }
        })}
      </section>
      {/* input box */}
      <form className="  flex justify-start gap-x-1  fixed top-[44.5rem]  lg:top-[35.5rem] sm:w-[425px] w-[360px]  ml-3">
        <div className="flex-1 relative ">
          <input
            id="inputmsg"
            type="text"
            placeholder=" enter msg here"
            className="border py-2 pr-[100px] pl-[50px] w-full rounded-full outline-none bg-white text-b lack text-sm"
          />
          <div className="absolute top-0 left-2 py-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 24 24"
            >
              <path
                fill="grey"
                d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM8.5 8c.83 0 1.5.67 1.5 1.5S9.33 11 8.5 11S7 10.33 7 9.5S7.67 8 8.5 8zm8.25 6.75c-.95 1.64-2.72 2.75-4.75 2.75s-3.8-1.11-4.75-2.75c-.19-.33.06-.75.44-.75h8.62c.39 0 .63.42.44.75zM15.5 11c-.83 0-1.5-.67-1.5-1.5S14.67 8 15.5 8s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z"
              ></path>
            </svg>
          </div>

          {/* <!-- ! Chat Right Emojis --> */}
          <div className="flex gap-x-4 absolute right-0 top-0 py-2 px-4 ml-4">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 24 24"
              >
                <g fill="none" fill-rule="evenodd">
                  <path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z"></path>
                  <path
                    fill="grey"
                    d="M18.71 17.565a4.25 4.25 0 0 0 0-6.01l-6.54-6.54A1 1 0 0 1 13.584 3.6l6.54 6.54a6.25 6.25 0 1 1-8.838 8.84l-7.954-7.955A4.501 4.501 0 0 1 9.698 4.66l7.953 7.953a2.752 2.752 0 0 1-3.892 3.891L6.513 9.257a1 1 0 0 1 1.414-1.415l7.247 7.247a.751.751 0 0 0 1.063-1.062L8.284 6.074A2.501 2.501 0 0 0 4.746 9.61l7.954 7.954a4.25 4.25 0 0 0 6.01 0Z"
                  ></path>
                </g>
              </svg>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 24 24"
              >
                <path
                  fill="grey"
                  d="M12 18q2.075 0 3.538-1.462Q17 15.075 17 13q0-2.075-1.462-3.538Q14.075 8 12 8Q9.925 8 8.463 9.462Q7 10.925 7 13q0 2.075 1.463 3.538Q9.925 18 12 18Zm0-2q-1.25 0-2.125-.875T9 13q0-1.25.875-2.125T12 10q1.25 0 2.125.875T15 13q0 1.25-.875 2.125T12 16Zm6-6q.425 0 .712-.288Q19 9.425 19 9t-.288-.713Q18.425 8 18 8t-.712.287Q17 8.575 17 9t.288.712Q17.575 10 18 10ZM4 21q-.825 0-1.412-.587Q2 19.825 2 19V7q0-.825.588-1.412Q3.175 5 4 5h3.15L8.7 3.325q.15-.15.337-.238Q9.225 3 9.425 3h5.15q.2 0 .388.087q.187.088.337.238L16.85 5H20q.825 0 1.413.588Q22 6.175 22 7v12q0 .825-.587 1.413Q20.825 21 20 21Z"
                ></path>
              </svg>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="bg-[#128c7e] flex justify-center text-white items-center w-10 h-10 rounded-full"
          onClick={(e) => {
            const inputMSgEl = document.getElementById("inputmsg");
            e.preventDefault();
            console.log(inputMSgEl?.value);
            // msgArr.push(inputMSgEl?.value);
            // console.log(msgArr);
            setMsgs([...msgs, inputMSgEl?.value]);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18a1 1 0 0 0 0-1.69L9.54 5.98A.998.998 0 0 0 8 6.82"
            />
          </svg>
        </button>
      </form>
    </section>
  );
};
