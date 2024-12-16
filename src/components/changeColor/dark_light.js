export function ChangeDarkLight({ event, textContent }) {
  return (
    <GetChangeBgColor>
      <button onClick={event}>{textContent}</button>
    </GetChangeBgColor>
  );
}

export function ChangeBackgroundColor({ event, textContent }) {
  return (
    <GetChangeBgColor>
      <button onClick={event}>{textContent}</button>
    </GetChangeBgColor>
  );
}

function GetChangeBgColor({ children }) {
  return (
    <div className="text-black px-3 py-2 rounded-md text-sm cursor-pointer">
      {children}
    </div>
  );
}
