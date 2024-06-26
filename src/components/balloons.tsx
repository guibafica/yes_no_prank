import { useEffect, useCallback } from "react";

export function Balloons() {
  // function random(num: number) {
  //   return Math.floor(Math.random() * num);
  // }
  const random = useCallback((num: number) => {
    return Math.floor(Math.random() * num);
  }, []);

  // function getRandomStyles() {
  //   const r = random(255);
  //   const g = random(255);
  //   const b = random(255);
  //   const mt = random(200);
  //   const ml = random(50);
  //   const dur = random(5) + 5;

  //   return `
  //   background-color: rgba(${r},${g},${b},0.7);
  //   color: rgba(${r},${g},${b},0.7);
  //   box-shadow: inset -7px -3px 10px rgba(${r - 10},${g - 10},${b - 10},0.7);
  //   margin: ${mt}px 0 0 ${ml}px;
  //   animation: float ${dur}s ease-in infinite
  //   `;
  // }

  const getRandomStyles = useCallback(() => {
    const r = random(255);
    const g = random(255);
    const b = random(255);
    const mt = random(200);
    const ml = random(50);
    const dur = random(5) + 5;

    return `
    background-color: rgba(${r},${g},${b},0.7);
    color: rgba(${r},${g},${b},0.7); 
    box-shadow: inset -7px -3px 10px rgba(${r - 10},${g - 10},${b - 10},0.7);
    margin: ${mt}px 0 0 ${ml}px;
    animation: float ${dur}s ease-in infinite
    `;
  }, [random]);

  const createBalloons = useCallback(
    (num: number) => {
      for (let i = num; i > 0; i--) {
        const balloonContainer = document.getElementById("balloon-container")!;

        const balloon = document.createElement("div");

        balloon.className = "balloon";
        balloon.style.cssText = getRandomStyles();
        balloonContainer.append(balloon);
      }
    },
    [getRandomStyles]
  );

  // function createBalloons(num) {
  //   for (let i = num; i > 0; i--) {
  //     const balloonContainer = document.getElementById("balloon-container")!;

  //     const balloon = document.createElement("div");

  //     balloon.className = "balloon";
  //     balloon.style.cssText = getRandomStyles();
  //     balloonContainer.append(balloon);
  //   }
  // }

  // function removeBalloons() {
  //   const balloonContainer = document.getElementById("balloon-container")!;

  //   console.log("ID: ", balloonContainer);

  //   // balloonContainer.style.opacity = 0;
  //   balloonContainer.style.opacity = "0";

  //   setTimeout(() => {
  //     balloonContainer.remove();
  //   }, 500);
  // }

  // window.addEventListener("load", () => {
  //   createBalloons(30);
  // });

  // window.addEventListener("click", () => {
  //   removeBalloons();
  // });
  useEffect(() => {
    createBalloons(30);
  }, [createBalloons]);

  return (
    <>
      <div id="balloon-container" />
    </>
  );
}
