// File: components/GetCarImages.js
import React from "react";
import UnityEmbed from "../open_3d/model/model";

const CAR_PICTURE_PATH = "./assets/cars";

export default function GetCarImages({ car, index }) {
  const imageUrl = `${CAR_PICTURE_PATH}/${car.color}/c${index + 1}.webp`;
  return <img src={imageUrl} alt={car.name} />;
}

// Other exports remain the same
export function GetCustomCarImages({ data, index, modelView, changeFeature, selectedWheel, openModel }) {
  const infoData = `${data.imageId}-${modelView}-${data.colors[index]}.webp`;
  const selectColorImage = `${CAR_PICTURE_PATH}/porsche/${infoData}`;
  const wheelsImage = `${CAR_PICTURE_PATH}/porsche/wheels/${selectedWheel}/side-view.webp`;

  return openModel ? (
    <UnityEmbed />
  ) : (
    <img
      src={changeFeature ? wheelsImage : selectColorImage}
      alt={`${data.name} ${data.model}`}
      className="rounded-xl"
    />
  );
}

export function GetSelectImage({ modelView, data, index, setModelViewIndex }) {
  const color = data.colors[index] || "white.webp";

  return (
    <ul className="flex gap-3 overflow-visible">
      {modelView.map((model, idx) => (
        <button
          onClick={() => setModelViewIndex(idx)}
          key={`${data.imageId}-${model}-${idx}`}
          className="w-full h-full cursor-pointer focus:outline-none focus:ring-4 focus:ring-slate-600 rounded-lg"
        >
          <img
            src={`${CAR_PICTURE_PATH}/porsche/${data.imageId}-${model}-${color}.webp`}
            alt={model}
            className="rounded-md"
          />
        </button>
      ))}
    </ul>
  );
}

export function GetWheelsImages({ wheel, styles }) {
  const imageExtension = ".jpg";

  return (
    <ul className="flex items-center justify-center gap-4">
      <li>
        <img
          src={`${CAR_PICTURE_PATH}/porsche/wheels/wheel-${wheel}${imageExtension}`}
          alt={wheel}
          style={styles}
        />
      </li>
    </ul>
  );
}
