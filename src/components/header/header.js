import {
  ChangeDarkLight,
} from "../changeColor/dark_light";

export default function Header({ onChangeBackgroundColor, changeDarkLight }) {
  return (
    <header className="flex justify-between items-center px-20 py-4 bg-[#eeeff2]">
      <div className="flex h-14">
        <img src="./../../assets/logo-png/logo.png" alt="logo" />
      </div>
      <nav>
        <ul className="flex gap-4">
         
          <li>
            <ChangeDarkLight textContent={"Dark"} event={changeDarkLight} />
          </li>
          <li>
            
          </li>
        </ul>
      </nav>
    </header>
  );
}
