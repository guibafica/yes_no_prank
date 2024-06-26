import { useCallback } from "react";

import { Waves } from "./components/waves";

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

      <div className="bg-slate-100 w-screen h-screen flex items-center justify-center flex-col max-sm:px-4">
        <h1 className="text-slate-200 text-xl font-bold max-sm:text-center">
          Minim consectetur consectetur veniam ipsum velit?
        </h1>

        <div className="flex flex-row w-full items-center justify-center gap-8 mt-10 max-sm:flex-col max-sm:gap-2">
          <button className="bg-green-500 w-40 h-10 rounded-sm transition-all text-2xl font-bold text-slate-900 hover:bg-green-600">
            SIM :)
          </button>

          <button
            id="noButtonId"
            onClick={handleRandomMoveNoButton}
            onMouseEnter={handleRandomMoveNoButton}
            className="bg-red-500 w-40 h-10 rounded-sm transition-all text-2xl font-bold text-slate-900 hover:bg-red-600"
          >
            NÃO :(
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
