import Carousel from "@/components/carousel";
import React from "react";

const CarouselPage = () => {
  return (
    <div>
      <Carousel
        slides={[
          <div className="bg-indigo-200" key={1}>
            Hello
          </div>,
          <div className="bg-indigo-400" key={1}>
            Hello1
          </div>,
          <div className="bg-indigo-600" key={1}>
            Hell2
          </div>,
          <div className="bg-lime-200" key={1}>
            Hello2
          </div>,
          <div className="bg-lime-400" key={1}>
            Hell4
          </div>,
        ]}
      />
    </div>
  );
};

export default CarouselPage;
