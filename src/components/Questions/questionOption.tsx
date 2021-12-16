import React from "react";

type QuestionOptionType = {
  percent: number;
  option: string;
  isAnswered: boolean;
};

const QuestionOption = ({
  percent,
  option,
  isAnswered,
}: QuestionOptionType) => {
  return (
    <div className="input-group m-4 ms-0">
      <div className="input-group-text">
        <input
          id={option}
          type="radio"
          value={option}
          className="form-check-input"
          aria-label="Text input with radio button"
          name="questionOption"
          disabled={isAnswered}
        />
      </div>
      <text className="form-control">
        {option}{" "}
        <text className="text-primary" aria-readonly>
          {isAnswered && ` ${percent}%`}
        </text>
      </text>
    </div>
  );
};

export default QuestionOption;
