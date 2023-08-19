import React from 'react';

interface TextBoxProps {
  children: React.ReactNode;
}

const TextBox: React.FC<TextBoxProps> = ({ children }) => {
  return (
    <div className="p-4 m-6 bg-black bg-opacity-50 border border-customGrey font-mono ">
      {children}
    </div>
  );
};

export default TextBox;

