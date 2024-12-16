export default function ControlColor({ handleSelectColor }) {
  const colors = [
    { color: "black" },
    { color: "blue" },
    { color: "cartagenagelbmetalic" },
    { color: "gentianblue" },
    { color: "white" },
    { color: "darkgreen" },
    { color: "vanadium" },
    { color: "slate" },
    { color: "silver" },
    { color: "red" },
  ];

  return (
    <>
      {colors.map(({ color }) => (
        <div key={color} className="text-center grid grid-cols-1 grid-rows-2 gap-x-2">
          <button
            className={`${
              color === "black"
                ? "bg-black"
                : color === "blue"
                ? "bg-blue-500"
                : color === "cartagenagelbmetalic"
                ? "bg-[#ced27b]"
                : color === "gentianblue"
                ? "bg-blue-800"
                : color === "white"
                ? "bg-[#efefef]"
                : color === "darkgreen"
                ? "bg-green-950"
                : color === "vanadium"
                ? "bg-slate-500"
                : color === "slate"
                ? "bg-slate-700"
                : color === "silver"
                ? "bg-[#cccccc]"
                : "bg-[#cc0033]"
            } border-[0.3px] text-white font-bold w-38 h-12 rounded`}
            onClick={() => handleSelectColor(color)}
          ></button>
          <div className="text-xs mt-1">{color}</div> {/* Color name below button */}
        </div>
      ))}
    </>
  );
}
