import React from "react";

interface TextBoxProps {
  children: React.ReactNode;
  className?: string; 
  style?: React.CSSProperties; 
}

const TextBox: React.FC<TextBoxProps> = ({
  children,
  className = "",
  style,
}) => {
  return (
    <div
      className={`p-4 m-6 bg-black bg-opacity-50 border border-customGrey font-mono ${className}`}
      style={style}
    >
      {children}
    </div>
  );
};

export default TextBox;
