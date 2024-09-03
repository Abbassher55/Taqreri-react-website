import logo from "../assets/imgs/taqreri-logo.png";
import menu from "../assets/imgs/menu.png";
const TopBar = ({ togglerFunction }) => {
  return (
    <div className="flex items-center justify-between bg-theme-yellow bg-opacity-25 p-3 md:rounded-2xl lg:justify-end">
      <span onClick={togglerFunction} className="hover:cursor-pointer">
        <img src={menu} className="block h-6 w-6 lg:hidden" alt="Manu icon" />
      </span>
      <img src={logo} className="h-12 lg:h-14" alt="Taqreri logo" />
    </div>
  );
};

export default TopBar;
