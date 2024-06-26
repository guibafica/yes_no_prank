import { useCallback } from "react";
import { Frown, Smile, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { Waves } from "../components/waves";

import questionSvg from "../assets/questionSvg.svg";

export function Home() {
  // https://static.vecteezy.com/system/resources/previews/024/791/093/non_2x/questions-and-answers-find-decision-problem-solving-and-qa-business-decisions-landing-page-isometric-illustration-vector.jpg

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
    <div className="overflow-hidden">
      <Waves />

      <div className="bg-slate-100 w-screen h-screen flex items-center justify-between flex-row max-sm:flex-col">
        <div className="w-2/4 flex flex-col items-center justify-between z-10 pl-36 py-[25%] max-sm:pl-0 max-sm:h-2/4 max-sm:justify-center max-sm:mt-[20%] ">
          <div className="w-full flex flex-col items-start justify-start">
            <h1 className="text-main-text text-left text-8xl font-bold -ml-2">
              Oi,
            </h1>
            {/* gostaria de vir em um date comigo? */}
            <h1 className="text-main-text text-xl font-semibold mt-1 max-sm:mt-0">
              Ea elit elit est commodo cupidatat voluptate?
            </h1>
            {/* Razões para vir em um date comigo u.u */}
            <h1 className="text-main-text text-sm font-semibold mt-10">
              Ea elit elit est commodo cupidatat voluptate? 😌
            </h1>
            {/* 
            Caso esteja se perguntando quais as vantagens de sair comigo, são
              várias 😎. Sou um cara romântico e super educando 🥰, vou lhe
              tratar igual uma princesa 👑. Vamos ir passear em lugares bonitos,
              e eu tentarei sempre te fazer rir 😄! Claro que não esquecerei a
              comida 🍔, vou escolher algo bem especial para gente comer. Também
              terei o cuidado de ir te buscar em casa e te levar de volta em
              segurança 🚗.
            */}
            <p className="text-slate-600 text-sm font-thin mt-1x">
              Incididunt fugiat fugiat id non minim velit cupidatat occaecat
              enim qui commodo pariatur. Voluptate tempor exercitation veniam
              culpa occaecat laborum sunt dolor aliqua qui eu nulla laborum ea.
              Veniam non nisi tempor anim ex mollit exercitation sint. Proident
              elit id non ipsum. In deserunt tempor reprehenderit cillum non
              cillum ut magna exercitation do proident. Ex do culpa officia sint
              adipisicing cillum. Nisi occaecat ex esse proident nostrud cillum
              sint ullamco irure consequat exercitation elit ad.
            </p>
          </div>

          <div className="flex flex-row w-full items-center justify-start gap-8 mt-32 max-sm:mt-8">
            <button
              onClick={handleClickOnYesButton}
              className="flex flex-row items-center justify-center bg-green-500 w-40 h-10 rounded-lg transition-all text-2xl font-bold text-slate-100 shadow-lg hover:bg-green-600 hover:shadow-xl"
            >
              SIM <Smile className="ml-2" />
            </button>

            <button
              id="noButtonId"
              onClick={handleRandomMoveNoButton}
              onMouseEnter={handleRandomMoveNoButton}
              className="flex flex-row items-center justify-center bg-main-red w-40 h-10 rounded-lg transition-all text-2xl font-bold text-slate-100 shadow-lg hover:bg-red-600 hover:shadow-xl"
            >
              NÃO <Frown className="ml-2" />
            </button>
          </div>
        </div>

        <div className="w-2/4 h-full flex flex-col items-center justify-center  pr-10 max-sm:h-2/4 max-sm:pr-0 max-sm:w-full ">
          <img src={questionSvg} alt="question svg" className="w-4/5 ml-10 " />
        </div>
      </div>
    </div>
  );
}
