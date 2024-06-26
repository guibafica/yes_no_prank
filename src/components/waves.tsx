import wave1 from "../assets/wave1.svg";
import wave2 from "../assets/wave2.svg";
import wave3 from "../assets/wave3.svg";

export function Waves() {
  return (
    <>
      {/* wave 1 */}
      <div
        style={{ borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%" }}
        className="size-96 bg-waves-bg absolute -top-80 rotate-90"
      />

      {/* wave 2 */}
      <div
        className="w-[1000px] h-[400px] absolute rotate-90 -left-[500px] bottom-0"
        style={{
          backgroundImage: `url(${wave1})`,
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* <div className="w-screen h-screen relative overflow-hidden">
        <div
          className="w-[600px] h-56 absolute -right-52 top-0"
          style={{
            backgroundImage: `url(${wave2})`,
            backgroundRepeat: "no-repeat",
          }}
        />
      </div> */}

      {/* wave 3 */}
      <div
        className="w-[600px] h-56 absolute -right-52 top-0"
        style={{
          backgroundImage: `url(${wave2})`,
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* wave 4 */}
      <div
        className="w-[600px] h-56 rotate-90 absolute -right-48"
        style={{
          backgroundImage: `url(${wave3})`,
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* wave 5 */}
      <div className="size-96 bg-waves-bg absolute -bottom-72 right-0 rotate-90 rounded-full" />
    </>
  );
}
