import React, { useState, useEffect } from "react";

interface TypewriterProps {
  text: string;
  delay: number;
  initialDelay?: number;
}

const Typewriter: React.FC<TypewriterProps> = ({
  text,
  delay,
  initialDelay = 0,
}) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [isTypingStarted, setIsTypingStarted] = useState(false);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    if (!isTypingStarted) {
      const startTimeout = setTimeout(() => {
        setIsTypingStarted(true);
      }, initialDelay);

      return () => clearTimeout(startTimeout);
    }

    if (isTypingStarted && currentIndex < text.length) {
      const randomDelay = delay + (Math.random() - 0.4) * delay;

      const typingTimeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, randomDelay);

      return () => clearTimeout(typingTimeout);
    }
  }, [currentIndex, delay, text, initialDelay, isTypingStarted]);

  return (
    <span>
      {currentText}
      <span className="cursor" style={{ opacity: showCursor ? 1 : 0 }}>
        |
      </span>
    </span>
  );
};

export default Typewriter;
