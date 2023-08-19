import React from "react";

interface Props {
  options: string[];
  name: string;
}

const RadioOptions: React.FC<Props> = ({ options, name }) => {
  return (
    <div className="w-full max-w-lg text-white pl-2 pr-6">
      {options.map((optionText, idx) => (
        <label key={idx} className="block mt-3">
          <div className="flex items-start">
            <div
              style={{ width: "40px" }}
              className="flex items-center justify-end pr-2 mt-1"
            >
              <input
                type="radio"
                name={name}
                value={String.fromCharCode(65 + idx)}
              />
            </div>
            <span className="pr-1 uppercase">
              {String.fromCharCode(97 + idx)}.
            </span>
            <span className="flex-1">{optionText}</span>
          </div>
        </label>
      ))}
    </div>
  );
};

export default RadioOptions;
