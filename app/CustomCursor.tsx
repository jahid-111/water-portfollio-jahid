"use client";

import { useEffect, useRef } from "react";

const INTERACTIVE =
  'a, button, summary, label, select, input, textarea, [role="button"], [data-cursor="hover"]';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const supportsMouse = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    ).matches;

    if (!supportsMouse) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const root = document.documentElement;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    root.classList.add("has-custom-cursor");

    let targetX = 0;
    let targetY = 0;
    let ringX = 0;
    let ringY = 0;
    let animationFrame = 0;
    let hasMoved = false;

    const moveElement = (element: HTMLElement, x: number, y: number) => {
      element.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };

    const animateRing = () => {
      animationFrame = 0;

      const easing = reduceMotion ? 1 : 0.16;
      const dx = targetX - ringX;
      const dy = targetY - ringY;

      ringX += dx * easing;
      ringY += dy * easing;

      moveElement(ring, ringX, ringY);

      if (Math.abs(dx) > 0.1 || Math.abs(dy) > 0.1) {
        animationFrame = requestAnimationFrame(animateRing);
      }
    };

    const setVisibility = (visible: boolean) => {
      dot.classList.toggle("is-visible", visible);
      ring.classList.toggle("is-visible", visible);
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;

      targetX = event.clientX;
      targetY = event.clientY;

      moveElement(dot, targetX, targetY);

      if (!hasMoved) {
        hasMoved = true;
        ringX = targetX;
        ringY = targetY;
        moveElement(ring, ringX, ringY);
        setVisibility(true);
      }

      if (!animationFrame) {
        animationFrame = requestAnimationFrame(animateRing);
      }
    };

    const handlePointerOver = (event: PointerEvent) => {
      const target = event.target;
      const isInteractive =
        target instanceof Element && target.closest(INTERACTIVE) !== null;

      ring.classList.toggle("is-hover", isInteractive);
      dot.classList.toggle("is-hover", isInteractive);
    };

    const handlePointerDown = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;

      ring.classList.add("is-down");
      if (reduceMotion) return;

      const ripple = document.createElement("div");
      ripple.className = "cursor-ripple";
      ripple.style.left = `${event.clientX}px`;
      ripple.style.top = `${event.clientY}px`;

      document.body.appendChild(ripple);

      const removeRipple = () => ripple.remove();
      ripple.addEventListener("animationend", removeRipple, { once: true });
      window.setTimeout(removeRipple, 900);
    };

    const handlePointerUp = () => {
      ring.classList.remove("is-down");
    };

    const handleMouseLeave = () => {
      setVisibility(false);
    };

    const handleMouseEnter = () => {
      if (hasMoved) setVisibility(true);
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    document.addEventListener("pointerover", handlePointerOver, { passive: true });
    window.addEventListener("pointerdown", handlePointerDown, { passive: true });
    window.addEventListener("pointerup", handlePointerUp, { passive: true });
    window.addEventListener("pointercancel", handlePointerUp, { passive: true });
    root.addEventListener("mouseleave", handleMouseLeave);
    root.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("pointerover", handlePointerOver);
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointerup", handlePointerUp);
      window.removeEventListener("pointercancel", handlePointerUp);
      root.removeEventListener("mouseleave", handleMouseLeave);
      root.removeEventListener("mouseenter", handleMouseEnter);

      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }

      root.classList.remove("has-custom-cursor");
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className="cursor-ring" aria-hidden="true">
        <span />
      </div>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true">
        <span />
      </div>
    </>
  );
}