"use client";
import AccordionComponent from "@/components/accordion/Accordion";
import React from "react";

const Hello = () => <div>Hello JS</div>;
const list = [
  {
    heading: "Headiong1",
    body: <Hello />,
  },
  {
    heading: "Headiong2",
    body: <Hello />,
  },
  {
    heading: "Headiong3",
    body: <Hello />,
  },
  {
    heading: "Headiong4",
    body: <Hello />,
  },
];

const AccordionPage = () => {
  const [clicked, setClicked] = React.useState<null | number>(null);

  const handleToggle = (e: any) => {
    const index = parseInt(e.target?.getAttribute("data-key"));
    if (clicked === index) {
      return setClicked(null);
    }
    setClicked(index !== undefined ? index : null);
  };
  return (
    <div onClick={handleToggle}>
      {list?.map((accordion, index) => {
        return (
          <AccordionComponent
            key={accordion.heading}
            heading={accordion.heading}
            active={clicked === index}
            index={index}
          >
            {accordion.body}
          </AccordionComponent>
        );
      })}
    </div>
  );
};

export default AccordionPage;
