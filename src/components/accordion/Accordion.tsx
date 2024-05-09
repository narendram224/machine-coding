import React, { ReactNode, useRef } from "react";
interface AccordionComponentProps {
  heading: ReactNode;
  drowdownIcon?: ReactNode;
  children: ReactNode;
  onToggle?: () => void;
  active?: boolean;
  index?: number;
}

const AccordionComponent = ({
  heading,
  drowdownIcon,
  children,
  onToggle,
  active,
  index,
}: AccordionComponentProps) => {
  const contentEl = useRef<HTMLDivElement | null>(null);
  return (
    <li className={`accordion_item ${active ? "active" : ""}`}>
      <button className="button" data-key={index}>
        {heading}
        <span className="control">{active ? "—" : "+"} </span>
      </button>
      <div
        ref={contentEl}
        className={`answer_wrapper`}
        style={
          active
            ? { height: contentEl?.current?.scrollHeight }
            : { height: "0px" }
        }
      >
        <div className="answer">{children}</div>
      </div>
    </li>
  );
};

export default AccordionComponent;
