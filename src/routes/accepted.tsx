import { useEffect, useRef } from "react";
import { PartyPopper } from "lucide-react";

import { Waves } from "../components/waves";

import dogGif from "../assets/dogGif.gif";
import romanticMusic from "../assets/romanticMusic.mp3";

export function Accepted() {
  const audioRef = useRef(null);

  useEffect(() => {
    // @ts-expect-error unknown type
    if (audioRef.current) audioRef.current.play();
  }, []);

  return (
    <div className="overflow-hidden">
      <Waves />

      {/* <audio ref={audioRef}>
        <source src={romanticMusic} type="audio/mp3" />
      </audio> */}

      <div className="bg-slate-100 w-screen h-screen flex items-center justify-center flex-col">
        <div className="size-64 z-10 shadow-2xl rounded-full overflow-hidden flex items-center justify-center">
          <img src={dogGif} className="w-full" />
        </div>

        <h1 className="text-main-text text-3xl font-semibold mt-20 flex flex-row items-center justify-center gap-4 z-10 text-center max-sm:w-11/12">
          <PartyPopper color="#F2575F" size={50} />
          😉 Sabia que iria escolher SIM 😏
          <PartyPopper color="#F2575F" size={50} />
        </h1>
        {/* Então agora estamos oficialmente saindo 💐. Se arrume bem linda, (não
        que seja possível você ficar mais linda ainda 😍), que mais tarde eu
        estou passando ai pra te buscar 😎. */}
        <p className="text-slate-700 text-base font-thin mt-6 w-3/4 z-10 max-sm:text-center max-sm:w-11/12">
          Non ad veniam tempor anim fugiat eu sunt fugiat nulla amet in culpa.
          Proident nisi ex deserunt irure ut laboris id aliqua excepteur in
          eiusmod nisi sunt. Ipsum labore nisi culpa aliquip elit enim sint
          commodo. Tempor et amet irure ipsum sint ad quis exercitation minim.
          Est nisi aliqua ullamco ipsum fugiat est aliquip aliquip quis. In ea
          aliquip id pariatur nisi reprehenderit consequat laborum laborum
          commodo aliquip sint. Est minim magna cupidatat et.
        </p>
      </div>
    </div>
  );
}
