import siteLogo from "/assets/clearlink-logo.svg";
import vArrowIcon from "/assets/v-arrow-icon.svg";

const Header = () => {
  return (
      <header className="max-sm:hidden rounded-full py-2 px-8 flex justify-between items-center bg-[#F2F4F7] border-[1px] border-gray-200">
        <img src={siteLogo} alt="Clear Link logo" className="cursor-pointer" />
        <nav className="text-[#667085] font-semibold">
          <ul className="flex justify-start items-center sm:gap-4 lg:gap-10">
            <li className="flex justify-around items-center text-lg gap-1 cursor-pointer">
              <span>Products</span>
              <img src={vArrowIcon} alt="arrow icon" />
            </li>
            <li className="flex justify-around items-center text-lg gap-1 cursor-pointer">
              <span>Solutions</span>
              <img src={vArrowIcon} alt="arrow icon" />
            </li>
            <li className="flex justify-around items-center text-lg gap-1 cursor-pointer">
              <span>Resources</span>
              <img src={vArrowIcon} alt="arrow icon" />
            </li>
            <li className="text-lg cursor-pointer max-xl:hidden">Pricing</li>
          </ul>
        </nav>
        <div className="flex gap-1">
          <button className="rounded-full px-4 py-3 text-base font-semibold text-gray-900 bg-white border-[1px] border-gray-400 max-xl:hidden">
            Talk to sales
          </button>
          <button className="rounded-full min-w-10 sm:p-2 lg:px-4 lg:py-3 text-base font-semibold text-white bg-blue-700">
            Sign up for free
          </button>
        </div>
      </header>
  );
};

export default Header;


