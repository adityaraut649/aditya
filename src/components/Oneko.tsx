"use client";

import { useEffect } from "react";

const nekoSpeed = 10;

const spriteSets = {
  idle: [[-3, -3]],

  alert: [[-7, -3]],

  scratchSelf: [
    [-5, 0],
    [-6, 0],
    [-7, 0],
  ],

  scratchWallN: [
    [0, 0],
    [0, -1],
  ],

  scratchWallS: [
    [-7, -1],
    [-6, -2],
  ],

  scratchWallE: [
    [-2, -2],
    [-2, -3],
  ],

  scratchWallW: [
    [-4, 0],
    [-4, -1],
  ],

  tired: [[-3, -2]],

  sleeping: [
    [-2, 0],
    [-2, -1],
  ],

  N: [
    [-1, -2],
    [-1, -3],
  ],

  NE: [
    [0, -2],
    [0, -3],
  ],

  E: [
    [-3, 0],
    [-3, -1],
  ],

  SE: [
    [-5, -1],
    [-5, -2],
  ],

  S: [
    [-6, -3],
    [-7, -2],
  ],

  SW: [
    [-5, -3],
    [-6, -1],
  ],

  W: [
    [-4, -2],
    [-4, -3],
  ],

  NW: [
    [-1, 0],
    [-1, -1],
  ],
} as const;

type SpriteKey = keyof typeof spriteSets;

export default function Oneko() {
  useEffect(() => {
    const isReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (isReducedMotion) return;

    const nekoEl = document.createElement("div");

    nekoEl.id = "oneko";

    Object.assign(nekoEl.style, {
      width: "32px",
      height: "32px",
      position: "fixed",
      pointerEvents: "auto",
      cursor: "pointer",
      imageRendering: "pixelated",
      left: "16px",
      top: "16px",
      zIndex: "2147483647",
      backgroundImage: "url('/oneko.gif')",
    });

    document.body.appendChild(nekoEl);

    let nekoPosX = 32;
    let nekoPosY = 32;

    let mousePosX = 0;
    let mousePosY = 0;

    let frameCount = 0;

    let idleTime = 0;
    let idleAnimation: SpriteKey | null = null;
    let idleAnimationFrame = 0;

    let lastFrameTimestamp: number | undefined;

    let forcedSleep = false;

    const setSprite = (name: SpriteKey, frame: number) => {
      const sprite = spriteSets[name][frame % spriteSets[name].length];

      nekoEl.style.backgroundPosition = `${sprite[0] * 32}px ${sprite[1] * 32}px`;
    };

    const resetIdleAnimation = () => {
      idleAnimation = null;
      idleAnimationFrame = 0;
    };

    const idle = () => {
      idleTime += 1;

      if (
        idleTime > 10 &&
        (Math.floor(Math.random() * 20) === 0 || idleTime > 60) &&
        idleAnimation === null
      ) {
        const available: SpriteKey[] = ["sleeping", "scratchSelf"];

        if (nekoPosX < 32) available.push("scratchWallW");
        if (nekoPosY < 32) available.push("scratchWallN");

        if (nekoPosX > window.innerWidth - 32) available.push("scratchWallE");

        if (nekoPosY > window.innerHeight - 32) available.push("scratchWallS");

        idleAnimation = available[Math.floor(Math.random() * available.length)];
      }

      switch (idleAnimation) {
        case "sleeping":
          if (idleAnimationFrame < 8) {
            setSprite("tired", 0);
            break;
          }

          setSprite("sleeping", Math.floor(idleAnimationFrame / 4));

          if (idleAnimationFrame > 192) {
            resetIdleAnimation();
          }

          break;

        case "scratchWallN":
        case "scratchWallS":
        case "scratchWallE":
        case "scratchWallW":
        case "scratchSelf":
          setSprite(idleAnimation, idleAnimationFrame);

          if (idleAnimationFrame > 9) {
            resetIdleAnimation();
          }

          break;

        default:
          setSprite("idle", 0);
          return;
      }

      idleAnimationFrame += 1;
    };

    const frame = () => {
      frameCount += 1;

      // Permanent sleep mode
      if (forcedSleep) {
        setSprite("sleeping", Math.floor(idleAnimationFrame / 4));

        idleAnimationFrame += 1;

        return;
      }

      const diffX = nekoPosX - mousePosX;
      const diffY = nekoPosY - mousePosY;

      const distance = Math.sqrt(diffX ** 2 + diffY ** 2);

      if (distance < nekoSpeed || distance < 48) {
        idle();
        return;
      }

      idleAnimation = null;
      idleAnimationFrame = 0;

      if (idleTime > 1) {
        setSprite("alert", 0);

        idleTime = Math.min(idleTime, 7);
        idleTime -= 1;

        return;
      }

      let direction = diffY / distance > 0.5 ? "N" : "";

      direction += diffY / distance < -0.5 ? "S" : "";
      direction += diffX / distance > 0.5 ? "W" : "";
      direction += diffX / distance < -0.5 ? "E" : "";

      setSprite(direction as SpriteKey, frameCount);

      nekoPosX -= (diffX / distance) * nekoSpeed;
      nekoPosY -= (diffY / distance) * nekoSpeed;

      nekoPosX = Math.min(Math.max(16, nekoPosX), window.innerWidth - 16);

      nekoPosY = Math.min(Math.max(16, nekoPosY), window.innerHeight - 16);

      nekoEl.style.left = `${nekoPosX - 16}px`;
      nekoEl.style.top = `${nekoPosY - 16}px`;
    };

    const onAnimationFrame = (timestamp: number) => {
      if (!nekoEl.isConnected) return;

      if (!lastFrameTimestamp) {
        lastFrameTimestamp = timestamp;
      }

      if (timestamp - lastFrameTimestamp > 100) {
        lastFrameTimestamp = timestamp;

        frame();
      }

      window.requestAnimationFrame(onAnimationFrame);
    };

    const onMouseMove = (event: MouseEvent) => {
      if (forcedSleep) return;

      mousePosX = event.clientX;
      mousePosY = event.clientY;
    };

    // Double click to sleep/wake
    const onDoubleClick = () => {
      forcedSleep = !forcedSleep;

      idleAnimationFrame = 0;

      if (!forcedSleep) {
        idleTime = 0;
      }
    };

    document.addEventListener("mousemove", onMouseMove);

    nekoEl.addEventListener("dblclick", onDoubleClick);

    window.requestAnimationFrame(onAnimationFrame);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);

      nekoEl.removeEventListener("dblclick", onDoubleClick);

      nekoEl.remove();
    };
  }, []);

  return null;
}
