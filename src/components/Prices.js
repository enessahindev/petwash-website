import React, { useEffect, useState } from "react";

// import Data

import { bundleData } from "../data";

// import components
import Bundles from "./Bundles";

const Prices = () => {
  // index state
  const [index, setIndex] = useState(0);
  // bundles state
  const [bundles, setBundles] = useState([]);

  useEffect(() => {
    setBundles(bundleData[0].services);
  }, []);

  const getBundle = (name) => {
    const newBundle = bundleData.find((bundle) => {
      return bundle.name === name;
    });
    setBundles(newBundle.services);
  };

  return (
    <section className="py-12 lg:py-24">
      <div className="container mx-auto">
        {/* Text */}
        <div className="text-center mb-20">
          <div className="text-red font-semibold mb-3">Our Prices</div>
          <h2 className="h2 mb-3">How big your dog is?</h2>
          <p className="text-lg text-blue">Choose your dog category</p>
          {/* Grid */}
          <div className="grid grid-cols-4 gap-4 lg:gap-[30px]">
            {bundleData.map((item, indx) => {
              const { name, image, dogCategory } = item;
              return (
                <div
                  onClick={() => {
                    setIndex(indx);
                    getBundle(name);
                  }}
                  className="cursor-pointer text-center"
                  key={indx}
                >
                  {/* Image */}
                  <div className="mb-2 lg:mb-8 hover:scale-105 transition-all duration-300">
                    <img className="w-full" src={image.type} alt="" />
                  </div>
                  <h3 className="lg:text-2xl capitalize font-semibold text-blue lg:mb-2">
                    {name}
                  </h3>
                  {/* Category Text */}
                  <div
                    className={`${
                      index === indx
                        ? "border-b-4 border-red transition-all after:lg:w-5 after:lg:h-5 after:bg-triangle after:lg:bg-no-repeat after:lg:block after:lg:left-[130px] after:lg:absolute after:lg:-bottom-6 relative"
                        : "border-b-4 border-transparent"
                    } pb-4 mb-12`}
                  >
                    <div className="hidden lg:block capitalize">
                      {dogCategory}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* Bundles */}
        <Bundles bundles={bundles} />
      </div>
    </section>
  );
};

export default Prices;
