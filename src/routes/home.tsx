import { useCallback } from "react";
import { Frown, Smile } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { Waves } from "../components/waves";

import questionSvg from "../assets/questionSvg.svg";

export function Home() {
  const navigate = useNavigate();

  const handleRandomMoveNoButton = useCallback(() => {
    const noButtonElement = document.getElementById("noButtonId")!;
    const screenHeight = document.documentElement.clientHeight;
    const screenWidth = document.documentElement.clientWidth;

    const randomY = Math.floor(Math.random() * screenHeight + 1);
    const randomX = Math.floor(Math.random() * screenWidth + 1);

    noButtonElement.style.position = "absolute";

    noButtonElement.style.top = randomY + "px";
    noButtonElement.style.right = randomX + "px";
  }, []);

  const handleClickOnYesButton = useCallback(() => {
    navigate("/accepted");
  }, [navigate]);

  return (
    <div className="relative overflow-hidden">
      <Waves />

      <div className="bg-slate-100 w-screen h-screen flex items-center justify-between flex-row max-sm:flex-col max-sm:pt-4">
        <div className="w-2/4 flex flex-col items-center justify-between z-10 pl-36 py-[25%] max-sm:pl-0 max-sm:h-3/4 max-sm:justify-center max-sm:mt-[20%]">
          <div className="w-full flex flex-col items-start justify-start">
            <h1 className="text-main-text text-left text-8xl font-bold -ml-2">
              Hii,
            </h1>

            <h1 className="text-main-text text-2xl font-semibold mt-1 max-sm:mt-0">
              Non incididunt anim qui ut laborum? 😏
            </h1>

            <h1 className="text-main-text text-sm font-semibold mt-10">
              Pariatur est ullamco consequat nostrud ex excepteur 😌
            </h1>

            <p className="text-slate-600 text-sm font-thin mt-1">
              Cillum ullamco veniam amet id qui adipisicing duis excepteur enim
              tempor adipisicing occaecat. Minim officia dolor exercitation
              laboris. Ex in enim officia occaecat officia nulla. Et magna
              deserunt commodo cupidatat consectetur irure in. Enim nulla ut ea
              veniam eu ex excepteur enim dolor amet. Aliquip dolor irure ut
              culpa consectetur.
            </p>
          </div>

          <div className="flex flex-row w-full items-center justify-start gap-8 mt-32 max-sm:mt-8 max-sm:flex-col max-sm:gap-2">
            <button
              onClick={handleClickOnYesButton}
              className="flex flex-row items-center justify-center bg-green-500 w-40 h-10 rounded-lg transition-all text-2xl font-bold text-slate-100 shadow-lg hover:bg-green-600 hover:shadow-xl max-sm:w-52"
            >
              YES <Smile className="ml-2" />
            </button>

            <button
              id="noButtonId"
              onClick={handleRandomMoveNoButton}
              onMouseEnter={handleRandomMoveNoButton}
              className="flex z-20 flex-row items-center justify-center bg-main-red w-40 h-10 rounded-lg transition-all text-2xl font-bold text-slate-100 shadow-lg hover:bg-red-600 hover:shadow-xl max-sm:w-52"
            >
              NO <Frown className="ml-2" />
            </button>
          </div>
        </div>

        <div className="w-2/4 h-full flex flex-col items-center justify-center  pr-10 max-sm:h-1/4 max-sm:pr-0 max-sm:w-full">
          <img
            src={questionSvg}
            alt="question svg"
            className="w-4/5 ml-10 max-sm:w-2/5"
          />
        </div>
      </div>
    </div>
  );
}
