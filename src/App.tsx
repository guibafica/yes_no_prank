import { useCallback } from "react";
import { Frown, Smile } from "lucide-react";

import { Waves } from "./components/waves";

import questionSvg from "./assets/questionSvg.svg";

function App() {
  // https://static.vecteezy.com/system/resources/previews/024/791/093/non_2x/questions-and-answers-find-decision-problem-solving-and-qa-business-decisions-landing-page-isometric-illustration-vector.jpg

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

  return (
    <div className="overflow-hidden">
      <Waves />

      <div className="bg-slate-100 w-screen h-screen flex items-center justify-between flex-row">
        <div className="w-2/4 h-full flex flex-col items-center justify-between pl-36 py-[25%]">
          <div className="w-full flex flex-col items-start justify-start">
            <h1 className="text-main-text text-left text-8xl font-bold -ml-2">
              Oi,
            </h1>

            <h1 className="text-main-text text-xl font-semibold mt-1">
              Ea elit elit est commodo cupidatat voluptate?
            </h1>

            <p className="text-slate-600 text-sm font-thin mt-8">
              Non ad veniam tempor anim fugiat eu sunt fugiat nulla amet in
              culpa. Proident nisi ex deserunt irure ut laboris id aliqua
              excepteur in eiusmod nisi sunt. Ipsum labore nisi culpa aliquip
              elit enim sint commodo. Tempor et amet irure ipsum sint ad quis
              exercitation minim. Est nisi aliqua ullamco ipsum fugiat est
              aliquip aliquip quis. In ea aliquip id pariatur nisi reprehenderit
              consequat laborum laborum commodo aliquip sint. Est minim magna
              cupidatat et.
            </p>
          </div>

          <div className="flex flex-row w-full items-center justify-start gap-8 mt-32">
            <button className="flex flex-row items-center justify-center bg-green-500 w-40 h-10 rounded-lg transition-all text-2xl font-bold text-slate-100 hover:bg-green-600 hover:shadow-xl">
              SIM <Smile className="ml-2" />
            </button>

            <button
              id="noButtonId"
              onClick={handleRandomMoveNoButton}
              onMouseEnter={handleRandomMoveNoButton}
              className="flex flex-row items-center justify-center bg-main-red w-40 h-10 rounded-lg transition-all text-2xl font-bold text-slate-100 hover:bg-red-600 hover:shadow-xl"
            >
              NÃO <Frown className="ml-2" />
            </button>
          </div>
        </div>

        <div className="w-2/4 h-full flex flex-col items-center justify-center pr-10 ">
          <img src={questionSvg} alt="question svg" className="" />
        </div>
      </div>
    </div>
  );
}

export default App;
