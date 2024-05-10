import React from "react";
interface StepProps {
  heading: string;
  step: number;
  total: number;
  onNext: (step: number) => void;
  onPrev: (step: number) => void;
  children: React.ReactNode;
}

const Step = ({
  heading,
  step,
  total,
  onNext,
  children,
  onPrev,
}: StepProps) => {
  console.log("step + 1 > total", step + 1, total);

  return (
    <div className="max-w-sm px-4 pt-4 pb-2 bg-white border flex flex-col justify-between border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div>
        <p>
          {step + 1}/{total}
        </p>
        <h2 className="m-2">{heading}</h2>
      </div>
      <div>{children}</div>
      <footer className=" flex gap-3 justify-between mt-4">
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          disabled={step - 1 === -1}
          onClick={() => onPrev(step)}
        >
          back
        </button>
        <button
          type={step + 1 === total ? "submit" : "button"}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          disabled={step + 1 > total}
          onClick={() => (step + 1 === total ? () => {} : onNext(step))}
        >
          {step + 1 === total ? "Submit" : "Next"}
        </button>
      </footer>
    </div>
  );
};

export default Step;
