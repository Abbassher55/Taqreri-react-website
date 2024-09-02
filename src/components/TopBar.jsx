import logo from "../assets/imgs/taqreri-logo.png";
const TopBar = () => {
  return (
    <div className="hidden justify-end rounded-2xl bg-theme-yellow bg-opacity-25 p-3 lg:flex">
      <img src={logo} className="h-14" alt="Taqreri logo" />
    </div>
  );
};

export default TopBar;
