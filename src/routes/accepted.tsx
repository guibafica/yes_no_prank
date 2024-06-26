import { useEffect, useRef } from "react";
import { PartyPopper } from "lucide-react";

import { Waves } from "../components/waves";
import { Balloons } from "../components/balloons";

import dogGif from "../assets/dogGif.gif";
import romanticMusic from "../assets/romanticMusic.mp3";

export function Accepted() {
  const audioRef = useRef(null);

  useEffect(() => {
    // @ts-expect-error unknown type
    if (audioRef.current) audioRef.current.play();
  }, []);

  return (
    <>
      <div className="overflow-hidden relative">
        <Waves />
        <Balloons />

        <audio ref={audioRef}>
          <source src={romanticMusic} type="audio/mp3" />
        </audio>

        <div className="bg-slate-100 w-screen h-screen flex items-center justify-center flex-col">
          <div className="size-64 z-10 shadow-2xl rounded-full overflow-hidden flex items-center justify-center">
            <img src={dogGif} className="w-full" />
          </div>

          <div className="flex flex-row items-center justify-center mt-20 z-10 max-sm:w-11/12">
            <PartyPopper color="#F2575F" size={50} />
            <h1 className="text-3xl ml-1 mr-4">😉</h1>

            <h1 className="text-main-text text-3xl font-semibold text-center">
              Sabia que iria escolher SIM
            </h1>

            <h1 className="text-3xl  ml-4 mr-1">😏</h1>
            <PartyPopper color="#F2575F" size={50} />
          </div>

          <p className="text-slate-700 text-base font-thin mt-6 w-2/4 z-10 max-sm:text-center max-sm:w-11/12">
            Então agora estamos oficialmente saindo 💐
          </p>

          <p className="text-slate-700 text-base font-thin w-2/4 z-10 max-sm:text-center max-sm:w-11/12">
            Se arrume bem linda, (não que seja possível você ficar mais linda
            ainda 😍), pois mais tarde eu estou passando ai pra te buscar 😎
          </p>
        </div>
      </div>
    </>
  );
}
