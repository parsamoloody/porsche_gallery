export default function OpenModelViewButton({ handleOpen, viewStatus }) {
  return (
    <button
      className="bg-white text-black font-semibold p-2 py-4 px-6 rounded"
      onClick={handleOpen}
    >
      {
        viewStatus ? "Close 360° view" : "Open 360° view"
      }
    </button>
  );
}