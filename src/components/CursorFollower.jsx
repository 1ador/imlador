import { useEffect, useRef, useState } from "react";

export default function CursorFollower() {
  const cursorRef = useRef(null);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const move = (e) => {
      const { clientX, clientY } = e;
      cursorRef.current.style.transform = `translate3d(${clientX}px, ${clientY}px, 0) translate(-50%, -50%)`;
    };
    const click = () => {
      setClicked(true);
      setTimeout(() => setClicked(false), 150);
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", click);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", click);
    };
  }, []);

  return (
    <div className={`cursor-follower ${clicked ? "clicked" : ""}`} ref={cursorRef}></div>
  );
}