import React, { useMemo } from "react";
import { GetWheelsImages } from "../getImage/images";
import carData from "./data";

export default function ControlWheels({ handleSelectWheels }) {
  // Fetch car data only once and extract the relevant data
  const wheelsData = useMemo(() => carData()[0]?.porsche[0]?.wheels || [], []);

  const wheels = useMemo(
    () => [
      { wheel: "standard-equipment" },
      { wheel: "gold" },
    ],
    []
  );

  return (
    <div className="wheels-control grid grid-cols-2 grid-rows-2 gap-6 px-3 justify-center items-center">
      {wheels.map(({ wheel }, index) => {
        const currentWheel = wheelsData[index];
        return (
          <button
            key={index}
            onClick={() => handleSelectWheels(wheel)}
            className="wheel-button focus:outline-none focus:font-bold focus:ring-1 focus:ring-slate-600 rounded-lg p-1"
          >
            {/* Display wheel image */}
            <GetWheelsImages wheel={wheel} />
            
            {/* Wheel description */}
            <span className="text-sm">
              {currentWheel?.description || "No description"}
            </span>
            
            {/* Extra cost if applicable */}
            <p className="text-sm font-medium text-gray-700">
              {currentWheel?.costExtra > 0 ? `$${currentWheel.costExtra}` : ""}
            </p>
          </button>
        );
      })}
    </div>
  );
}
