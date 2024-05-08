"use client";
import { useCarousel } from "@/hooks/use-carousel";
import React, { Fragment, ReactNode, useState } from "react";

const Carousel = ({ slides }: { slides: ReactNode[] }) => {
  const length = slides.length;
  //   const slides = Array.from({ length }, (_, index) => index + 1);
  const { onNext, onPrev, currentItem } = useCarousel({ noOfItems: length });
  console.log("currentItem", currentItem, slides);

  return (
    <div>
      <div className="carousel-content">
        {slides?.map((item, index) => {
          return (
            <Fragment key={index}>
              {index + 1 == currentItem ? (
                <div className="carousel-item">{item}</div>
              ) : null}
            </Fragment>
          );
        })}
      </div>
      <div className="flex gap-2">
        <button onClick={onPrev}>Pres</button>
        <button onClick={onNext}>Next</button>
      </div>
    </div>
  );
};

export default Carousel;
