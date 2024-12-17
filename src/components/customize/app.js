import React, { useState, useCallback, useMemo } from "react";
import carData from "./data";
import { GetCustomCarImages, GetSelectImage } from "../getImage/images";
import ControlColor from "./controlColor";
import ControlWheels from "./wheelsControl";
import OpenModelViewButton from "../open_3d/openButton";
import debounce from "lodash.debounce";

export default function SelectCar() {
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [modelViewIndex, setModelViewIndex] = useState(0);
  const [selectedWheel, setSelectedWheel] = useState("standard");
  const [carFeature, setCarFeature] = useState(false);
  const [openModel, setOpenModel] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const car = useMemo(() => {
    const data = carData();
    return data?.[0]?.porsche?.[0] || { name: "Unknown", model: "N/A", colors: ["white"] };
  }, []);
  const { name, model, model_views = [], colors = ["white"] } = car;

  const filteredColors = useMemo(() => {
    return colors.filter((color) => color.toLowerCase().includes(searchQuery.toLowerCase()));
  }, [colors, searchQuery]);

  const handleSelectColor = useCallback(
    debounce((color = colors[0]) => {
      setCarFeature(false);
      const colorIndex = colors.indexOf(color);
      if (colorIndex !== -1) setSelectedColorIndex(colorIndex);
    }, 300),
    [colors]
  );

  const handleSelectWheels = useCallback((wheel) => {
    setCarFeature((prev) => !prev);
    setSelectedWheel(wheel);
  }, []);

  
  const handleOpen360Model = () => {
    setOpenModel(!openModel);
  };

  return (
    <main className="" >
      <div className="flex w-full items-center justify-center px-4 bg-[#eeeff2] mb-6">
      <div className="flex flex-col h-screen items-center w-[75%]">
        <header className="flex w-full items-center px-4 pt-6">
          <h2 className="text-2xl font-bold mr-4">{name}</h2>
          <p className="text-lg">{model}</p>
        </header>

        <div className="flex relative items-center justify-center border-white border-[12px] rounded-[30px] overflow-hidden bg-slate-100 w-full h-full">
          <GetCustomCarImages
            data={car}
            index={selectedColorIndex}
            modelView={model_views[modelViewIndex] || ""}
            changeFeature={carFeature}
            selectedWheel={selectedWheel}
            openModel={openModel}
          />
          <div className="absolute bottom-0 right-0 pr-4 pb-4">
            <OpenModelViewButton handleOpen={handleOpen360Model} viewStatus={openModel} />
          </div>
        </div>

        <div className="mt-4 px-4">
          <GetSelectImage
            modelView={model_views}
            data={car}
            index={selectedColorIndex}
            setModelViewIndex={setModelViewIndex}
          />
        </div>
      </div>

      <aside className="w-[25%] overflow-y-scroll h-screen px-4 grid gap-4">
        <div className="w-full h-20 bg-white rounded-lg">
          <input
            type="search"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-full px-4 py-2 border border-slate-300 rounded-lg"
            aria-label="Search for car colors"
          />
        </div>

        <div className="grid gap-y-4 h-full bg-white px-4 py-4 rounded-lg border">
          <h4 className="text-lg">Select Your Favorite Colors</h4>
          <div className="grid gap-4 grid-cols-2">
            <ControlColor handleSelectColor={handleSelectColor} colors={filteredColors} />
          </div>
        </div>

        <div className="grid gap-4 h-full bg-white px-4 pt-4 rounded-lg border">
          <h4 className="text-lg">Select Your Favorite Wheels</h4>
          <ControlWheels handleSelectWheels={handleSelectWheels} />
        </div>
      </aside>
    </div>
    </main >
  );
}
