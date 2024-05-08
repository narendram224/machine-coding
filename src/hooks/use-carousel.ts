"use client";
import React from "react";

interface UseCarouselProps {
  noOfItems?: number;
}

export const useCarousel = ({ noOfItems = 2 }: UseCarouselProps) => {
  const [noOfItemsToShow, setNoOfItemsToShow] = React.useState(noOfItems);
  const [currentItem, setCurrentItem] = React.useState(1);
  const infine = React.useRef<NodeJS.Timer>();
  const onNext = React.useCallback(() => {
    console.log("currentItem", currentItem);

    if (currentItem == noOfItemsToShow) {
      setCurrentItem(() => 1);
    } else {
      setCurrentItem((item) => item + 1);
    }
  }, [currentItem, noOfItemsToShow]);
  const onPrev = () => {
    if (currentItem === 1) {
      setCurrentItem(() => noOfItemsToShow);
    } else {
      setCurrentItem((item) => item - 1);
    }
  };
  //   React.useEffect(() => {
  //     infine.current = setInterval(() => {
  //       onNext();
  //     }, 2000);

  //     return () => {
  //       clearInterval(infine.current);
  //     };
  //   }, [currentItem, onNext]);

  return { noOfItemsToShow, onNext, onPrev, currentItem };
};
