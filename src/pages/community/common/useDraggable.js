import { useState, useEffect, useRef } from "react";

const useDraggable = (initialX, initialY) => {
  const [pos, setPos] = useState({ x: initialX, y: initialY });
  const stateRef = useRef({
    dragging: false,
    wasDragged: false,
    offsetX: 0,
    offsetY: 0,
    posX: initialX,
    posY: initialY,
  });

  useEffect(() => {
    const onMouseMove = (e) => {
      const s = stateRef.current;
      if (!s.dragging) return;
      s.wasDragged = true;
      const newX = e.clientX - s.offsetX;
      const newY = Math.max(0, e.clientY - s.offsetY);
      s.posX = newX;
      s.posY = newY;
      setPos({ x: newX, y: newY });
    };

    const onMouseUp = () => {
      stateRef.current.dragging = false;
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };
  }, []);

  const onDragHandleMouseDown = (e) => {
    if (e.button !== 0) return;
    const s = stateRef.current;
    s.dragging = true;
    s.wasDragged = false;
    s.offsetX = e.clientX - s.posX;
    s.offsetY = e.clientY - s.posY;
    e.preventDefault();
  };

  return { pos, stateRef, onDragHandleMouseDown };
};

export default useDraggable;
